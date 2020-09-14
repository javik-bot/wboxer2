const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
let result
  try {
    result = math.eval(message.content)
  } catch (error) {
    console.log('Failed math calculation ' + message.content + '\nError: ' + e.stack)
    return 'Error while evaluating the math expression.'
  } finally {
    if (isNaN(parseFloat(result))) {
      return 'Invalid Calculation Expression'
    } else {
      return '**Result:** ' + result
    }
  }
}
module.exports.help = {
    name: "calc"
};