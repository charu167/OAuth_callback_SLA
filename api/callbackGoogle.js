module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://3.143.41.221:3000/auth/google/callback?code=${code}`);
};
