const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer(['Gracias por comunicarte con nosotros', '¡Hemos registrado su caso con exito!'])