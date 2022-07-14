import { mentorType } from './corporateMentor';

interface mentorApplyRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
}

type clubType = 'CREATIVE' | 'AUTO' | 'MAJOR';
export type semesterType = 'FIRST' | 'SECOND';

export interface requestType {
  establishedYear: string; //반드시 4글자 숫자
  establishedSemester: semesterType; //1학기는 FIRST, 2학기는 SECOND
  name: string; //NotBlank
  teacherEmail: string; //신청 시 자동으로 알림이 갑니다
  mentorApplyRequest: mentorApplyRequest[];
  memo: string;
  hope1Room: string;
  hope2Room: string;
  info: string;
  hashTag: string;
  clubType: clubType;
}

export interface CreateClubType {
  request: requestType;
  email: string;
}

export type clubDocsValue = mentorType[];
