'use strict'

const Cliente = use('App/Models/Cliente')

class ClienteController {
  async store({ request, response }) {
    const data = request.only(['nome', 'telefone', 'email', 'cep', 'endereco', 'numero', 'complemento', 'bairro', 'cidade', 'estado'])
    const cliente = await Cliente.create(data)
    return response.created(cliente)
  }
}

module.exports = ClienteController
