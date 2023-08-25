const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "abhinash") {
    req.user = { name: "abhinash", id: 591 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }

  next();
};

module.exports = authorize;
