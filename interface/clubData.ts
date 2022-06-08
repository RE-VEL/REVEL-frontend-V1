export interface mentorType {
  name: string;
  belong: string;
  email: string;
  phoneNum: string;
}

export interface clubType {
  purpose: string;
  achievement: string;
  memo: string;
  firstDesiredRoom: string;
  secondDesiredRoom: string;
  clubName: string;
  founding: string;
  rep: string;
  teacher: string;
  members: string[];
  mentor: mentorType[];
}
