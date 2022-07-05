interface originSignupType {
  email: string; //이메일 형식이여야함.
  emailAuthCode: string; //sendEmailCode 이메일 참조.
  firstName: string; //Notnull
  lastName: string; //Notnull
  password: string; //영어, 특수문자, 숫자 포함 최소 8자 이상
}

export interface studentSignupType extends originSignupType {
  studentKey: string; //ex.2407
  major: string; //SW, EMB, SECU
}

export interface studentsignupInfoType extends originSignupType {
  studentKey: string; //ex.2407
  checkPassword: string;
}
