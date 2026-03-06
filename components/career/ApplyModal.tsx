'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { storage, db } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { FileUp, CheckCircle } from 'lucide-react';
import type { Job } from '@/types';

const formSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  resume: z
    .instanceof(File)
    .refine(file => file.size <= 5 * 1024 * 1024, 'Max file size 5MB')
    .refine(
      file => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type),
      'Only PDF, DOC, DOCX are allowed'
    ),
});

type FormData = z.infer<typeof formSchema>;

export default function ApplyModal({ open, onOpenChange, job }: { open: boolean; onOpenChange: (open: boolean) => void; job: Job | null }) {
  const [uploading, setUploading] = useState(false);
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (!job) return;
    setUploading(true);
    try {
      // Upload resume
      const file = data.resume;
      const fileName = `${Date.now()}_${file.name}`;
      const storageRef = ref(storage, `resumes/${fileName}`);
      await uploadBytes(storageRef, file);
      const resumeURL = await getDownloadURL(storageRef);

      // Save application
      await addDoc(collection(db, 'applications'), {
        jobId: job.id,
        jobTitle: job.title,
        fullName: data.fullName || null,
        email: data.email || null,
        resumeURL,
        fileName,
        appliedAt: serverTimestamp(),
      });

      // Success message
      toast.custom(
        (t) => (
          <div className="bg-white rounded-2xl shadow-2xl border border-green-100 p-6 flex items-start gap-4">
            <div className="bg-green-100 rounded-full p-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">Application Sent!</h3>
              <p className="text-gray-600 mt-1">
                Thank you for applying to {job.title}. We'll review your application and get back to you soon.
              </p>
            </div>
          </div>
        ),
        { duration: 6000 }
      );

      reset();
      onOpenChange(false);
    } catch (error) {
      console.error(error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">Apply for {job?.title}</DialogTitle>
          <DialogDescription className="text-gray-500">
            Upload your resume (PDF, DOC, DOCX, max 5MB). Name and email are optional.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-700">Full Name <span className="text-gray-400">(optional)</span></Label>
            <Input
              id="fullName"
              {...register('fullName')}
              placeholder="John Doe"
              className="rounded-xl border-gray-200 focus:border-blue-300 focus:ring-blue-200"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email <span className="text-gray-400">(optional)</span></Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="john@example.com"
              className="rounded-xl border-gray-200 focus:border-blue-300 focus:ring-blue-200"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume" className="text-gray-700">Resume *</Label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 transition-colors cursor-pointer">
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) setValue('resume', e.target.files[0]);
                }}
              />
              <label htmlFor="resume" className="cursor-pointer">
                <FileUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
              </label>
            </div>
            {errors.resume && <p className="text-sm text-red-500 mt-1">{errors.resume.message}</p>}
          </div>
          <Button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 text-lg font-medium transition-all"
          >
            {uploading ? 'Uploading...' : 'Submit Application'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}