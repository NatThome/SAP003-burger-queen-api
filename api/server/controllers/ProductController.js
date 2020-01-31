import models from '../src/models'

const getAll = async (req, res) => {
  console.log('aeu')
  const products = await models.products.findAll({raw: true})
  res.send(products)
};

const addProduct = async (req, res) => {
  const products = await models.products.create({raw: true})
  res.send(products)
};

export default{
  getAll,
  addProduct
}

