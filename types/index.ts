export interface Job {
  id?: string;
  title?: string;
  objective?: string;
  responsibilities?: string;
  preferredSkills?: string;
  desirableSkills?: string;
  qualifications?: string;
  location?: string;
  salaryRange?: string;
  joiningPeriod?: string;
  createdAt?: any; // Firestore Timestamp
}

export interface Application {
  id?: string;
  jobId: string;
  jobTitle: string;
  fullName?: string;
  email?: string;
  resumeURL: string;
  fileName: string;
  appliedAt?: any; // Firestore Timestamp
}