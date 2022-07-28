export const isEmail = (email: string): boolean => {
  const tempEmail = email.trim();
  const isEmail: boolean = /.+@((gmail|naver)\.com|dsm\.hs\.kr)/.test(
    tempEmail,
  );
  return isEmail;
};
