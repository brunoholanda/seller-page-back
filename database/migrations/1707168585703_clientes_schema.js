// database/migrations/TIMESTAMP_create_clientes_table.js

'use strict'

const Schema = use('Schema')

class ClientesTableSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nome', 255).notNullable()
      table.string('telefone', 60).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('cep', 20).notNullable()
      table.string('endereco', 255).notNullable()
      table.string('numero', 10).notNullable()
      table.string('complemento', 255)
      table.string('bairro', 100).notNullable()
      table.string('cidade', 100).notNullable()
      table.string('estado', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesTableSchema
