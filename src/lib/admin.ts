export const validateAdminCredentials = (email: string, password: string) => {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
  return email === adminEmail && password === adminPassword;
};
