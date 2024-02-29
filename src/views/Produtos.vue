<template>
  <div>
    <h1>Conheça nossos produtos</h1>
    <ul class="produtos-lista">
      <li v-for="produto in produtos" :key="produto._id" class="produto-item">
        <router-link class="router" :to="'/detalhes-produto/' + produto._id">
          <div class="produto-imagem">
            <img :src="getImagemUrl(produto.imagem.filename)" :alt="'Imagem do Produto ' + produto.nome">
          </div>
          <div class="produto-info">
            <h2>{{ produto.nome }}</h2>
            <p>Tamanhos disponiveis: {{ produto.tamanho }}</p>
            <p class="preco">R$: {{ produto.preco.toFixed(2) }}</p>
          </div>
        </router-link>
        <router-link v-if="exibirBotaoEditar" :to="'/editform/' + produto._id" class="btn btn-submit">Editar</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  nome: 'Produtos',
  data() {
    return {
      produtos: [],
      required: true
    };
  },
  props: {
    exibirBotaoEditar: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      try {
        const req = await fetch("https://backendapiloja-production.up.railway.app/produtos");
        if (!req.ok) {
          throw new Error(`Erro na requisição: ${req.status} ${req.statusText}`);
        }
        const data = await req.json();
        this.produtos = data;
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    },
    getImagemUrl(filename) {
      return `https://backendapiloja-production.up.railway.app/uploads/${filename}`;
    }
  }
};
</script>

<style scoped>
.produtos-lista {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px;
  gap: 40px;
}

.produto-item {
  position: relative;
  width: 22%;
  margin-bottom: 30px;
  border: 0.1px solid var(--cor--button);
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  border-width: 0.01px;
  background-color: var(--cor--button);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.produto-imagem {
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  transition: transform 0.3s ease-in-out;
}

.produto-imagem img {
  width: 100%;
  height: 240px;
  display: block;
}

.produto-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.produto-info h2,
.produto-info p,
.preco,
.btn,
.router-link {
  margin-bottom: 5px;
  text-align: center;
  color: var(--cor--fonte);
}

.produto-info h2 {
  margin-bottom: 10px;
  font-size: 1.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 18px;
}

.preco {
  font-weight: bold;
  font-size: 1.2em;
}

.btn {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border: 0.5px solid #ddd;
  border-radius: 5px;
  padding-top: 10px;
  margin-bottom: auto;
  text-decoration: none;
}

.btn:hover {
  color: black;
  text-decoration: none; /* Remoção do sublinhado no hover */
}

.produto-item:hover .produto-imagem,
.produto-item:hover h2 {
  transform: scale(1.10);
}

.router {
  text-decoration: none;
}

h1 {
  color: var(--cor--titulo);
}

/* responsividade */
@media only screen and (max-width: 1069px) {
  .produto-item {
  position: relative;
  width: 21.5%;
  }
}

@media only screen and (max-width: 926px) {
  .produto-item {
  position: relative;
  width: 28.5%;
  margin-bottom: 30px;
  margin-left: 10px;
  }
}

@media only screen and (max-width: 910px) {
  .produto-item {
  position: relative;
  width: 28%;
  margin-bottom: 30px;
  border: 0.1px solid var(--cor--button);
  border-radius: 8px;
  box-sizing: border-box;
  }
}

@media only screen and (max-width: 810px) {
  .produtos-lista {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 40px;
}

  .produto-item {
  position: relative;
  width: 40%;
  margin-bottom: 30px;
  border: 0.1px solid var(--cor--button);
  border-radius: 8px;
  }
}

@media only screen and (max-width: 650px) {
  .produto-item {
  position: relative;
  width: 65%;
  margin-bottom: 30px;
  border: 0.1px solid var(--cor--button);
  border-radius: 8px;
  box-sizing: border-box;
  }

  div {
    text-align: center;
  }
}

@media only screen and (max-width: 520px) {
  .produto-item {
  position: relative;
  width: 90%;
  margin-bottom: 30px;
  border: 0.1px solid var(--cor--button);
  border-radius: 8px;
  box-sizing: border-box;
  }
}
</style>



