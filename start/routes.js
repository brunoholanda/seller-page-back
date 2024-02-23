'use strict'

const Route = use('Route')
const Helpers = use('Helpers');



Route.post('/clientes', 'ClienteController.store')
Route.post('/pedidos', 'PedidoController.store')
Route.post('create_preference', 'PaymentController.createPreference')


