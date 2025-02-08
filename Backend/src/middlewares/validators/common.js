const { validationResult } = require("express-validator");

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: errors.array()[0].msg,
    });
  }
  next();
};

module.exports = {
  validateResult,
};
