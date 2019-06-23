import DashView from './components/Dash.vue'

// Import Views - Dash
import IndicadoresView from './components/views/Indicadores.vue'
import ReceitasView from './components/views/Receitas.vue'
import DespesasView from './components/views/Despesas.vue'
import CustoFixoView from './components/views/CustoFixo.vue'
import ImpostosView from './components/views/Impostos.vue'
import DreView from './components/views/Dre.vue'
import AjudaView from './components/views/Ajuda.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'indicadores',
        alias: '',
        component: IndicadoresView,
        name: 'Indicadores',
        meta: {description: 'Meus resultados'}
      }, {
        path: 'receitas',
        component: ReceitasView,
        name: 'Quanto eu recebi',
        meta: {description: 'Receitas'}
      }, {
        path: 'despesas',
        component: DespesasView,
        name: 'Custo dos produtos',
        meta: {description: 'Custo total do produto'}
      }, {
        path: 'custofixo',
        component: CustoFixoView,
        name: 'Custos Mensais',
        meta: {description: 'Custo fixo dos produtos'}
      }, {
        path: 'impostos',
        component: ImpostosView,
        name: 'Impostos',
        meta: {description: 'impostos'}
      }, {
        path: 'dre',
        component: DreView,
        name: 'Meu Resultado',
        meta: {description: 'Resultados do mês'}
      }, {
        path: 'ajuda',
        component: AjudaView,
        name: 'Ajuda Sebrae',
        meta: {description: 'Principais dúvidas'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
