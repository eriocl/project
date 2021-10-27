'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderEntry.init({
    order_id: DataTypes.INTEGER,
    bag_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER,
    bag_color: DataTypes.INTEGER,
    handles_color: DataTypes.INTEGER,
    bot_color: DataTypes.INTEGER,
    pcs: DataTypes.INTEGER,
    ind_pack: DataTypes.BOOLEAN,
    label: DataTypes.BOOLEAN,
    sticker: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'OrderEntry',
  });
  return OrderEntry;
};