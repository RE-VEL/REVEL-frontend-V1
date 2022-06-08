import { mentorType } from './corporateMentor';

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

export type clubDocsValue = string[] | mentorType[];
