module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://172.31.36.12:3000/auth/spotify/callback?code=${code}`);
};
