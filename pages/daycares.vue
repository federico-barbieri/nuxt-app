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

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p>Built with:</p>
                    <ul>
                        <li><img class="toolLogo nuxtLogo" src="../public/icons/nuxtjs.png" alt=""></li>
                        <li><img class="toolLogo supabaseLogo" src="../public/icons/supabase.png" alt=""></li>
                        <li><img class="toolLogo nuxtLogo tailwindLogo" src="../public/icons/tailwind.png" alt=""></li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span><a href=""><img class="githubLogo" src="../public/icons/github.png" alt=""></a></span>
                    <span><a href="https://reborn-daycares-federico-barbieri.vercel.app" target="_blank">Visit site &#8594;</a></span>
                </div>
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

a{
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in;
    padding-bottom: 0;
}

a:hover{
    padding-bottom: 0.2rem;
    border-bottom: 2px solid #35354A;
}

main{
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

.toolsAndLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: last baseline;
    justify-content: space-between;
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
    justify-content: flex-start;
    list-style: none;
    width: 50%;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

.toolLogo{
    width: 6rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.toolLogo:hover{
    filter: drop-shadow(2px 2px 2px #35354A);
}

.supabaseLogo{
    width: 2.5rem;
}

.titleLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 2rem auto;
    height: 100%;
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

.githubLogo{
    width: 6rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.githubLogo:hover{
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 2px #35354A);
}


</style>