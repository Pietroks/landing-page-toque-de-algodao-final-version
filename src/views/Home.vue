<template>
  <div>
    <main>
      <aside class="conteudo-principal">
              <h2 class="conteudo-principal-titulo">Toque de</h2>
              <h2 class="conteudo-principal-titulo">Algodão</h2>
              <div class="div-paragrafo">
                <p class="conteudo-principal-paragrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <SocialMedia :textoParagrafo="textoPersonalizado" :exibirWhats="false"/>
          </aside>
          <article>
              <img class="conteudo-principal-imagem" src="/img/logo.png" alt="Imagem tela principal">
          </article>
    </main>
    <Footer/>
  </div>  
</template>

<script>
import Footer from '@/components/Footer.vue';
import SocialMedia from '@/components/SocialMedia.vue';

export default {
    name: 'Home',
    components: { Footer, SocialMedia },
    data () {
      return {
        textoPersonalizado: 'Acesse minhas redes sociais:'
      }
    }
}
</script>

<style >
  main {
    display: flex;
    flex-direction: row;
    margin-top: 20px; /* Aumentando o espaço superior */
    margin-bottom: auto;
    justify-content: space-between; /* Adicionando espaço entre os elementos */
    padding-top: 50px;
  }

  .conteudo-principal {
    width: 45%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
  }

  .conteudo-principal-titulo {
    font-size: 66px; /* Reduzindo o tamanho do título */
    font-family: var(--fonte--primaria);
    color: var(--cor--titulo); /* Corrigindo a cor do título */
    line-height: 60px;
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; /* Aumentando o espaço entre as linhas */
    max-width: 500px;
    font-family: var(--fonte--primaria);
    color: var(--cor--fonte); /* Corrigindo a cor do texto */
    margin-bottom: 20px; /* Aumentando o espaço inferior do parágrafo */
    margin-top: 30px;
  }

  .conteudo-principal-imagem {
    width: 100%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    max-width: 600px; /* Limitando a largura máxima da imagem */
  }

span {
  color: var(--cor--button);
}

/* responsividade */
@media only screen and (max-width: 820px) {
  .conteudo-principal-titulo {
    font-size: 56px; /* Reduzindo o tamanho do título */
    line-height: 60px;
  }

  .conteudo-principal-imagem {
    width: 90%; 
    max-width: 600px;
  }
}

@media only screen and (max-width: 809px) {
  .conteudo-principal-titulo {
    font-size: 50px; /* Reduzindo o tamanho do título */
    line-height: 50px;
  }

  .conteudo-principal-imagem {
    width: 90%; 
    max-width: 600px;
  }

  .conteudo-principal {
    width: 50%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; /* Aumentando o espaço entre as linhas */
    max-width: 500px;
    margin-bottom: 20px; /* Aumentando o espaço inferior do parágrafo */
    margin-top: 30px;
    font-size: 15px;
  }
}

@media only screen and (max-width: 749px) {
  .conteudo-principal-titulo {
    font-size: 40px; /* Reduzindo o tamanho do título */
    line-height: 50px;
  }

  .conteudo-principal-imagem {
    width: 80%; 
    max-width: 600px;
  }

  .conteudo-principal {
    width: 50%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; /* Aumentando o espaço entre as linhas */
    max-width: 500px;
    margin-bottom: 20px; /* Aumentando o espaço inferior do parágrafo */
    margin-top: 30px;
    font-size: 15px;
  }
}

@media only screen and (max-width: 709px) {
  .conteudo-principal-titulo {
    font-size: 40px; /* Reduzindo o tamanho do título */
    line-height: 50px;
  }

  .conteudo-principal-imagem {
    width: 80%;
    margin-left: 40px; 
  }

  .conteudo-principal {
    width: 60%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; /* Aumentando o espaço entre as linhas */
    margin-bottom: 20px; /* Aumentando o espaço inferior do parágrafo */
    margin-top: 30px;
    font-size: 13px;
  }
}

@media only screen and (max-width: 650px) {
  main {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center; /* Adicionando espaço entre os elementos */
  }

  .conteudo-principal {
    width: 100%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
  }

  .conteudo-principal-titulo {
    font-size: 55px; /* Reduzindo o tamanho do título */
    line-height: 50px;
    text-align: center;
  }

  .div-paragrafo {
    display: flex;
    justify-content: center;
  }


  .conteudo-principal-paragrafo {
    text-align: center;
    font-size: 18px;
  }

  .conteudo-principal-imagem {
    width: 50%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    margin-bottom: 70px;
  }

  article {
    display: flex;
    justify-content: center;
    align-self: center;
  }
}

@media only screen and (max-width: 599px) {
  .conteudo-principal {
    max-width : 100%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
    overflow-y: hidden;
    overflow: hidden;
  }

  .conteudo-principal-titulo {
    font-size: 50px; /* Reduzindo o tamanho do título */
    line-height: 45px;
    text-align: center;
  }

  .conteudo-principal-paragrafo {
    text-align: center;
    font-size: 18px;
  }

  .conteudo-principal-imagem {
    width: 50%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    margin-bottom: 70px;
  }

}

@media only screen and (max-width: 550px) {
  .conteudo-principal {
    max-width : 100%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
    overflow-y: hidden;
    overflow: hidden;
  }

  .conteudo-principal-titulo {
    font-size: 50px; /* Reduzindo o tamanho do título */
    line-height: 45px;
  }

  .conteudo-principal-paragrafo {
    font-size: 18px;
  }

  .conteudo-principal-imagem {
    width: 70%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    margin-bottom: 70px;
  }  
}

@media only screen and (max-width: 480px) {
  .conteudo-principal {
    max-width : 100%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
    overflow-y: hidden;
    overflow: hidden;
  }

  .conteudo-principal-titulo {
    font-size: 50px; /* Reduzindo o tamanho do título */
    line-height: 40px;
  }

  .conteudo-principal-paragrafo {
    text-align: center;
    font-size: 17px;
  }

  .conteudo-principal-imagem {
    width: 70%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    margin-bottom: 70px;
  }  
}

@media only screen and (max-width: 420px) {
  .conteudo-principal {
    max-width : 100%; /* Reduzindo um pouco a largura para criar mais espaço entre os elementos */
    overflow-y: hidden;
    overflow: hidden;
  }

  .conteudo-principal-titulo {
    font-size: 48px; /* Reduzindo o tamanho do título */
    line-height: 40px;
  }

  .conteudo-principal-paragrafo {
    text-align: center;
    font-size: 15px;
  }

  .conteudo-principal-imagem {
    width: 65%; /* Ajustando a largura da imagem para ocupar toda a largura disponível */
    margin-bottom: 70px;
  }  
  article {
    width: 100%;
  }
}
</style>


