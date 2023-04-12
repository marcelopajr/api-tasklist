module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "changeThisPassword",
  database: "tasklist",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
