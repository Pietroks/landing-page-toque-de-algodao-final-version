<template>
    <header class="cabecalho">
    <div class="cabecalho-titulo">
        <h1>Toque de</h1>
        <h1>Algodão</h1>
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 0.4px solid var(--cor--titulo);
}

.cabecalho-titulo {
    line-height: 10px;
    flex-direction: column;
    cursor: none;
    color: var(--cor--titulo);
}

#cabecalho-links-style {
    display: inline-block;
    text-decoration: none;
    padding-top: 10px;
    margin: 10px;
    font-size: large;
    font-weight: 200;
    color: var(--cor--titulo);
}

#cabecalho-links-style:hover {
    color: var(--cor--button);
    transition: 0.3s all;
}
</style>