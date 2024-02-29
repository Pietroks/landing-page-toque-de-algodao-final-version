<template>
    <header class="cabecalho">
    <div class="cabecalho-titulo">
        <router-link to="/"><img src="/img/toque-de-algodao.jpg" alt="toque de algodao logo"></router-link>
    </div>
    <ul class="cabecalho-links">
        <router-link class="cabecalhoa-a" id="cabecalho-links-style" to="/">Inicio</router-link>
        <router-link class="cabecalhoa-a" id="cabecalho-links-style" to="/about">Sobre</router-link>
        <router-link class="cabecalhoa-a" id="cabecalho-links-style" to="/produtos">Produtos</router-link>
    </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>


<style scoped>
.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 0.4px solid var(--cor--titulo);
}

.cabecalho-titulo {
  line-height: 10px;
  cursor: pointer;
  color: var(--cor--titulo);
}

img {
  width: 10%; 
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px #b8446c;
  border-radius: 5px;
  margin-left: 10px;
}

img:hover {
    transition: 1 all;
    box-shadow: 0px 0px 10px #50568b;
}

.cabecalho-links {
  display: flex;
  list-style-type: none; 
  padding: 0;
  margin: 0;
}

.cabecalhoa-a {
  text-decoration: none;
  margin-right: 20px; /* Adiciona espaço entre os links */
  font-size: large;
  font-weight: 200;
  color: var(--cor--titulo);
}

#cabecalho-links-style:hover {
  color: var(--cor--button);
  transition: 0.3s all; 
}

/* reatividade */
@media only screen and (max-width: 1069px) {
  img {
    width: 10%;
  }
}

@media only screen and (max-width: 926px) {
  img {
    width: 13%;
  }
}

@media only screen and (max-width: 910px) {
    img {
    width: 14%;
  }
}

@media only screen and (max-width: 810px) {
    img {
        width: 15%;
    }
}

@media only screen and (max-width: 650px) {
  img {
    width: 25%;
  }
}

@media only screen and (max-width: 520px) {
  img {
    width: 30%;
  }
}

@media only screen and (max-width: 470px) {
  img {
    width: 40%;
  }
}

@media only screen and (max-width: 410px) {
  img {
    width: 50%;
  }
}
</style>