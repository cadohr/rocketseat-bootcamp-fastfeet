export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  // secure: process.env.MAIL_SSL,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe FastFeet <noreply@fastfeet.com>',
  },
};
