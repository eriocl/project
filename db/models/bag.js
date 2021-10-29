const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Size, Material, Order,
    }) {
      // define association here
      this.belongsToMany(Size, { through: 'BagSizes', foreignKey: 'bag_id' });
      this.belongsToMany(Material, { through: 'BagSizes', foreignKey: 'bag_id' });
      this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'bag_id' });
    }
  }
  Bag.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Bag',
  });
  return Bag;
};
