const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer('Este es el reporte de daños')
.addAnswer('Por favor seleccione una opcion')
.addAnswer(['1. *Obstruccion*, 2. *Fuga de aguas residuales*, 3. *Malos Olores*, 4. *Otro*'], {capture: true},
    async (ctx, {gotoFlow, state, fallBack})=>{

        if(!['1', '2', '3', '4'].includes(ctx.body)){
            return fallBack()
        }

        switch (ctx.body){
            
            case 1: {
                await state.update({issues: 'Obstruccion'})
                return gotoFlow(require('./fDatos'))
            }
            case 2:{
                await state.update('Fuga de aguas residuales')
                return gotoFlow(require('./fDatos'))
            }
            case 3:{
                await state.update('Malos olores')
                return gotoFlow(require('./fDatos'))
            }

            case 4: {
                return gotoFlow(require('./Fotro'))
            }

        }
    }
)
