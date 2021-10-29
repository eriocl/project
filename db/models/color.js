const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      // define association here
      this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'bag_color' });
      // this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'handles_color', as: 'test2' });
      // this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'bot_color', as: 'test3' });
    }
  }
  Color.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};
