<template>
  <div class="container">
    <h1>Editando Produto</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="formData.nome" required>
      </div>
      <div>
        <label for="tamanho">Tamanho:</label>
        <select id="tamanho" v-model="formData.tamanho">
          <option value="pequeno">P</option>
          <option value="medio">M</option>
          <option value="grande">G</option>
          <option value="extra-grande">GG</option>
          <option value="extra-extra-grande">XL</option>
        </select>
      </div>
      <div>
        <label for="preco">Preço:</label>
        <input type="number" id="preco" v-model="formData.preco" required>
      </div>
      <div v-if="formData.imagem">
        <label>Imagem:</label>
        <div class="imagem-preview">
          <img :src="getImagemUrl(formData.imagem.filename)" style="max-width: 400px;" />
        </div>  
      </div>
      <div>
        <label for="nova-imagem">Nova Imagem:</label>
        <input type="file" id="nova-imagem" @change="handleNovaImagem">
        <div v-if="previewNovaImagem" class="imagem-preview">
          <img :src="previewNovaImagem" style="max-width: 400px;" />
        </div>
      </div>
      <div class="button-div">
        <button type="submit">Salvar Alterações</button>
        <button type="button" @click="excluirProduto">Excluir Produto</button>
      </div>
    </form>
    <div v-if="exibirModal" class="modal">
      <div class="modal-overlay"></div>
      <div>
        <p>Tem certeza de que deseja excluir este produto?</p>
        <div class="button-div">
          <button @click="confirmarExclusao">Confirmar</button>
          <button @click="fecharModal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      formData: {
        nome: '',
        tamanho: '', 
        preco: '',
        imagem: '',
        novaImagem: null
      },
      exibirModal: false,
      previewNovaImagem: null // Adicionando variável para a pré-visualização da nova imagem
    };
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
  created() {
    this.getProduto();
  },
  methods: {
    async getProduto() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(`https://backendapiloja-production.up.railway.app/produtos/${id}`);
        const data = await response.json();
        this.formData = { ...data };
      } catch (error) {
        console.error('Erro ao obter detalhes do produto:', error);
      }
    },
    async submitForm() {
      try {
        const id = this.$route.params.id;
        const formData = new FormData(); 

        formData.append('nome', this.formData.nome);
        formData.append('tamanho', this.formData.tamanho); 
        formData.append('preco', this.formData.preco);
        
        if (this.formData.novaImagem) {
          formData.append('imagem', this.formData.novaImagem);
        } 

        const response = await fetch(`https://backendapiloja-production.up.railway.app/produtos/${id}`, {
          method: 'PUT', 
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        if (this.formData.novaImagem) {
          this.formData.imagem = null;
        }

        const responseData = await response.json();
        console.log(responseData);

        if (responseData.imagem) {
          console.log(responseData.imagem);
          this.formData.imagem = responseData.imagem;
        }

        this.toast.success('Produto atualizado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        this.toast.error('Erro ao atualizar produto. Por favor, tente novamente mais tarde.');
      }
    },
    async excluirProduto() {
      this.exibirModal = true;
    },
    async confirmarExclusao() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(`https://backendapiloja-production.up.railway.app/produtos/${id}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
        }

        this.toast.success('Produto excluído com sucesso!');
        this.$router.push('/Dashboard');
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
        this.toast.error('Erro ao excluir produto. Por favor, tente novamente mais tarde.');
      } finally {
        this.exibirModal = false;
      }
    },
    fecharModal() {
      this.exibirModal = false;
    },
    handleNovaImagem(event) {
      this.formData.novaImagem = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewNovaImagem = e.target.result; // Atualizando a pré-visualização da nova imagem
      };
      reader.readAsDataURL(this.formData.novaImagem);
    },
    getImagemUrl(filename) {
      return `https://backendapiloja-production.up.railway.app/uploads/${filename}`;
    }
  }
};
</script>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--cor--background);
  border-radius: 8px solid;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

h1 {
font-size: 28px;
margin-bottom: 20px;
}

p {
  margin-bottom: 50px;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}

form {
width: 50%;
}

label {
font-weight: bold;
margin-bottom: 8px;
color: var(--cor--titulo);
} 

input, select {
padding: 8px;
margin-bottom: 16px;
border-radius: 4px;
border: 1px solid #ccc;
width: 100%;
margin-top: 5px;
}

.button-div {
  display: flex;
  justify-content: space-evenly;
}

button {
padding: 10px 20px;
background-color: #007bff;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: var(--cor--hover);
}

.imagem-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: #dc3545;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
}
</style>