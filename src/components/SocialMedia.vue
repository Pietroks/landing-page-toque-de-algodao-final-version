<template>
    <div class="conteudo-principal-links">
        <p class="conteudo-principal-links-texto">{{ textoParagrafo }}</p>
        <div class="button-div">
            <a class="conteudo-principal-links-style instagram-link" @click="abrirInstagram()" v-if="exibirLink">
                <img src="/img/instagram.png" alt="instagram icon">Instagram
            </a> 
            <a class="conteudo-principal-links-style facebook-link" @click="abrirFacebook()" v-if="exibirLink">
                <img src="/img/facebook.png" alt="facebook icon">Facebook
            </a>
            <a class="conteudo-principal-links-style whatsapp-link" @click="abrirConversaWhatsApp" v-if="exibirWhats">
                <img src="/img/whatsapp.png" alt="WhatsApp Icon">WhatsApp
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SocialMedia",
    props: {
        textoParagrafo: String,
        exibirLink: {
            type: Boolean,
            default: true
        },
        exibirWhats: {
            type: Boolean,
            default: true
        },
        nomeProduto: ''
    },
    mounted() {
        console.log('Nome do Produto em SocialMedia:', this.nomeProduto); 
    },
    methods: {
        abrirConversaWhatsApp() {
            const numeroTelefone = '';
            const nomeProduto = decodeURIComponent(this.nomeProduto)
            const mensagem = encodeURIComponent(`Olá! Estou interessada(o) neste produto: ${nomeProduto}.`);
    // Detectar se o usuário está em um dispositivo móvel ou desktop
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        let linkWhatsApp = '';

    if (isMobile) {
        // Para dispositivos móveis, use o link direto para o WhatsApp
        linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
    } else {
        // Para desktop, use o link da API do WhatsApp
        linkWhatsApp = ` https://wa.me/${numeroTelefone}/?text=${mensagem}`;
    }
    window.open(linkWhatsApp, '_blank');
    },
    abrirInstagram() {
        const linkInstagram = "https://www.instagram.com/toquedealgodao.dmw/";
        window.open(linkInstagram, '_blank');
    },
    abrirFacebook() {
        const linkFacebook = "https://www.facebook.com/atelier.toquedealgodao";
        window.open(linkFacebook, '_blank');
        }
    }
}
</script>

<style scoped>
.conteudo-principal-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    padding-top: 25px;
    cursor: pointer;
}

.button-div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

  .conteudo-principal-links-texto {
    font-weight: 400;
    font-size: 18px; 
    margin-bottom: 15px;
    margin-top: 0 auto;
    color: var(--cor--fonte); 
  }

  .conteudo-principal-links-style {
    text-decoration: none;
    display: flex;
    justify-content: center;
    color: var(--cor--fonte);
    font-size: 16px; 
    font-weight: 500;
    padding: 15px 15px 10px 10px;;
    border-radius: 15px;
    width: 60%;
    text-align: center;
    background-color: var(--cor--button);
  }

  .conteudo-principal-links-style:hover {
    background-color: var(--cor--titulo);
    color: var(--cor--fonte);
  }

  .facebook-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.facebook-link img {
    width: 20px; 
    margin-right: 5px; 

}

.instagram-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.instagram-link img {
    width: 20px; 
    margin-right: 5px; 
}

.whatsapp-link {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.whatsapp-link img {
    width: 20px; 
    margin-right: 5px; 
}
</style>