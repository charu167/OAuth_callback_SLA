module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://localhost:3000/auth/spotify/callback?code=${code}`);
};
