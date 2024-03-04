<template>
  <div>
    <main>
      <aside class="conteudo-principal">
              <h2 class="conteudo-principal-titulo">Venha conhecer<br><br>nossos<br><br>Produtos</h2>

              <div class="div-paragrafo">
                <p class="conteudo-principal-paragrafo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <SocialMedia :textoParagrafo="textoPersonalizado" :exibirWhats="false"/>
          </aside>
          <article>
              <img class="conteudo-principal-imagem" src="/img/toque-de-algodao.jpg" alt="Imagem tela principal">
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
    font-size: 66px;
    font-family: var(--fonte--primaria);
    color: var(--cor--titulo);
    line-height: 50px;
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; 
    max-width: 500px;
    font-family: var(--fonte--primaria);
    color: var(--cor--fonte); 
    margin-bottom: 20px; 
    margin-top: 30px;
  }

  .conteudo-principal-imagem {
    width: 100%; 
    max-width: 550px; 
    box-shadow: 0px 0px 10px #b8446c;
  }





  /* responsividade */
  @media only screen and (min-width: 280px) and (max-width: 540px) {
  main {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: auto;
    justify-content: space-between; 
  }

  .conteudo-principal {
    width: 100%; 
  }

  .conteudo-principal-titulo {
    font-size: 43px;
    font-family: var(--fonte--primaria);
    color: var(--cor--titulo);
    line-height: 40px;
    padding-top: 50px;
    text-align: center;
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; 
    max-width: 500px;
    font-family: var(--fonte--primaria);
    color: var(--cor--fonte); 
    margin-top: 30px;
  }

  .conteudo-principal-imagem {
    width: 80%; 
    display: block;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  main {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: auto;
    justify-content: center; 
  }

  .conteudo-principal {
    width: 100%; 
  }

  .conteudo-principal-titulo {
    font-size: 48px;
    line-height: 35px;
    text-align: center;
    padding-top: 50px;
  }

  .conteudo-principal-paragrafo {
    line-height: 1.5; 
    max-width: 100%;
    font-size: 28px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .conteudo-principal-imagem {
    width: 80%; 
    display: block;
    margin: 0 auto;
  }
}

</style>    


