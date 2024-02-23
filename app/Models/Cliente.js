// app/Models/Cliente.js

'use strict'

const Model = use('Model')

class Cliente extends Model {
  // Relacionamento com Pedidos
  pedidos() {
    return this.hasMany('App/Models/Pedido')
  }
}

module.exports = Cliente
