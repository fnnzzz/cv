export interface CvLink {
  name: string;
  href: string;
  val: string;
  targetBlank?: boolean;
}

export interface CvHeader {
  pic: string;
  /** short intro clip that plays in the photo's circle on click */
  video?: string;
  fullname: string;
  title: string;
  location: string;
  /** screen only: a short "open to" line */
  availability?: string;
  links: CvLink[];
}

export interface CvSummary {
  title: string;
  paragraphs: string[];
}

export interface CvSkills {
  title: string;
  rows: { name: string; items: string }[];
}

export interface CvEntry {
  name: string;
  start: string;
  end?: string;
  descr?: string;
  bullets?: string[];
  stack?: string;
}

export interface CvSection {
  title: string;
  compact?: boolean;
  entries: CvEntry[];
}

export interface CvEducation {
  title: string;
  lines: string[];
  badges?: { pic: string; url: string; alt: string }[];
}

/** screen-only stat tiles above the summary */
export interface CvHighlight {
  value: string;
  label: string;
}

export interface CvData {
  meta: {
    docTitle: string;
    pdf: { href: string; label: string };
  };
  header: CvHeader;
  highlights?: CvHighlight[];
  summary: CvSummary;
  skills: CvSkills;
  sections: CvSection[];
  education: CvEducation;
}
