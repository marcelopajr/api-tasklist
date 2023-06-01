import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../app/models/user";
import Task from "../app/models/task";

const models = [User, Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Connect models to the database
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
