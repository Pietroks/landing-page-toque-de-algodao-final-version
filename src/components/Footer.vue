<template>
    <footer id="footer">
        <p>Toque de Algodão &copy; 2024</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    #footer {
    height: 20px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--cor--fonte);
    padding-top: 80px;
    margin-top: auto; /* Para garantir que o footer fique no final da página */
    margin-bottom: auto; /* Ajuste a margem inferior conforme necessário */
    }
</style>