module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://localhost:3000/auth/google/callback?code=${code}`);
};
