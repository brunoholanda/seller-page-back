// app/Models/Pedido.js

'use strict'

const Model = use('Model')

class Pedido extends Model {
  // Relacionamento com Cliente
  cliente() {
    return this.belongsTo('App/Models/Cliente')
  }
}

module.exports = Pedido
