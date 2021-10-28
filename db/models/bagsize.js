const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BagSize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({}) {
      // define association here
    }
  }
  BagSize.init({
    bag_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BagSize',
  });
  return BagSize;
};
