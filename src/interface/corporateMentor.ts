export interface mentorType {
  name: string;
  company: string;
  email: string;
  phone: string;
}

export interface mentorHashType {
  [id: number]: mentorType;
}
