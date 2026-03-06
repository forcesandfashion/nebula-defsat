import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'
import JobsList from '@/components/career/JobList'
import { Building2 } from 'lucide-react'

export default async function HomePage() {
  const jobsSnapshot = await getDocs(collection(db, 'jobs'))

  const jobs = jobsSnapshot.docs.map((doc) => {
    const data = doc.data()

    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt
        ? data.createdAt.toDate().toISOString()
        : null,
    }
  })

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-24">

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
              <Building2 className="w-7 h-7" />
            </div>

            <h1 className="text-5xl font-bold">
              Careers
            </h1>
          </div>

          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Join our team and help shape the future. We're looking for passionate
            people who want to build amazing products and make a real impact.
          </p>

        </div>
      </section>

      {/* JOB LIST */}
      <section className="container mx-auto px-6 py-16">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Open Positions
          </h2>

          <span className="text-sm text-gray-500">
            {jobs.length} jobs available
          </span>
        </div>

        <JobsList jobs={jobs} />

      </section>

    </main>
  )
}