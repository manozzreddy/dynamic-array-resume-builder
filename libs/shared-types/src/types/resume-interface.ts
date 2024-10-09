export interface ResumeData {
  personalDetails: PersonalDetails;
  professionalSummary: string;

  experience?: ProfessionalExperience[];
  education?: Education[];
  certifications?: string[];
  technicalSkills?: string[];
  languages?: string[];
}

export interface PersonalDetails {
  email: string;
  fullName: string;
  location: string;
  phoneNumber: string;
}

export interface ProfessionalExperience {
  employer: string;
  jobTitle: string;
  startDate: string; // ISO date format (YYYY-MM-DD)
  endDate: string; // ISO date format (YYYY-MM-DD) or 'Present'
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string; // ISO date format (YYYY-MM-DD)
  endDate: string; // ISO date format (YYYY-MM-DD)
  achievements?: string[];
}
