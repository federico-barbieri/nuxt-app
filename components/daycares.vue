<template>
    <div>
        <h2><nuxt-link to="reborn"><span class="number">01.</span> Rebørn</nuxt-link></h2>
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div{
    width: 100vw;
    height: 15vh;
}

a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 5rem;
    color: inherit;
    text-decoration: none;
}

@media only screen and (max-width: 1100px){
    h2, a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 4rem;
}
}

@media only screen and (max-width: 860px){
    h2, a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 3rem;
}
}

@media only screen and (max-width: 700px){
    h2, a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2rem;
}
}

@media only screen and (max-width: 480px){
    h2, a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.5rem;
}
}

@media only screen and (max-width: 360px){
    .number{
        display: block;
    }
    h2, a{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.25rem;
}
}

</style>