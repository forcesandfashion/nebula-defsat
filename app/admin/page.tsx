'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { toast } from 'sonner'
import {
  Pencil,
  Trash2,
  Plus,
  FileText,
  MapPin,
  DollarSign,
  Calendar,
  LogOut,
  Menu,
  Users,
  Briefcase,
  Search,
} from 'lucide-react'

import type { Job, Application } from '@/types'

export default function AdminDashboard() {
  const router = useRouter()

  const [applications, setApplications] = useState<Application[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  const [newJobOpen, setNewJobOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [jobForm, setJobForm] = useState<Partial<Job>>({})

  const [activeTab, setActiveTab] = useState<'dashboard' | 'jobs' | 'apps'>('dashboard')
  const [search, setSearch] = useState('')

  useEffect(() => {
    initialize()
  }, [])

  async function initialize() {
    const isAuth = await checkAuth()

    if (!isAuth) {
      router.replace('/admin/login')
      return
    }

    await fetchData()
  }

  async function checkAuth() {
    try {
      const res = await fetch('/api/admin/check-auth')

      if (!res.ok) return false

      return true
    } catch {
      return false
    }
  }

  const fetchData = async () => {
    try {
      const [appsSnapshot, jobsSnapshot] = await Promise.all([
        getDocs(query(collection(db, 'applications'), orderBy('appliedAt', 'desc'))),
        getDocs(collection(db, 'jobs')),
      ])

      setApplications(
        appsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Application[]
      )

      setJobs(
        jobsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Job[]
      )
    } catch (err) {
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'jobs'), {
        ...jobForm,
        createdAt: serverTimestamp(),
      })

      toast.success('Job created successfully')

      setNewJobOpen(false)
      setJobForm({})

      fetchData()
    } catch {
      toast.error('Failed to create job')
    }
  }

  const handleUpdateJob = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!editingJob?.id) return

    try {
      await updateDoc(doc(db, 'jobs', editingJob.id), jobForm)

      toast.success('Job updated')

      setEditingJob(null)
      setJobForm({})

      fetchData()
    } catch {
      toast.error('Failed to update job')
    }
  }

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm('Delete this job?')) return

    try {
      await deleteDoc(doc(db, 'jobs', jobId))

      toast.success('Job deleted')

      fetchData()
    } catch {
      toast.error('Failed to delete job')
    }
  }

  const openEditModal = (job: Job) => {
    setEditingJob(job)
    setJobForm(job)
  }

  const handleLogout = async () => {
    try {
      // call backend logout route if you have one (invalidate session/token)
      await fetch('/api/admin/logout', { method: 'POST' })
    } catch (err) {
      // ignore, we'll still redirect
    } finally {
      router.replace('/admin/login')
    }
  }

  const filteredApplications = applications.filter((app) => {
    if (!search) return true
    const q = search.toLowerCase()
    return (
      app.fullName?.toLowerCase().includes(q) ||
      app.email?.toLowerCase().includes(q) ||
      app.jobTitle?.toLowerCase().includes(q)
    )
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="w-72 bg-white/60 backdrop-blur-md border-r border-slate-100 min-h-screen p-6 mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 w-12 h-12 flex items-center justify-center text-white font-bold">AY</div>
            <div>
              <p className="text-sm text-slate-500">Welcome back</p>
              <h3 className="font-semibold">Admin</h3>
            </div>
          </div>

          <nav className="space-y-1 ">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 w-full text-sm p-3 rounded-lg transition ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Menu className="w-4 h-4" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-3 w-full text-sm p-3 rounded-lg transition ${activeTab === 'jobs' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Briefcase className="w-4 h-4" />
              Manage Jobs
            </button>

            <button
              onClick={() => setActiveTab('apps')}
              className={`flex items-center gap-3 w-full text-sm p-3 rounded-lg transition ${activeTab === 'apps' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Users className="w-4 h-4" />
              Applications
            </button>
          </nav>

          <div className="mt-8">
            <h4 className="text-xs text-slate-500 uppercase mb-2">Quick actions</h4>
            <div className="flex gap-2">
              <Dialog open={newJobOpen} onOpenChange={setNewJobOpen}>
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Plus className="w-4 h-4 mr-2" /> New Job
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button variant="ghost" className="flex-1" onClick={fetchData}>
                Refresh
              </Button>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-8">
          {/* HEADER */}
          <header className="flex items-center justify-between mb-8 mt-16">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="text-slate-500 mt-1">Manage jobs, view applications and keep things running smoothly.</p>
            </div>

            <div className="flex items-center gap-4">
              {/* <div className="relative">
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search applications or jobs..."
                  className="pl-10 pr-4 w-96"
                />
                <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              </div> */}

              <div className="flex items-center gap-3">
                {/* <Button variant="ghost" className="px-3 py-2">
                  <FileText className="w-4 h-4 mr-2" /> Reports
                </Button> */}

                <div className="rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">A</div>
              </div>
            </div>
          </header>

          {/* CONTENT */}

          {activeTab === 'dashboard' && (
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-4">
                  <CardHeader>
                    <CardTitle className="text-sm">Total Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{jobs.length}</div>
                    <p className="text-sm text-slate-500 mt-2">Open positions across the company</p>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardHeader>
                    <CardTitle className="text-sm">Total Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{applications.length}</div>
                    <p className="text-sm text-slate-500 mt-2">Applications received</p>
                  </CardContent>
                </Card>

                <Card className="p-4">
                  <CardHeader>
                    <CardTitle className="text-sm">Recent Hires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">0</div>
                    <p className="text-sm text-slate-500 mt-2">Track recent hires (manual)</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold">Recent Applications</h2>
                <p className="text-slate-500 text-sm">Latest candidates who applied</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {filteredApplications.length === 0 ? (
                  <p className="text-slate-500">No applications found.</p>
                ) : (
                  filteredApplications.slice(0, 6).map((app) => (
                    <Card key={app.id} className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-sm">{app.jobTitle}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{app.fullName}</p>
                        <p className="text-sm text-slate-500">{app.email}</p>
                        <a href={app.resumeURL} target="_blank" className="text-indigo-600 text-sm mt-2 inline-block">View Resume</a>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </section>
          )}

          {activeTab === 'apps' && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>

              <div className="overflow-x-auto bg-white rounded-2xl p-4 shadow-sm">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left text-sm text-slate-500">
                      <th className="p-3">Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Applied</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((app) => (
                      <tr key={app.id} className="border-t">
                        <td className="p-3">
                          <div className="font-medium">{app.fullName}</div>
                        </td>
                        <td className="p-3 text-sm text-slate-600">{app.email}</td>
                        <td className="p-3 text-sm text-slate-600">{app.jobTitle}</td>
                        <td className="p-3 text-sm text-slate-500">{new Date(app.appliedAt?.toDate?.() || app.appliedAt || Date.now()).toLocaleString()}</td>
                        <td className="p-3 text-right">
                          <a href={app.resumeURL} target="_blank" className="text-indigo-600 text-sm">Download</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'jobs' && (
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">Manage Jobs</h2>
                  <p className="text-slate-500 text-sm">Create, edit or remove job postings</p>
                </div>

                <div className="flex items-center gap-2">
                  <Dialog open={newJobOpen} onOpenChange={setNewJobOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-indigo-600 text-white">
                        <Plus className="w-4 h-4 mr-2" /> New Job
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl">
                      <DialogHeader>
                        <DialogTitle>Create Job</DialogTitle>
                      </DialogHeader>

                      <form onSubmit={handleCreateJob} className="space-y-4 p-2">

                        <div>
                          <Label>Job Title</Label>
                          <Input
                            value={jobForm.title || ''}
                            onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                          />
                        </div>

                        <div>
                          <Label>Description</Label>
                          <Textarea
                            value={jobForm.objective || ''}
                            onChange={(e) => setJobForm({ ...jobForm, objective: e.target.value })}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label>Location</Label>
                            <Input value={jobForm.location || ''} onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })} />
                          </div>
                          <div>
                            <Label>Salary Range</Label>
                            <Input value={jobForm.salaryRange || ''} onChange={(e) => setJobForm({ ...jobForm, salaryRange: e.target.value })} />
                          </div>
                        </div>

                        <Button className="w-full bg-indigo-600 text-white">Create Job</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" onClick={fetchData}>Refresh</Button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <Card key={job.id} className="relative group rounded-2xl">

                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                    </CardHeader>

                    <CardContent>

                      <p className="text-gray-600 truncate">{job.objective}</p>

                      <div className="text-sm text-gray-500 space-y-1 mt-2">

                        {job.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        )}

                        {job.salaryRange && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {job.salaryRange}
                          </div>
                        )}

                        {job.joiningPeriod && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {job.joiningPeriod}
                          </div>
                        )}

                      </div>

                    </CardContent>

                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">

                      <button
                        onClick={() => openEditModal(job)}
                        className="p-2 bg-white rounded-full shadow"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteJob(job.id!)}
                        className="p-2 bg-white rounded-full shadow text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </Card>
                ))}
              </div>

              {/* Edit Modal (re-uses DialogContent for simplicity) */}
              {editingJob && (
                <Dialog open={!!editingJob} onOpenChange={() => setEditingJob(null)}>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>Edit Job</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleUpdateJob} className="space-y-4 p-2">

                      <div>
                        <Label>Job Title</Label>
                        <Input
                          value={jobForm.title || ''}
                          onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Description</Label>
                        <Textarea
                          value={jobForm.objective || ''}
                          onChange={(e) => setJobForm({ ...jobForm, objective: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label>Location</Label>
                          <Input value={jobForm.location || ''} onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })} />
                        </div>
                        <div>
                          <Label>Salary Range</Label>
                          <Input value={jobForm.salaryRange || ''} onChange={(e) => setJobForm({ ...jobForm, salaryRange: e.target.value })} />
                        </div>
                      </div>

                      <Button className="w-full bg-indigo-600 text-white">Update Job</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}

            </section>
          )}

        </main>
      </div>
    </div>
  )
}
