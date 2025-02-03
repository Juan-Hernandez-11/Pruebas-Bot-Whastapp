const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAction(async(_, { flowDynamic })=>{
    await flowDynamic('Escribe la direccion donde se encuentra el daño')
})
.addAction({capture: true}, async(ctx, {flowDynamic, state})=>{
    await state.update({direccion: ctx.body})
    await flowDynamic('Escribe tu nombre completo')
})
.addAction({capture: true}, async(ctx, {flowDynamic, state})=>{
    await state.update({nombre: ctx.body})
    await flowDynamic('Escribe tu numero de contacto')
})
.addAction({capture: true}, async(ctx, {flowDynamic, state})=>{
    await state.update({numero: ctx.body})
    await flowDynamic('Escribe tu correo electronico')
})
.addAction({capture: true}, async(ctx, {flowDynamic, state, gotoFlow})=>{
    await state.update({correo: ctx.body})
    await flowDynamic('Gracias por tu informacion')
    return gotoFlow(require('./f_ticket'))

})