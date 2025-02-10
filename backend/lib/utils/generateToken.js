import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 100, // ms
    httpOnly: true, // prevent the XSS attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "developement",
  });
};
