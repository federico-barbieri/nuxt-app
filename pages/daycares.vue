<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>Multimedia Design's final project at KEA</h1>
                <p>This project aims to answer whether <span class="waitly"><a href="https://waitly.dk/" target="_blank">Waitly.dk</a></span>, a danish startup currently
                    established only in the real estate category, can get into the daycare sector
                    in a way that is sustainable and profitable.
                    The project is based on the thought that Waitly's model of
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
                    <span><a href="https://github.com/federico-barbieri/daycaresInNuxt" target="_blank"><img class="githubLogo" src="../public/icons/github.png" alt=""></a></span>
                    <span><a class="visitSite" href="https://reborn-daycares-federico-barbieri.vercel.app" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>
        </section>



        <section class="description">
            <img class="img" src="../public/images/daycares/reborn_violet.png" alt="Logo of Reborn, a subbrand created for Waitly">
            <p class="rebornDescription">Rebørn is an initiative by Waitly.dk. 
                Its name comes from <strong><em>reimagining</em></strong> how parents can access 
                waiting lists combined with <strong><em>børn</em></strong>, the word for "children" in Danish. 
                Its purpose is to make the daycare category more accessible and transparent,
                just like Waitly does for real estate associations.
            </p>

            <div class="descriptionGrid">
                <img class="firstScreen" src="../public/images/daycares/rebornFirstScreen.png" alt="aaaa">
                <p class="triangulationDescription">During the research phase, I triangulated the user's needs and pain points,
                    the daycare's potential usecase and which technologies to use.
                </p>
                <div class="personaAndFlow">
                    <img class="flow" src="../public/images/daycares/flow.png" alt="">
                    <img class="persona" src="../public/images/daycares/persona.png" alt="">
                </div>

            </div>

        </section>

        <section class="nuxtModules">
            <div class="colorPalette">
                <span class="blue">#3b82f6</span>
                <span class="white">#FFFFFF</span>
                <span class="green">#7CCC7F</span>
                <span class="nearWhite">#F3F4F6</span>
                <span class="violet">#35354A</span>

            </div>
            <div class="dashboardSection">
                <h2>The Dashboard</h2>

                <p class="dashboardDescription">
                    Once the user is authenticated through Supabase's One Time Password, it can access 
                    a panel with three main tabs: <strong>children profiles, daycares and subscriptions</strong>.

                </p>

                <img class="dashboard" src="../public/images/daycares/dashboard.png" alt="">

            </div>

            <div class="nuxtModulesImgs">

                <p class="daycaresDescription">
                    In the <strong>daycares' tab</strong>, 
                    the user can filter through 
                    the daycares by area, see them on a map,
                    and calculate the distance to their home.
                </p>
                <img class="filters" src="../public/images/daycares/filters.png" alt="">
                <img class="map" src="../public/images/daycares/map.png" alt="">
                <img class="distance" src="../public/images/daycares/distance.png" alt="">

            </div>

            <div class="visitingDiv">

                <p class="visitingIntro">
                    When the user picks a daycare, a pop up will
                    display the daycare's details and the possibility 
                    of adding children to their waiting list.
                </p>
                <p class="visitingDescription">
                    Additionaly, the parents can plan a visit through the platform and receive a confirmation
                    straight into their emails.
                </p>
            </div>
            

            <ul>
                <li>Authentication &#8594; Nuxt Supabase</li>
                <li>UI &#8594; Nuxt UI</li>
                <li>Plan visits to daycares &#8594; Nuxt Calendly</li>
                <li>Display map &#8594; Nuxt Mapbox</li>
            </ul>

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

.visitSite:hover{
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

h2{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.5rem;
    margin: 0 auto 1rem 0;
}

p{
    font-family: "Poppins", sans-serif;
}

span{
    font-family: "Poppins", sans-serif;
}

.waitly:hover{
    text-decoration: underline 1px solid #35354A;
}

.toolsAndLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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

.githubLogo{
    width: 6rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.githubLogo:hover{
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 2px #35354A);
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

.rebornDescription{
    width: 50%;
    text-align: left;
    margin: 2rem auto 5rem 0;
}

/* DESCRIPTION GRID */

.descriptionGrid{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.firstScreen{
    max-width: 100%;
}

.triangulationDescription{
    width: 50%;
    text-align: left;
    margin: 2rem 0 5rem auto;
}

.personaAndFlow{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.persona{
    max-width: 80%;
    margin: 0 auto 2rem 0;
}

.flow{
    max-width: 80%;
    margin: 0 0 2rem auto;
}

/* COLOR PALETTE */

.colorPalette{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-around;
    margin: 5rem auto;
    font-family: "Poppins", sans-serif;
}

.colorPalette span{
    transition: all 0.5s ease-in;
}

.colorPalette span:hover{
    border-radius: 10px;
    filter: drop-shadow(2px 2px 2px #35354A);
}

.blue{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #3b82f6;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
}

.white{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 15rem;
    height: 15rem;
    margin-top: 15rem;
    border-radius: 50%;
    border: 1px solid #35354A;
}

.green{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #7CCC7F;
    width: 15rem;
    height: 15rem;
    margin-top: 30rem;
    border-radius: 50%;
}

.nearWhite{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F4F6;
    width: 15rem;
    height: 15rem;
    margin-top: 45rem;
    border-radius: 50%;
}

.violet{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #35354A;
    width: 15rem;
    height: 15rem;
    color: #FFFFFF;
    margin-top: 60rem;
    border-radius: 50%;
}

/* DASHBOARD */

.dashboardSection{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.dashboardDescription{
    max-width: 50%;
    margin: 2rem auto 5rem 0;
}

.daycaresDescription{
    max-width: 50%;
    margin: 5rem 0 5rem auto;
}

/* NUXT MODULES IMGS */

.nuxtModulesImgs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

.nuxtModulesImgs img{
    max-width: 70%;
    margin: 2rem auto 2rem 0;
}

/* PLANNING A VISIT */

.visitingDiv{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

.visitingIntro{
    max-width: 50%;
    margin: 5rem auto 5rem 0;
}

.visitingDescription{
    max-width: 50%;
    margin: 5rem 0 5rem auto;
}



</style>