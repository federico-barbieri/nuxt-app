<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>A modern waiting list platform for daycares</h1>
                <p>This project explores the idea of whether 
                    <span class="waitly"><a href="https://waitly.dk/" target="_blank">Waitly.dk</a></span>, 
                    a danish startup whose business model spins around waiting lists for real estate, 
                    can replicate it in the daycare sector in a sustainable and profitable way.
                </p>
            </div>

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p class="builtWith">Built with:</p>
                    <ul>
                        <li>
                            <UTooltip text="Nuxt 3" :popper="{ placement: 'top' }">
                                <img class="toolLogo nuxtLogo" src="../public/icons/nuxtjs.png" alt="Nuxt 3 icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Supabase" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/supabase.png" alt="Supabase icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Tailwind" :popper="{ placement: 'top' }">
                                <img class="toolLogo tailwindLogo" src="../public/icons/tailwind.png" alt="Tailwind icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span>
                        <a href="https://github.com/federico-barbieri/daycaresInNuxt" target="_blank">
                            <UTooltip text="Github" :popper="{ placement: 'top' }">
                                <img class="githubLogo" src="../public/icons/github.png" alt="Github icon" />
                            </UTooltip>
                        </a>
                    </span>
                    <span><a class="visitSite" href="https://reborn-daycares-federico-barbieri.vercel.app" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>
        </section>



        <section class="description">
            <img class="img" src="../public/images/daycares/reborn_violet.webp" alt="Logo of Reborn, a subbrand created for Waitly" />

            <p class="rebornDescription">Rebørn is an initiative by Waitly.dk. 
                Its name comes from <strong><em>reimagining</em></strong> how parents can access daycare
                waiting lists, combined with <strong><em>børn</em></strong>, the word for "children" in Danish. 
                Its purpose is to make the daycare category more accessible and transparent,
                just like Waitly does for real estate associations.
            </p>

            <div class="descriptionGrid">
                <img loading="lazy" class="firstScreen" src="../public/images/daycares/rebornFirstScreen.webp" alt="First screen the user sees before logging in." />
                <p class="triangulationDescription">During the research phase, 
                    I interviewed parents that live in Copenhagen to understand their needs and pain points.
                    I also conducted interviews with daycare leaders to understand how their waiting list systems worked
                    and how they could be improved.
                </p>
                <div class="personaAndFlow">
                    <img loading="lazy" class="persona" src="../public/images/daycares/persona.webp" alt="Persona created after interviewing parents." />
                    <img loading="lazy" class="flow" src="../public/images/daycares/flow.webp" alt="Tech flow between Nuxt 3, Supabase, Github and Vercel." />
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

                <img loading="lazy" class="dashboard" src="../public/images/daycares/dashboard.webp" alt="Reborn's dashboard" />

            </div>

            <div class="nuxtModulesImgs">

                <p class="daycaresDescription">
                    In the <strong>daycares' tab</strong>, 
                    the user can filter through 
                    the daycares by area, see them on a map,
                    and calculate the distance to their home.
                </p>
                <img loading="lazy" class="filters" src="../public/images/daycares/filters.webp" alt="Filters' tab in the dashboard" />
                <img loading="lazy" class="map" src="../public/images/daycares/map.webp" alt="Map' tab in the dashboard" />
                <img loading="lazy" class="distance" src="../public/images/daycares/distance.webp" alt="Distance' tab in the dashboard" />

            </div>

            <div class="visitingDiv">

                <p class="visitingIntro">
                    When the user picks a daycare, a pop up will
                    display the daycare's details and the possibility 
                    of adding children to their waiting list.
                </p>

                <img loading="lazy" class="daycarePanel" src="../public/images/daycares/visits.webp" alt="Daycares' tab in the dashboard" />

                <p class="visitingDescription">
                    Additionaly, the parents can plan a visit through the platform and receive a confirmation
                    straight into their emails.
                </p>

                <img loading="lazy" class="calendlyPanel" src="../public/images/daycares/visits2.webp" alt="Calendly's nuxt module dashboard" />
                
            </div>

            <div class="subscriptionsDiv">
                <p class="subscriptionsDescription">
                    In the last tab, the user can see a list of all the daycares
                    they are subscribed to, and the amount of money it represents anually.
                </p>

                <img loading="lazy" src="../public/images/daycares/subscriptions.webp" alt="Subscriptions' tab in the dashboard" />
                
                

                <span class="nextProject"><nuxt-link to="swampfest">Next project &#8594;</nuxt-link></span>

            </div>
        </section>
    </main>
</template>

<script setup>

useHead({
  title: 'Rebørn | Federico Barbieri',
  meta: [
    { name: 'description', content: "Rebørn, a project created by Federico Barbieri" }
  ],
  lang: 'en',
})

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
    margin: 5rem auto 5rem 0;
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
    margin: 5rem 0 5rem auto;
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
    margin-top: 20rem;
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
    margin-top: 10rem;
    border-radius: 50%;
}

