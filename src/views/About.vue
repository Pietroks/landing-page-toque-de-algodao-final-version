<template>
  <div>
      <main>
        <section class="conteudo-principal-about">
            <h1 class="conteudo-principal-titulo-about">Sobre mim</h1>
            <p class="conteudo-principal-paragrafo-about">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <p class="conteudo-principal-paragrafo-about">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores ipsum delis forum birol parela maxime infena. Excepteur sint occaecat cupidatat non.</p>
        </section>
        <img class="conteudo-principal-imagem-about" src="/img/logo.png" alt="mulher roxa">
    </main>
  </div>
</template>

<script>


export default {
  name: 'About',

}
</script>

<style scoped>
h1 {
  color: var(--cor--titulo);
}

/* responsividade */
@media only screen and (max-width: 375px) {
  img {
    width: 60%;
    align-self: center;
    margin-bottom: 50px;
  }
  main {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
  }
  h1 {
    text-align: center;
  }
  p {
    line-height: 22px;
  }
}

@media only screen and (max-width: 768px) {
  img {
    width: 60%;
    align-self: center;
    margin-bottom: 50px;
  }
  main {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
  }
  h1 {
    text-align: start;
  }
  p {
    line-height: 22px;
  }
}

@media only screen and (max-width: 820px) {
  img {
    width: 55%;
    align-self: center;
    margin-bottom: 50px;
  }
  main {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
  }
  h1 {
    text-align: start;
  }
  p {
    line-height: 22px;
    font-size: 18px;
  }
}

@media only screen and (max-width: 1024px) {
  img {
    width: 80%;
    align-self: center;
    margin-top: 80px;
  }
  main {
    display: flex;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
    flex-direction: column;
  }
  h1 {
    text-align: start;
  }
  p {
    line-height: 22px;
    font-size: 18px;
  }
}
</style>


