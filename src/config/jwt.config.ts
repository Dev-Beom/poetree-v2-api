export const JwtConfig = {
  secret: process.env.JWT_SECRET_KEY,
  signOptions: { expiresIn: "1d" }
};