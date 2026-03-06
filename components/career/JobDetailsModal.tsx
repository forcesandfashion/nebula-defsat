'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { MapPin, DollarSign, Calendar } from 'lucide-react'
import ApplyModal from './ApplyModal'
import { useState } from 'react'
import type { Job } from '@/types'

export default function JobDetailsModal({
  job,
  open,
  onOpenChange
}: {
  job: Job | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {

  const [applyOpen, setApplyOpen] = useState(false)

  if (!job) return null

  const formatLocation = (location?: string) => {
    if (!location) return []
    return location.split(',').map(loc => loc.trim())
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>

        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white text-gray-900 shadow-xl rounded-2xl">

          {/* Header */}
          <DialogHeader className="border-b pb-4">
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {job.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8 py-2">

            {/* Job Meta */}
            <div className="flex flex-wrap gap-6 text-sm">

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-gray-500" />
                <div className="space-y-1">
                  {formatLocation(job.location).length > 0 ? (
                    formatLocation(job.location).map((loc, i) => (
                      <p key={i} className="text-gray-700">{loc}</p>
                    ))
                  ) : (
                    <p className="text-gray-500">N/A</p>
                  )}
                </div>
              </div>

              {/* Salary */}
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  {job.salaryRange || 'N/A'}
                </span>
              </div>

              {/* Joining */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">
                  {job.joiningPeriod || 'N/A'}
                </span>
              </div>

            </div>

            {/* Role Overview */}
            {job.objective && (
              <section className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Role Overview
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {job.objective}
                </p>
              </section>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <section className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Key Responsibilities
                </h3>

                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {job.responsibilities}
                </p>
              </section>
            )}

            {/* Preferred Skills */}
            {job.preferredSkills && (
              <section className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Preferred Skills
                </h3>

                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {job.preferredSkills}
                </p>
              </section>
            )}

            {/* Desirable Skills */}
            {job.desirableSkills && (
              <section className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Desirable Skills
                </h3>

                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {job.desirableSkills}
                </p>
              </section>
            )}

            {/* Qualifications */}
            {job.qualifications && (
              <section className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  Qualifications & Experience
                </h3>

                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {job.qualifications}
                </p>
              </section>
            )}

            {/* Apply Button */}
            <div className="pt-4 border-t">

              <Button
                onClick={() => setApplyOpen(true)}
                className="w-full h-12 text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
              >
                Apply for this Position
              </Button>

            </div>

          </div>

        </DialogContent>

      </Dialog>

      <ApplyModal
        open={applyOpen}
        onOpenChange={setApplyOpen}
        job={job}
      />
    </>
  )
}