export interface userInfoType {
  email: string;
  password: string;
}

export interface LoginDataType extends userInfoType {
  deviceToken: string;
}
