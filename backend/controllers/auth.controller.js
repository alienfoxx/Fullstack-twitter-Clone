export const signup = async (req, res) => {
  await res.json({
    data: "You hit the signup endpoint",
  });
};

export const signin = async (req, res) => {
  await res.json({
    data: "You hit the login endpoint",
  });
};

export const signout = async (req, res) => {
  await res.json({
    data: "You hit the logout endpoint",
  });
};
