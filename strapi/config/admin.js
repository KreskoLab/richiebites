module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7732394a0a1243dac860da99422820c8'),
  },
});
