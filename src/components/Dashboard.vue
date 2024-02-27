<template>
  <div class="container">
    <router-link to="/addform" class="btn btn-submit">Adicionar novo Produto</router-link>
  </div>  
    <div>
      <Produtos :exibir-botao-editar="true" :produtos="produtos" @redirecionarParaEditform="redirecionarParaEditform">
      </Produtos>
    </div>
</template>

<script>
import Produtos from '@/views/Produtos.vue';
import router from '@/router/index';

export default {
  name: 'Dashboard',
  components: {
    Produtos
  },
  data() {
    return {
      produtos: [] 
    }
  },
  mounted() {
    this.obterProdutos();
  },
  methods: {
    async obterProdutos() {
      try {
        const response = await fetch('https://backendapiloja-production.up.railway.app/produtos');
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        this.produtos = data; // Preencher a lista de produtos com os dados obtidos
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    },
    redirecionarParaEditform(produto) {
      router.push({ name: 'editform', params: { id: produto._id } });
    },
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
}

.btn {
  text-decoration: none;
}

.btn-submit {
  color: var(--cor--fonte);
  padding: 10px 10px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;
  background-color: var(--cor--button);
}

.btn-submit:hover {
  background-color: var(--cor--hover);
  color: var(--cor--fonte);
}
</style>