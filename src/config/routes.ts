export const APP_ROUTES = {
  ADMIN: {
    USERS: {
      path: "/admin/users",
      name: "Admin Users",
    },
  },
  USERS: {
    PROFILE: {
      path: `/user/profile/:userId`,
      name: "User Profile",
    },
    SCORES: {
      LEADERBOARD: {
        path: "/user/scores/leaderboard",
        name: "Leaderboard",
      },
    },
  },
  AUTH: {
    LOGIN: {
      path: "/login",
      name: "login",
    },
    REGISTER: {
      path: "/register",
      name: "Register",
    },
  },
};
