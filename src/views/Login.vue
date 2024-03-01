<template>
  <main class="conteudo-principal-adm">
    <h2 class="conteudo-principal-titulo-adm">Insira os dados de administrador</h2>
    <form class="formulario" @submit.prevent="loginAdmin">
      <p v-if="erroLogin" class="erro-login">{{ erroLogin }}</p>
      <input v-model="usuario" type="text" placeholder="Usuario">
      <input v-model="senha" type="password" placeholder="Senha">
      <input type="submit" value="Entrar >">
    </form>
  </main>
</template>

<script>
import { useRouter } from 'vue-router'; // Importe o useRouter do Vue Router
import { useToast } from "vue-toastification";

export default {
  name: 'Login',
  data() {
    return {
      usuario: '',
      senha: '', 
      erroLogin: '' 
    }
  },
  setup() {
    const router = useRouter(); // Obtenha a instância do roteador
    const toast = useToast();
    return { router, toast } // Certifique-se de retornar o router do setup
  },
  methods: {
    async loginAdmin() {
      try {
        const response = await fetch('https://backendapiloja-production.up.railway.app/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: this.usuario,
            senha: this.senha
          })
        });

        const data = await response.json();

        if (response.ok) {
          // Login bem-sucedido
          localStorage.setItem('token', data.token);
          this.router.push('/dashboard'); // Use this.router para acessar o roteador
        } else {
          // Mensagem de erro de login
          this.toast.error("Credenciais inválidas")
        }
      } catch (error) {
        console.error('Erro durante o login:', error);
      }
    }
  }
}
</script>


<style scoped>
.conteudo-principal-adm {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  padding-top: 55px;
  align-items: center;
}

.conteudo-principal-titulo-adm {
  font-size: 30px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
}

.formulario {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.formulario [type="submit"] {
  height: 50px;
  width: 50%;
  background-color: rgb(132, 14, 201);
  color: white;
  font-weight: bold;
  align-self: center;
}

.formulario [type="submit"]:hover {
  cursor: pointer;
  background-color: rgb(188, 99, 247);
  color: white;
}

input {
  margin-top: 20px;
  height: 20px;
  padding: 15px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
}


/* reatividade */
@media only screen and (max-width: 375px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 100%;
}
}

@media only screen and (max-width: 414px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 100%;
}
}

@media only screen and (max-width: 430px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 100%;
}
}

@media only screen and (max-width: 768px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 50%;
}
}

@media only screen and (max-width: 820px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 50%;
}
}

@media only screen and (max-width: 1024px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 50%;
}
}

@media only screen and (max-width: 280px) {
.conteudo-principal-titulo-adm {
  font-size: 15px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 100%;
}
}

@media only screen and (max-width: 853px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 50%;
}
}

@media only screen and (max-width: 412px) {
.conteudo-principal-titulo-adm {
  font-size: 20px;
  line-height: 10px;
  font-family: 'Poppinsmedium', sans-serif;
  }

.formulario {
  display: flex;
  width: 100%;
}
}
</style>