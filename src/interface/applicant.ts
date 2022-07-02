export interface applicantType {
  id: number;
  name: string;
  interviewDay: {
    year: number | null;
    month: number | null;
    date: number | null;
    hours: number | null;
    minute: number | null;
  };
  interviewCompleted: boolean | null;
}
