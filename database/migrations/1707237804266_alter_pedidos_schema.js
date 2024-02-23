'use strict'

const Schema = use('Schema')

class AlterPedidosTableSchema extends Schema {
  up () {
    this.table('pedidos', (table) => {
      // Altera o tipo de dado do campo numero_pedido para string
      table.string('numero_pedido').notNullable().alter();

      // Se desejar remover a restrição unique, use o seguinte:
      // table.string('numero_pedido').notNullable();
    })
  }

  down () {
    this.table('pedidos', (table) => {
      // Reverte a alteração se necessário
      table.integer('numero_pedido').unsigned().notNullable().alter();
    })
  }
}

module.exports = AlterPedidosTableSchema
