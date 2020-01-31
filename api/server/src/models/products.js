'use strict';

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    //products.hasMany(models.Order);
  };
    return products;
};