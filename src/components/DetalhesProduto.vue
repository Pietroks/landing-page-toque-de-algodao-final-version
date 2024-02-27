<template>
  <div class="container">
    <h1>Detalhes do Produto</h1>
    <div v-if="produto" :key="produto.id" class="detalhes-produto">
      <div class="produto-imagem">
        <img :src="getImagemUrl(produto.imagem.filename)" :alt="produto.nome">
      </div>
      <div class="produto-info">
        <h2>{{ produto.nome }}</h2>
        <p>Tamanho: {{ produto.tamanho }}</p>
        <p class="preco">Preço: R$ {{ produto.preco.toFixed(2) }}</p>
        <social-media class="social-media-style" :textoParagrafo="textoPersonalizado" :exibirLink="false" :nomeProduto="produto.nome"/>
      </div>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script>
import SocialMedia from './SocialMedia.vue';
export default {
  components: { SocialMedia },
  name: 'DetalhesProduto',
  data() {
    return {
      produto: null,
      textoPersonalizado: 'Clique no link abaixo para comprar ou tirar qualquer dúvida:',
      nomeProduto: ''
    };
  },
  mounted() {

    this.getDetalhesProduto();
    
  },
  methods: {
    async getDetalhesProduto() {
      try {
        const id = this.$route.params.id; // Obtém o ID do produto da rota
        const req = await fetch(`https://backendapiloja-production.up.railway.app/produtos/${id}`);
        if (!req.ok) {
          throw new Error(`Erro na requisição: ${req.status} ${req.statusText}`);
        }
        const data = await req.json();
        // Atualiza o objeto produto
        this.produto = {
          nome: data.nome,
          tamanho: data.tamanho,
          preco: data.preco,
          imagem: data.imagem // Supondo que a imagem já tenha o caminho completo
        };
        this.nomeProduto = data.nome
      } catch (error) {
        console.error('Erro ao obter detalhes do produto:', error);
      }
    },
    getImagemUrl(filename) {
      return `https://backendapiloja-production.up.railway.app/uploads/${filename}`;
    }
  }
};
</script>


<style scoped>
.container {
  width: 100%;
}

.detalhes-produto {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: normal;
  margin-top: 60px;
  padding: 20px;
  background-color: var(--cor--background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.produto-imagem {
  width: 50%; 
}

.produto-imagem img {
  width: 100%; 
  height: 555px; 
  border-radius: 8px;
}

.produto-info {
  width: 50%;
  padding-left: 20px; 
  text-align: center;
}

.produto-info h2 {
  font-size: 42px;
  color: var(--cor--titulo);
}

.produto-info p {
  font-size: 32px;
  color: var(--cor--fonte);
  margin-bottom: 10px;
}

.preco {
  font-weight: bold;
  color: #007bff;
  font-size: 18px;
}

h1 {
  color: var(--cor--titulo);
}

</style>
