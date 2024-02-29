<template>
  <div>
    <main>
      <aside class="conteudo-principal">
              <h2 class="conteudo-principal-titulo">Toque de</h2>
              <h2 class="conteudo-principal-titulo">Algodão</h2>
              <p class="conteudo-principal-paragrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
</style>


