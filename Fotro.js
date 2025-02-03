const { addKeyword, EVENTS, addAnswer } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
addAnswer('Por favor ingresa cual es tu problema',{capture: true},
    async(ctx, {state, gotoFlow})=>{
        state.update({descripcion: ctx.body})
        return gotoFlow(require('./fDatos'))
    }
)
