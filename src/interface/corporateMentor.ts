export interface mentorType {
  name: string;
  belong: string;
  email: string;
  phoneNum: string;
}

export interface mentorHashType {
  [id: number]: mentorType;
}
