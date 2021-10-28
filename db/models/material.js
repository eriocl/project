const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Size, Bag, Order }) {
      // define association here
      this.belongsToMany(Size, { through: 'BagSizes', foreignKey: 'material_id' });
      this.belongsToMany(Bag, { through: 'BagSizes', foreignKey: 'material_id' });
      this.belongsToMany(Order, { through: 'OrderEntries', foreignKey: 'material_id' });
    }
  }
  Material.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
