'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Pencil, Trash2, Plus, MapPin } from 'lucide-react'
import { toast } from 'sonner'
import { db } from '@/lib/firebase'
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore'

import type { Job } from '@/types'

export default function JobManagement({
  jobs,
  onJobChange
}: {
  jobs: Job[]
  onJobChange: () => void
}) {
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<Job>>({})
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  const resetForm = () => {
    setFormData({})
    setEditingJob(null)
  }

  const handleEdit = (job: Job) => {
    setEditingJob(job)
    setFormData(job)
    setIsDialogOpen(true)
  }

  const handleDelete = async (jobId: string) => {
    try {
      await deleteDoc(doc(db, 'jobs', jobId))
      toast.success('Job deleted successfully')
      onJobChange()
      setDeleteConfirm(null)
    } catch {
      toast.error('Failed to delete job')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingJob) {
        await updateDoc(doc(db, 'jobs', editingJob.id!), formData)
        toast.success('Job updated successfully')
      } else {
        await addDoc(collection(db, 'jobs'), {
          ...formData,
          createdAt: serverTimestamp()
        })
        toast.success('Job created successfully')
      }

      setIsDialogOpen(false)
      resetForm()
      onJobChange()
    } catch {
      toast.error(editingJob ? 'Failed to update job' : 'Failed to create job')
    }
  }

  const formatLines = (text?: string) => {
    if (!text) return []
    return text.split('\n').filter((line) => line.trim() !== '')
  }

  return (
    <>
      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Job Openings
          </h2>

          <p className="text-gray-500 text-sm">
            Manage and publish open roles
          </p>
        </div>

        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open)
            if (!open) resetForm()
          }}
        >
          <DialogTrigger asChild>

            <Button className="rounded-xl px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">

              <Plus className="w-4 h-4 mr-2" />
              New Job

            </Button>

          </DialogTrigger>

          {/* CREATE / EDIT MODAL */}

          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl">

            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingJob ? 'Edit Job' : 'Create New Job'}
              </DialogTitle>
            </DialogHeader>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 mt-4"
            >

              <div>
                <Label>Job Title</Label>
                <Input
                  value={formData.title || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <Label>Description (One point per line)</Label>
                <Textarea
                  rows={4}
                  placeholder="Write each point on a new line"
                  value={formData.objective || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      objective: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <Label>Key Responsibilities (Line by line)</Label>
                <Textarea
                  rows={4}
                  value={formData.responsibilities || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      responsibilities: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <Label>Preferred Skills (Line by line)</Label>
                <Textarea
                  rows={4}
                  value={formData.preferredSkills || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredSkills: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <Label>Desirable Skills</Label>
                <Textarea
                  rows={4}
                  value={formData.desirableSkills || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      desirableSkills: e.target.value
                    })
                  }
                />
              </div>

              <div>
                <Label>Qualifications</Label>
                <Textarea
                  rows={3}
                  value={formData.qualifications || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      qualifications: e.target.value
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <Label>Location (One per line)</Label>
                  <Textarea
                    rows={3}
                    placeholder="Delhi
Bangalore
Remote"
                    value={formData.location || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value
                      })
                    }
                  />
                </div>

                <div>
                  <Label>Salary Range</Label>
                  <Input
                    value={formData.salaryRange || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        salaryRange: e.target.value
                      })
                    }
                  />
                </div>

              </div>

              <div>
                <Label>Joining Period</Label>
                <Input
                  value={formData.joiningPeriod || ''}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      joiningPeriod: e.target.value
                    })
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-6 rounded-xl"
              >
                {editingJob ? 'Update Job' : 'Create Job'}
              </Button>

            </form>

          </DialogContent>
        </Dialog>
      </div>

      {/* JOB LIST */}

      <div className="grid gap-6">

        {jobs.map((job) => (
          <Card
            key={job.id}
            className="group border border-gray-200 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            <CardHeader>

              <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition">
                {job.title}
              </CardTitle>

            </CardHeader>

            <CardContent className="text-gray-600 space-y-4">

              {/* DESCRIPTION */}

              {job.objective && (
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {formatLines(job.objective).map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}

              {/* LOCATIONS */}

              {job.location && (
                <div className="flex gap-2 text-sm text-gray-500">

                  <MapPin className="w-4 h-4 mt-1" />

                  <ul className="space-y-1">
                    {formatLines(job.location).map((loc, i) => (
                      <li key={i}>{loc}</li>
                    ))}
                  </ul>

                </div>
              )}

            </CardContent>

            <CardFooter className="flex justify-end gap-2">

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(job)}
                className="rounded-lg"
              >
                <Pencil className="w-4 h-4 mr-1" />
                Edit
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={() => setDeleteConfirm(job.id!)}
                className="rounded-lg"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>

            </CardFooter>

          </Card>
        ))}

      </div>

      {/* DELETE CONFIRM */}

      <Dialog
        open={!!deleteConfirm}
        onOpenChange={() => setDeleteConfirm(null)}
      >

        <DialogContent className="rounded-xl">

          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>

          <p className="text-gray-600">
            Are you sure you want to delete this job? This action cannot be undone.
          </p>

          <div className="flex justify-end gap-2 mt-6">

            <Button
              variant="outline"
              onClick={() => setDeleteConfirm(null)}
            >
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={() => handleDelete(deleteConfirm!)}
            >
              Delete
            </Button>

          </div>

        </DialogContent>

      </Dialog>
    </>
  )
}