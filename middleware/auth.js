const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You are not authorised" });
  }

  const getToken = authorization.split[" "][1];

  try {
    const { _id } = jwt.verify(getToken, process.env.SECRET_KEY);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    return res.status(401).json({ error: "authorisation unsuccessful" });
  }
};

module.exports = auth;
