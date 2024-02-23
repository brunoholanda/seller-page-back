// app/Controllers/Http/PedidoController.js

'use strict'

const Pedido = use('App/Models/Pedido')
const Database = use('Database')

class PedidoController {
  async store({ request, response }) {
    const data = request.only(['cliente_id', 'nome_produto', 'valor'])

    const numeroPedido = await this.gerarNumeroPedido()

    const pedido = await Pedido.create({ ...data, numero_pedido: numeroPedido })

    return response.created(pedido)
  }

  async gerarNumeroPedido() {
    const hoje = new Date().toISOString().slice(0, 10); // Formato "yyyy-mm-dd"

    // Buscar o último pedido de hoje
    const ultimoPedidoHoje = await Pedido
      .query()
      .whereRaw('DATE(created_at) = ?', [hoje])
      .orderBy('id', 'desc')
      .first();

    let sequencial = 1; // Começa a contagem
    if (ultimoPedidoHoje) {
      // Extrai o sequencial do último número de pedido e incrementa
      const ultimoSequencial = parseInt(ultimoPedidoHoje.numero_pedido.slice(-4)); // Considera os últimos 4 dígitos como sequencial
      sequencial = ultimoSequencial + 1;
    }

    // Formatar o número do pedido: "yyyyMMddXXXX" (onde XXXX é o sequencial)
    const dataFormatada = hoje.replace(/-/g, ''); // Remove os hífens
    const numeroPedido = `${dataFormatada}${String(sequencial).padStart(4, '0')}`; // Preenche com zeros à esquerda para garantir 4 dígitos

    return numeroPedido.toString(); // Certifique-se de que o número do pedido seja retornado como uma string
  }

}

module.exports = PedidoController
