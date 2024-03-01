<template>
  <div class="container">
    <h1>Adicionar Novo Produto</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="produto.nome" required>
      </div>
      <div>
        <label for="tamanho">Tamanhos:</label>
        <input id="tamanho" v-model="produto.tamanho">
      </div>
      <div>
        <label for="preco">Preço:</label>
        <input type="number" id="preco" v-model="produto.preco" required>
      </div>
      <div>
        <label for="imagem">Imagem:</label>
        <input type="file" id="imagem" @change="handleImagem">
        <div class="imagem-preview">
          <img v-if="previewImagem" :src="previewImagem" style="max-width: 400px;" alt="Preview da Imagem" >
        </div>  
      </div>
      <div class="button-div">
        <button type="submit">Adicionar Produto</button>
        <button type="button" @click="cancelarAdicao">Cancelar</button>
      </div>  
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useToast } from "vue-toastification";

export default {
name: 'AddForm',  
data() {
  return {
    produto: {
      nome: '',
      tamanho: '',
      preco: '',
      imagem: null
    },
    previewImagem: null
  };
},
setup() {
  const router = useRouter();
    const toast = useToast();
    return { router, toast }
  },
methods: {
  handleImagem(event) {
      const file = event.target.files[0];
      this.produto.imagem = file;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImagem = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.previewImagem = null;
      }
    },
  async submitForm() {
    try {
      let formData = new FormData();
      formData.append('nome', this.produto.nome);
      formData.append('tamanho', this.produto.tamanho);
      formData.append('preco', this.produto.preco);
      formData.append('imagem', this.produto.imagem);

      const response = await fetch('https://backendapiloja-production.up.railway.app/produtos', {
        method: 'POST',
        body: formData
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Erro ao adicionar produto');
      }
      //limpar os campos
      this.produto = {
        nome: '',
        tamanho: '',
        preco: '',
        imagem: null
      },
      this.previewImagem = null
     //alertas de sucesso/erro 
     this.toast.success('Produto adicionado com sucesso!');
    } catch (error) {
      this.toast.error('Erro ao adicionar produto. Por favor, tente novamente.');
    }
  },
  cancelarAdicao() {
    this.router.push('/dashboard');
  }
}
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
font-size: 28px;
margin-bottom: 20px;
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
  justify-content: space-between;
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

button:disabled {
background-color: #ccc;
cursor: not-allowed;
}

.imagem-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

#imagem {
  width: 100%;
  margin-top: 5px;
}

/* responsividade */
@media only screen and (max-width: 375px) {
  input, select {
    width: 90%;
  }

  #imagem {
    width: 90%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 414px) {
  input, select {
    width: 90%;
  }

  #imagem {
    width: 90%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 430px) {
  input, select {
    width: 90%;
  }

  #imagem {
    width: 90%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 768px) {
  input, select {
    width: 95%;
  }

  #imagem {
    width: 95%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 820px) {
  input, select {
    width: 95%;
  }

  #imagem {
    width: 95%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 1024px) {
  input, select {
    width: 95%;
  }

  #imagem {
    width: 95%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}

@media only screen and (max-width: 1280px) {
  input, select {
    width: 95%;
  }

  #imagem {
    width: 95%;
  } 

  form {
    width: 100%;
  }
  
  h1 {
    font-size: 28px;
  }

  img {
    width: 100%;
  }

  
}
</style>
