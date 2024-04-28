<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>Multimedia Design's 3rd semester final project at KEA</h1>
                <p>A Shrek-inspired music festival where one can see the lineup, get tickets
                    and see a small bio of every band. Made in collaboration with Sabrina Sørensen.
                </p>
            </div>

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p>Built with:</p>
                    <ul>
                        <li>
                            <UTooltip text="Next js" :popper="{ placement: 'top' }">
                                <img class="toolLogo nuxtLogo" src="../public/icons/nextjs2.png" alt="Next icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Figma" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/figma.svg" alt="Figma icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Git" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/git.png" alt="Git icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Supabase" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/supabase.png" alt="Supabase icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span>
                        <a href="https://github.com/federico-barbieri/SwampFest" target="_blank">
                            <UTooltip text="Github" :popper="{ placement: 'top' }">
                                <img class="githubLogo" src="../public/icons/github.png" alt="Github icon" />
                            </UTooltip>
                        </a>
                    </span>
                    <span><a class="visitSite" href="https://swampfest.vercel.app/" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>
        </section>



        <section class="description">
            <img class="img" src="../public/images/swampfest/swampfestHero.webp" alt="Hero image of Swampfest" />

            <p class="rebornDescription">A music festival website should answer three questions:
                Who's playing, when are they playing, and how do I get tickets. <br><br>
                Swampfest does exactly that, and adds a Shrek vibe to it.
            </p>

            <div class="descriptionGrid">
                <img class="firstScreen" src="../public/images/swampfest/swampfestArtistGrid.webp" alt="First screen the user sees before logging in." />
                <p class="triangulationDescription">During the research phase, 
                    I interviewed parents that live in Copenhagen to understand their needs and pain points.
                    I also conducted interviews with daycare leaders to understand how their waiting list systems worked
                    and how they could be improved.
                </p>
                <div class="personaAndFlow">
                    <img class="persona" src="../public/images/swampfest/swampfestSchedule.webp" alt="Persona created after interviewing parents." />
                    <img class="flow" src="../public/images/swampfest/swampfestBand.webp" alt="Tech flow between Nuxt 3, Supabase, Github and Vercel." />
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

                <img class="dashboard" src="../public/images/swampfest/swampfestTickets.webp" alt="Screenshot of Swampfests ticket process" />

            </div>

            <div class="nuxtModulesImgs">

                <p class="daycaresDescription">
                    In the <strong>daycares' tab</strong>, 
                    the user can filter through 
                    the daycares by area, see them on a map,
                    and calculate the distance to their home.
                </p>
                <img class="filters" src="../public/images/swampfest/swampfestTicketsStepOne.webp" alt="Filters' tab in the dashboard" />
                <img class="map" src="../public/images/swampfest/swampfestTicketsStepTwo.webp" alt="Map' tab in the dashboard" />
                <img class="distance" src="../public/images/swampfest/swampfestTicketsStepThree.webp" alt="Distance' tab in the dashboard" />

            </div>

            <div class="visitingDiv">

                <p class="visitingIntro">
                    When the user picks a daycare, a pop up will
                    display the daycare's details and the possibility 
                    of adding children to their waiting list.
                </p>

                <img class="daycarePanel" src="../public/images/swampfest/swampfestTicketsStepFour.webp" alt="Daycares' tab in the dashboard" />

                <p class="visitingDescription">
                    Additionaly, the parents can plan a visit through the platform and receive a confirmation
                    straight into their emails.
                </p>

                <img class="calendlyPanel" src="../public/images/swampfest/swampfestTicketsStepFive.webp" alt="Calendly's nuxt module dashboard" />
                
            </div>

            <div class="subscriptionsDiv">
                <p class="subscriptionsDescription">
                    In the last tab, the user can see a list of all the daycares
                    they are subscribed to, and the amount of money it represents anually.
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

</style>
