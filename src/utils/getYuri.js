const { randomNumber } = require("./randomNumberWithInterval")

const axios = require("axios")

exports.getYuri = async () => {
  const req = await axios.get("https://api.reddit.com/r/wholesomeyuri")

  const randomIndex = randomNumber(2, 26)
  const yuri = req.data.data.children[randomIndex].data
  console.log(yuri)

  return yuri
}
