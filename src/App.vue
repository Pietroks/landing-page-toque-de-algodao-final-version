<template>
  <div>
    <Header />
    <RouterView/>

  </div>
</template>

<script>
import Header from './components/Header.vue';



export default {
    name: 'App',
    components: { Header }
}
</script>

<!-- 766f8c -->
<style>
:root {
    --cor--background: #fff6f3;
    --cor--fonte: #50568b ;
    --cor--titulo: #b8446c ;
    --cor--hover: #e09dff ;
    --cor--button: #cab9aa  ;
    --cor--secundaria: #c24b57;

    --fonte--primaria: 'Poppins', sans-serif;
    --fonte--secundaria: 'Montserrat', sans-serif;
}



  body {
    background-color: var(--cor--background);
    color: var(--cor--fonte);
    font-family: var(--fonte--primaria);
    font-weight: normal;
    font-style: normal;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 15px;
    max-width: 1200px;
    text-decoration: none;
}
</style>

<!-- .color1 { #b8446c };
.color2 { #f08584 };
.color3 { #803255 };
.color4 { #9c616b };
.color5 { #cea1a6 };

.color1 { #70343b };
.color2 { #fcacac };
.color3 { #561c25 };
.color4 { #955e61 };
.color5 { #cfb3a7 }; -->