'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, DollarSign, Calendar } from 'lucide-react'
import JobDetailsModal from './JobDetailsModal'
import type { Job } from '@/types'

export default function JobsList({ jobs }: { jobs: Job[] }) {

  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const openJob = (job: Job) => {
    setSelectedJob(job)
  }

  const formatLocation = (location?: string) => {
    if (!location) return null

    return location
      .split(',')
      .map((loc) => loc.trim())
      .join(' • ')
  }

  return (
    <>
      {jobs.length === 0 ? (
        <div className="text-center py-28">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            No open positions
          </h3>
          <p className="text-gray-500">
            We’re not hiring right now, but check back later.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {jobs.map((job) => (
            <Card
              key={job.id}
              onClick={() => openJob(job)}
              className="cursor-pointer group relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

              <CardHeader className="relative pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {job.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative space-y-5">

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {job.objective}
                </p>

                <div className="flex flex-wrap gap-3 text-xs">

                  {job.location && (
                    <div className="flex items-center gap-1 bg-gray-100 px-3 py-1.5 rounded-full text-gray-700">
                      <MapPin className="w-3.5 h-3.5" />
                      {formatLocation(job.location)}
                    </div>
                  )}

                  {job.salaryRange && (
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
                      <DollarSign className="w-3.5 h-3.5" />
                      {job.salaryRange}
                    </div>
                  )}

                  {job.joiningPeriod && (
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.joiningPeriod}
                    </div>
                  )}

                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      )}

      <JobDetailsModal
        job={selectedJob}
        open={!!selectedJob}
        onOpenChange={() => setSelectedJob(null)}
      />
    </>
  )
}