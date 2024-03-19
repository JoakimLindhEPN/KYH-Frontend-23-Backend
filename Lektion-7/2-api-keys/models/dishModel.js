const Dish = require('../schemas/dishSchema')

exports.createDish = async (req, res) => {
  try {
    const { name } = req.body

    if(!name) {
      res.status(400)
      throw new Error('You need to enter a name')
    }

    const dish = await Dish.create({ name })
    res.status(201).json(dish)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getAll = async (req, res) => {
  try {
    
    const dishes = await Dish.find()
    res.status(200).json(dishes)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}

exports.getRandom = async (req, res) => {
  try {
    
    const take = req.query.take || 5

    const dishes = await Dish.find()

    const randomDishes = dishes.sort(() =>  0.5 - Math.random())

    const responseData = randomDishes.slice(0, take)

    res.status(200).json(responseData)

  } catch (err) {
    res.json({
      message: err.message
    })
  }
}