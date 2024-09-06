module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://18.191.18.152:3000/auth/google/callback?code=${code}`);
};
