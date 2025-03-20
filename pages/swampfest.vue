<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>SMK's vision into the future</h1>
                <p>With more than 200.000 artworks, SMK aims to <a href="https://www.smk.dk/en/article/smk-open/"><em>digitalize their entire collection</em></a>. This project imagines a potential way of doing it. Made in collaboration with Henry Navntoft.
                </p>
            </div>

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p>Built with:</p>
                    <ul>
                        <li>
                            <UTooltip text="React js" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/react-2.svg" alt="React icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Typescript" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/typescript-svgrepo-com.svg" alt="Typescript icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="PostgreSQL" :popper="{ placement: 'top' }">
                                <img class="postgres" src="../public/icons/postgresql-ar21.svg" alt="Postgres icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Docker" :popper="{ placement: 'top' }">
                                <img class="docker" src="../public/icons/docker-logo-blue.svg" alt="Docker icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Nginx" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/nginx-svgrepo-com.svg" alt="Nginx icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span>
                        <a href="https://github.com/federico-barbieri/SwampFest" target="_blank">
                            <UTooltip text="GitLab" :popper="{ placement: 'top' }">
                                <img class="gitlabLogo" src="../public/icons/gitlab-logo-100.svg" alt="GitLab icon" />
                            </UTooltip>
                        </a>
                    </span>
                    <span><a class="visitSite" href="https://examprojecttest.net/" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>
        </section>



        <section class="description">
            <img class="img" src="../public/images/swampfest/titans.jpg" alt="Hero image of SMK" />

            <p class="rebornDescription">A music festival website should answer three questions:
                Who's playing, when are they playing, and how do I get tickets. <br><br>
                Swampfest does exactly that, and adds a Shrek vibe to it.
            </p>

            <div class="descriptionGrid">
                <img class="firstScreen" src="../public/images/swampfest/swampfestArtistGrid.webp" alt="First screen the user sees before logging in." />
                <p class="triangulationDescription">A live schedule can be found for every day and for every stage. Additionally, users can 
                    read about their favourite bands in the bands' section.
                </p>
                <div class="personaAndFlow">
                    <img class="persona" src="../public/images/swampfest/swampfestSchedule.webp" alt="Persona created after interviewing parents." />
                    <img class="flow" src="../public/images/swampfest/swampfestBand.webp" alt="Tech flow between Nuxt 3, Supabase, Github and Vercel." />
                </div>

            </div>

        </section>

        <section class="nuxtModules">
            
            <div class="dashboardSection">
                <h2>The Tickets</h2>

                <p class="dashboardDescription">
                    In the tickets section, the user can go throughout the whole purchasing process.
                </p>

                <img class="dashboard" src="../public/images/swampfest/swampfestTickets.webp" alt="Screenshot of Swampfests ticket process" />

            </div>

            <div class="nuxtModulesImgs">

                <p class="daycaresDescription">
                    One can also purchase add-ons that are reflected in the price in real time.
                </p>
                <img class="swampOne" src="../public/images/swampfest/swampfestTicketsStepOne.webp" alt="Filters' tab in the dashboard" />
                <img class="swampTwo" src="../public/images/swampfest/swampfestTicketsStepTwo.webp" alt="Map' tab in the dashboard" />
                <img class="swampThree" src="../public/images/swampfest/swampfestTicketsStepThree.webp" alt="Distance' tab in the dashboard" />

            </div>

            <div class="visitingDiv">

                <img class="daycarePanel" src="../public/images/swampfest/swampfestTicketsStepFour.webp" alt="Daycares' tab in the dashboard" />

                <img class="calendlyPanel" src="../public/images/swampfest/swampfestTicketsStepFive.webp" alt="Calendly's nuxt module dashboard" />
                
            </div>

            <div class="subscriptionsDiv">
                <p class="subscriptionsDescription">
                    The purchase is safely stored in Supabase and contains the entire user's information.
                </p>                
                
                <img class="calendlyPanel" src="../public/images/swampfest/swampfestTicketsStepSix.webp" alt="Calendly's nuxt module dashboard" />


                <span class="nextProject"><nuxt-link to="experimentarium">Next project &#8594;</nuxt-link></span>

            </div>
        </section>
    </main>
</template>

<script setup>

useHead({
  title: 'Swampfest | Federico Barbieri',
  meta: [
    { name: 'description', content: "Swampfest, a project created by Federico Barbieri" }
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
    width: 100%;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

.toolLogo{
    width: 4rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.docker{
    width: 5rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.postgres{
    width: 5rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.toolLogo:hover{
    filter: drop-shadow(2px 2px 2px #35354A);
}

.docker:hover{
    filter: drop-shadow(2px 2px 2px #35354A);
}

.postgres:hover{
    filter: drop-shadow(2px 2px 2px #35354A);
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

.gitlabLogo{
    width: 6rem;
    padding-top: 0.5rem;
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
    max-width: 100%;
    margin: 0 auto 2rem 0;
}

.flow{
    max-width: 100%;
    margin: 0 0 2rem auto;
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

.nuxtModules{
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
}

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
    max-width: 50%;
    margin: 5rem auto 5rem 0;
}

.visitingDescription{
    max-width: 50%;
    margin: 5rem 0 5rem auto;
}

.daycarePanel{
    max-width: 100%;
    margin: 2rem auto;
}

.calendlyPanel{
    max-width: 100%;
    margin: 2rem auto; 
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


/* MEDIA QUERY 1000PX */

@media only screen and (max-width: 1000px){
    main{
    width: 90%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 90%;
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
    width: 100%;
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

/* DASHBOARD */

.dashboardSection{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.dashboardSection h2{
    margin: 0 auto 0 0;
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


.nuxtModules{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    padding: 0;
}

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

.dashboard{
    max-width: 100%;
    height: auto;
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

/* MEDIA QUERY 700PX */

@media only screen and (max-width: 700px){
    main{
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 100%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    flex-wrap: wrap;
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

.titleLinks{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem auto 0 auto;
    height: 100%;
    flex-wrap: wrap;

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
    width: 100%;
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

/* DASHBOARD */

.dashboardSection{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.dashboardSection h2{
    margin: 0 auto 0 0;
}

.dashboardDescription{
    max-width: 100%;
    margin: 2rem auto 5rem 0;
}

.daycaresDescription{
    max-width: 100%;
    margin: 5rem auto 5rem 0;
}

/* NUXT MODULES IMGS */


.nuxtModules{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    padding: 0;
}

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

.dashboard{
    max-width: 100%;
    height: auto;
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
    max-width: 100%;
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

</style>
