// database/migrations/TIMESTAMP_create_pedidos_table.js

'use strict'

const Schema = use('Schema')

class PedidosTableSchema extends Schema {
  up () {
    this.create('pedidos', (table) => {
      table.increments()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').onDelete('CASCADE')
      table.string('nome_produto', 255).notNullable()
      table.decimal('valor', 10, 2).notNullable()
      table.integer('numero_pedido').unsigned().notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('pedidos')
  }
}

module.exports = PedidosTableSchema
