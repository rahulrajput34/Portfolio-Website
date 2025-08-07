const config = {
  env: {
    nodemailer: {
      email: process.env.NODEMAILER_EMAIL!,
      password: process.env.NODEMAILER_PASSWORD!,
    },
  },
};

export default config;
