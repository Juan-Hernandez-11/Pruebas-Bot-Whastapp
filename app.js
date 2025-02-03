const { createBot, createProvider, createFlow, addKeyword, gotoFlow, EVENTS } = require('@bot-whatsapp/bot')

import daño from './flows/f_daño.js'
import dañoAc from './flows/f_dAc.js'
import estado from './flows/f_estado.js'
import otro from './flows/Fotro.js'
import datos from './flows/fDatos.js'
import ticket from './flows/f_ticket.js'

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const menu = addKeyword('menu')
    .addAnswer('Por favor escoja una opcion')
    .addAnswer(
        ['1. *Reportar un daño*', '2. *Reportar daño en alcantarillado*', '3. *Obtener informacion sobre el estado de mi informe anterior*'],
        { capture: true },
        async (ctx, { gotoFlow, fallBack }) => {
            if (!['1', '2', '3'].includes(ctx.body)) {
                return fallBack();
            }

            switch (ctx.body) {
                case '1': {
                    return gotoFlow(require('./flows/f_daño.js'));
                }
                case '2': {
                    return gotoFlow(require('./flows/f_dAc.js'));
                }
                case '3': {
                    return gotoFlow(require('./flows/f_estado.js'));
                }
            }
        }
    )

const flowPrincipal = addKeyword(EVENTS.WELCOME)
.addAnswer('¡Hola! Soy Mirlo, el asistente virtual de EMDUPAR S.A. ESP ¿En qué te puedo ayudar hoy?')
.addAnswer('Para ver las opciones escribe menu',  {capture: true}, null, [menu]
)
  

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, daño, dañoAc, estado, otro, datos, ticket])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
