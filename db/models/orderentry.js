const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Color, Bag, Size, Material, Order,
    }) {
      // define association here
      this.belongsTo(Bag, { foreignKey: 'bag_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
      this.belongsTo(Size, { foreignKey: 'size_id' });
      this.belongsTo(Material, { foreignKey: 'material_id' });
      this.belongsTo(Color, { foreignKey: 'bag_color', as: 'bagColor' });
      this.belongsTo(Color, { foreignKey: 'handles_color', as: 'handlesColor' });
      this.belongsTo(Color, { foreignKey: 'bot_color', as: 'botColor' });
    }
  }
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
    sticker: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'OrderEntry',
  });
  return OrderEntry;
};
