module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://18.191.18.152:3000/auth/spotify/callback?code=${code}`);
};
