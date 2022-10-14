/**
 * @type {Cypress.PluginConfig}
 */

 const { generate } = require('gerador-validador-cpf')

 module.exports = (on, config) => {
   on('task', {
    deliverymanFactory() {
       const firstName = 'Everton'
       const lastName = 'Souza'
 
       return {
         name: `${firstName} ${lastName}`,
         cpf: generate(),
         email: `${firstName.toLowerCase()}${lastName.toLowerCase()}@example.com`,
         whatsapp: '19999999999',
         address: {
           postalcode: '13012000',
           street: 'Avenida Francisco Glicério',
           number: '1907',
           details: 'Teste de software',
           district: 'Centro',
           city_state: 'Campinas/SP'
         }
       }
     }
   })
 
   return config
 }