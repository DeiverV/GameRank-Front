export const APP_ROUTES = {
  ADMIN: {
    USERS: {
      path: "/admin/users",
      name: "Admin Users",
    },
  },
  USERS: {
    PROFILE: {
      path: `/profile/:username`,
      name: "User Profile",
    },
    SCORES: {
      LEADERBOARD: {
        path: "/scores/leaderboard",
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
