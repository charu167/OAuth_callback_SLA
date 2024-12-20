module.exports = (req, res) => {
  const code = req.query.code;
  res.redirect(`http://3.143.41.221:3000/auth/spotify/callback?code=${code}`);
};
