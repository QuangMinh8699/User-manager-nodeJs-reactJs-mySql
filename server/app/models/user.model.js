module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.BIGINT,
    },
    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
