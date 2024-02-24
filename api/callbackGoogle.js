module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://3.218.63.70:3000/auth/google/callback?code=${code}`);
};
