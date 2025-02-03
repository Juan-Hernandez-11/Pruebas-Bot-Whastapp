const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

module.exports = addKeyword(EVENTS.ACTION)
.addAnswer('Este es el reporte de daños')
.addAnswer('Por favor seleccione una opcion')
.addAnswer([ '   1. *Fuga de Agua*', '   2. *Baja Presion*' , '   3.*Interrupcion del servicio*', '  0. *Volver al inicio*'], {capture: true},
    async (ctx, {gotoFlow, state, fallBack})=>{

        if(!['1', '2', '3', '4'].includes(ctx.body)){
            return fallBack()
        }

        switch (ctx.body){
            
            case '1': {
                await state.update({ issue: 'Fuga de agua' });
                return gotoFlow(require('./fDatos'));
            }
            case '2':{
                await state.update({ issue: 'Baja presion' });
                return gotoFlow(require('./fDatos'));
            }
            case '3':{
                await state.update({ issue: 'Interrupcion del servicio' });
                return gotoFlow(require('./fDatos'));
            }

            case '4': {
                return gotoFlow(require('./Fotro'));
            }

        }
    }
)