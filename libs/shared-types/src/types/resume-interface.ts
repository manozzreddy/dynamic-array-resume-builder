export interface ResumeData {
  name: string;
  phoneNumber: string;
  email: string;
  location: string;
  professionalSummary: string;

  experience: ProfessionalExperience[];
  education: Education[];
  certifications: string[];
  technicalSkills: string[];
  languages: string[];
}

export interface ProfessionalExperience {
  company: string;
  role: string;
  startDate: string; // ISO date format (YYYY-MM-DD)
  endDate: string; // ISO date format (YYYY-MM-DD) or 'Present'
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string; // ISO date format (YYYY-MM-DD)
  endDate: string; // ISO date format (YYYY-MM-DD)
  achievements?: string[];
}
