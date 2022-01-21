var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '19986549738',
            address: {
                postalcode: '13040089',
                street: 'Rua Manoel Sylvestre de Freitas Filho',
                number: '1277',
                details: 'apto 207 bloco 1',
                district: 'Jardim Nova Europa',
                city_state: 'Campinas/SP'

            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}