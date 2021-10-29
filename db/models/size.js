const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bag, Material, Order }) {
      // define association here
      this.belongsToMany(Bag, { through: 'BagSizes', foreignKey: 'size_id' });
      this.belongsToMany(Material, { through: 'BagSizes', foreignKey: 'size_id' });
      this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'size_id' });
    }
  }
  Size.init({
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};