.nearWhite{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F4F6;
    width: 15rem;
    height: 15rem;
    margin-top: 20rem;
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
    margin-top: 0rem;
    border-radius: 50%;
}

@media (prefers-color-scheme: dark) {
    .blue{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #3b82f6;
    border-radius: 50%;
}

    .white{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
        color: black;
        border-radius: 50%;
        border: 1px solid #35354A;
    }

    .green{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
        background-color: #7CCC7F;
        border-radius: 50%;
    }

    .nearWhite{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F3F4F6;
        color: black;
        border-radius: 50%;
    }

    .violet{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #35354A;
        color: #FFFFFF;
        border-radius: 50%;
    }
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

.daycarePanel{
    max-width: 70%;
    margin: 2rem 0 2rem auto;
}

.calendlyPanel{
    max-width: 70%;
    margin: 2rem 0 2rem auto; 
}

.subscriptionsDiv{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto 5rem auto;
}

.subscriptionsDescription{
    max-width: 50%;
    margin: 5rem auto 5rem 0;
}

.nextProject{
    display: block;
    margin: 5rem 0 0 auto;
    padding-bottom: 0.2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in;
}

.nextProject:hover{
    border-bottom: 2px solid #35354A;
}


/* MEDIA QUERY 1000px */


@media only screen and (max-width: 1000px){

    .rebornDescription{
    width: 70%;
    text-align: left;
    margin: 5rem auto 5rem 0;
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
    width: 70%;
    text-align: left;
    margin: 5rem 0 5rem auto;
}

.personaAndFlow{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.persona{
    max-width: 100%;
    margin: 0 auto 2rem 0;
}

.flow{
    max-width: 100%;
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
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
}

.white{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 10rem;
    height: 10rem;
    margin-top: 20rem;
    border-radius: 50%;
    border: 1px solid #35354A;
}

.green{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #7CCC7F;
    width: 10rem;
    height: 10rem;
    margin-top: 10rem;
    border-radius: 50%;
}

.nearWhite{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F4F6;
    width: 10rem;
    height: 10rem;
    margin-top: 20rem;
    border-radius: 50%;
}

.violet{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #35354A;
    width: 10rem;
    height: 10rem;
    color: #FFFFFF;
    margin-top: 0rem;
    border-radius: 50%;
}

/* DASHBOARD */

.dashboardSection{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.dashboardDescription{
    max-width: 70%;
    margin: 2rem auto 5rem 0;
}

.daycaresDescription{
    max-width: 70%;
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
    max-width: 100%;
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
    max-width: 70%;
    margin: 5rem auto 5rem 0;
}

.visitingDescription{
    max-width: 70%;
    margin: 5rem 0 5rem auto;
}

.daycarePanel{
    max-width: 100%;
    margin: 2rem 0 2rem auto;
}

.calendlyPanel{
    max-width: 100%;
    margin: 2rem 0 2rem auto; 
}

.subscriptionsDiv{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto 5rem auto;
}

.subscriptionsDescription{
    max-width: 70%;
    margin: 5rem auto 5rem 0;
}

.nextProject{
    display: block;
    margin: 5rem 0 0 auto;
    padding-bottom: 0.2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in;
}

.nextProject:hover{
    border-bottom: 2px solid #35354A;
}

}

/* MEDIA QUERY 767px */

@media only screen and (max-width: 767px){

main{
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 90%;
    margin: 2rem auto 1rem auto;
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



.rebornDescription{
width: 100%;
text-align: left;
margin: 5rem auto 5rem 0;
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
width: 100%;
text-align: left;
margin: 5rem 0 5rem auto;
}

.personaAndFlow{
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
}

.persona{
max-width: 100%;
margin: 0 auto 2rem 0;
}

.flow{
max-width: 100%;
margin: 0 0 2rem auto;
}

/* COLOR PALETTE */

.colorPalette{
width: 90%;
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
width: 6rem;
height: 6rem;
border-radius: 50%;
}

.white{
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
width: 6rem;
height: 6rem;
margin-top: 8rem;
border-radius: 50%;
border: 1px solid #35354A;
}

.green{
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
background-color: #7CCC7F;
width: 6rem;
height: 6rem;
margin-top: 4rem;
border-radius: 50%;
}

.nearWhite{
display: flex;
align-items: center;
justify-content: center;
background-color: #F3F4F6;
width: 6rem;
height: 6rem;
margin-top: 8rem;
border-radius: 50%;
}

.violet{
display: flex;
align-items: center;
justify-content: center;
background-color: #35354A;
width: 6rem;
height: 6rem;
color: #FFFFFF;
margin-top: 0rem;
border-radius: 50%;
}

/* DASHBOARD */

.dashboardSection{
width: 90%;
display: flex;
flex-direction: column;
margin: 0 auto;
}

.dashboardDescription{
max-width: 100%;
margin: 2rem auto 5rem 0;
}

.daycaresDescription{
max-width: 100%;
margin: 5rem auto 5rem auto;
}

/* NUXT MODULES IMGS */

.nuxtModulesImgs{
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto;
}

.nuxtModulesImgs img{
max-width: 100%;
margin: 2rem auto 2rem 0;
}

/* PLANNING A VISIT */

.visitingDiv{
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto;
}

.visitingIntro{
max-width: 100%;
margin: 5rem auto 5rem auto;
}

.visitingDescription{
max-width: 100%;
margin: 5rem auto 5rem auto;
}

.daycarePanel{
max-width: 100%;
margin: 2rem 0 2rem auto;
}

.calendlyPanel{
max-width: 100%;
margin: 2rem 0 2rem auto; 
}

.subscriptionsDiv{
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto 5rem auto;
}

.subscriptionsDescription{
max-width: 100%;
margin: 5rem auto 5rem 0;
}

.nextProject{
display: block;
margin: 5rem 0 0 auto;
padding-bottom: 0.2rem;
text-decoration: none;
color: inherit;
transition: all 0.3s ease-in;
}

.nextProject:hover{
border-bottom: 2px solid #35354A;
}

}


/* MEDIA QUERY 550px */

@media only screen and (max-width: 550px){

main{
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 100%;
    margin: 2rem auto 1rem auto;
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
    margin: 0 auto 1rem auto;
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
    flex-direction: column;
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
    justify-content: center;
    list-style: none;
    width: 100%;
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

.builtWith{
    text-align: center;
}

.titleLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

.description{
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.rebornDescription{
width: 100%;
text-align: left;
margin: 5rem auto;
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
width: 100%;
text-align: left;
margin: 5rem auto 5rem auto;
}

.personaAndFlow{
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
}

.persona{
max-width: 100%;
margin: 0 auto 2rem 0;
}

.flow{
max-width: 100%;
margin: 0 auto 2rem auto;
}

/* COLOR PALETTE */

.colorPalette{
width: 90%;
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
width: 6rem;
height: 6rem;
border-radius: 50%;
}

.white{
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
width: 6rem;
height: 6rem;
margin-top: 8rem;
border-radius: 50%;
border: 1px solid #35354A;
}

.green{
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
background-color: #7CCC7F;
width: 6rem;
height: 6rem;
margin-top: 4rem;
border-radius: 50%;
}

.nearWhite{
display: flex;
align-items: center;
justify-content: center;
background-color: #F3F4F6;
width: 6rem;
height: 6rem;
margin-top: 8rem;
border-radius: 50%;
}

.violet{
display: flex;
align-items: center;
justify-content: center;
background-color: #35354A;
width: 6rem;
height: 6rem;
color: #FFFFFF;
margin-top: 0rem;
border-radius: 50%;
}

/* DASHBOARD */

.dashboardSection{
width: 90%;
display: flex;
flex-direction: column;
margin: 0 auto;
}

.dashboardDescription{
max-width: 100%;
margin: 2rem auto 5rem auto;
}

.daycaresDescription{
max-width: 100%;
margin: 5rem auto 5rem auto;
}

/* NUXT MODULES IMGS */

.nuxtModulesImgs{
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto;
}

.nuxtModulesImgs img{
max-width: 100%;
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
max-width: 100%;
margin: 5rem auto 5rem auto;
}

.visitingDescription{
max-width: 100%;
margin: 5rem auto 5rem auto;
}

.daycarePanel{
max-width: 100%;
margin: 2rem 0 2rem auto;
}

.calendlyPanel{
max-width: 100%;
margin: 2rem 0 2rem auto; 
}

.subscriptionsDiv{
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 0 auto 5rem auto;
}

.subscriptionsDescription{
max-width: 100%;
margin: 5rem auto 5rem 0;
}

.nextProject{
display: block;
margin: 5rem 0 0 auto;
padding-bottom: 0.2rem;
text-decoration: none;
color: inherit;
transition: all 0.3s ease-in;
}

.nextProject:hover{
border-bottom: 2px solid #35354A;
}

}


@media only screen and (max-width: 450px){
    /* COLOR PALETTE */

.colorPalette{
width: 90%;
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-around;
margin: 3rem auto 6rem auto;
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
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 0.5rem;
}

.white{
display: flex;
align-items: center;
justify-content: center;
background-color: #FFFFFF;
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 0.5rem;
margin-top: 8rem;
border-radius: 50%;
border: 1px solid #35354A;
}

.green{
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
background-color: #7CCC7F;
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 0.5rem;
margin-top: 4rem;
border-radius: 50%;
}

.nearWhite{
display: flex;
align-items: center;
justify-content: center;
background-color: #F3F4F6;
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 0.5rem;
margin-top: 8rem;
border-radius: 50%;
}

.violet{
display: flex;
align-items: center;
justify-content: center;
background-color: #35354A;
width: 4rem;
height: 4rem;
border-radius: 50%;
font-size: 0.5rem;
color: #FFFFFF;
margin-top: 0rem;
border-radius: 50%;
}
}



</style>