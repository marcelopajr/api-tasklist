import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from "../app/models/user";

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Connect models to the database
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
