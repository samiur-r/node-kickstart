import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (plaintextPassword: string) => {
  const hash = await bcrypt.hash(plaintextPassword, saltRounds);

  return hash;
};

export const verifyToken = async (plaintextPassword: string, hash: string) => {
  const isValid = await bcrypt.compare(plaintextPassword, hash);

  return isValid;
};
