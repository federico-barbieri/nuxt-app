<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>Multimedia Design's final project at KEA</h1>
                <p>This project aims to answer whether Waitly.dk, a danish startup currently
                    established only in the real estate category, can get into the daycare sector
                    in a way that is sustainable and profitable.
                    The project is based on the thought that Waitly's model for
                    real estate waiting lists can be replicated for daycares.
                </p>
            </div>

            <div class="titleTools">
                <p>Built with:</p>
                <ul>
                    <li>Nuxt 3</li>
                    <li>Supabase</li>
                    <li>Tailwind</li>
                    <li>Mapbox</li>
                </ul>
            </div>
            <div class="titleLinks">
                <span>Github link</span>
                <span>Visit site</span>
            </div>
        </section>



        <section class="description">
            <img class="img" src="../public/images/daycares/reborn_violet.png" alt="Logo of Reborn, a subbrand created for Waitly">
            <p>Imagining how Waitly.dk could get into the daycare category in Copenhagen.</p>

        </section>

        <section class="nuxtModules">
            <p>Nuxt Calendly, Nuxt UI, Nuxt Mapbox, Nuxt Supabase</p>

        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

main{
    background-color: blanchedalmond;
    width: 80%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 70%;
    margin: 2rem auto 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

h1{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2rem;
    margin: 0 auto 1rem auto;
}

p{
    font-family: "Poppins", sans-serif;
}

.titleTools{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
}

.titleTools ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    width: 50%;
}

.titleLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem auto;
}

.titleLinks span{
    padding-right: 1rem;
}

/* DESCRIPTION */

.description{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.description .img{
    max-width: 100%;
    display: block;
    margin: 0 auto;
}


</style>