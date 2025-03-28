<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1 id="top">A sandbox to experiment with tools and ideas</h1>
                <p>From immersive experiences to AI generated content. Here you'll find 
                    a collection of projects that I've been working on.
                </p>
            </div>

        </section>

        <hr class="firstDivider">



        <section class="description">

            <h2>The Messiverse</h2>

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p>Built with:</p>
                    <ul>
                        <li>
                            <UTooltip text="Nuxt 3" :popper="{ placement: 'top' }">
                                <img class="toolLogo nuxtLogo" src="../public/icons/nuxtjs.png" alt="Nuxt 3 icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Photoshop" :popper="{ placement: 'top' }">
                                <img class="toolLogo nuxtLogo" src="../public/icons/ps.svg" alt="Photoshop icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="After Effects" :popper="{ placement: 'top' }">
                                <img class="toolLogo nuxtLogo" src="../public/icons/ae.png" alt="After Effects icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Premiere" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/pr.png" alt="Premiere icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Open AI" :popper="{ placement: 'top' }">
                                <img class="toolLogo tailwindLogo" src="../public/icons/openai.png" alt="Open AI icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span>
                        <a href="https://github.com/federico-barbieri/Messiverse" target="_blank">
                            <UTooltip text="Github" :popper="{ placement: 'top' }">
                                <img class="githubLogo" src="../public/icons/github.png" alt="Github icon" />
                            </UTooltip>
                        </a>
                    </span>
                    <span><a class="visitSite" href="https://the-messiverse.vercel.app/" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>

           
            <img class="firstScreen" src="../public/images/experimentarium/messiverse/bosch.png" alt="AI generated content by Hieronymous Bosch" />

            
            <p class="projectDescription">The Messiverse is an attempt to explore how different historical artists
                would depict Argentina winning the World Cup 2022. From Da Vinci to Baskiat, the possibilities are endless.
            </p>

            <div class="descriptionGrid">
                <img class="img" loading="lazy" src="../public/images/experimentarium/messiverse/messiverseCover.png" alt="Cover of The Messiverse, an AI generated project" />
                <p class="triangulationDescription">The main inspiration behind this project was to bridge the gap 
                    between historical art and contemporary sports, merging two seemingly unrelated worlds 
                    into a captivating visual experience. 
                </p>
                <div class="personaAndFlow">
                    <img loading="lazy" class="persona" src="../public/images/experimentarium/messiverse/amaral.png" alt="AI generated content by Tarsila do Amaral" />
                    <img loading="lazy" class="flow" src="../public/images/experimentarium/messiverse/miyazaki.png" alt="AI generated content by Hazao Miyazaki" />
                    <img loading="lazy" class="persona" src="../public/images/experimentarium/messiverse/dali.png" alt="AI generated content by Salvador Dali" />
                    <img loading="lazy" class="flow" src="../public/images/experimentarium/messiverse/magritte.png" alt="AI generated content by Rene Magritte" />

                </div>

            </div>

        </section>

        <section class="nuxtModules">
            
            <div class="dashboardSection">
                <h2>Next steps</h2>

                <p class="dashboardDescription">
                    The inevitable next step was to animate all of this content and see where it would lead me.

                </p>

            </div>

            <div class="messiverseVideos">

                <video
                    loading="lazy"
                    poster="../public/images/experimentarium/messiverse/poster4.png"
                    class="video4" 
                    controls
                    >
                    <source src="../public/images/experimentarium/messiverse/video4.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>

                <video
                    loading="lazy"
                    poster="../public/images/experimentarium/messiverse/poster2.png"
                    class="video2" 
                    controls
                    >
                    <source src="../public/images/experimentarium/messiverse/video2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>

                <video
                    loading="lazy"
                    poster="../public/images/experimentarium/messiverse/poster5.png"
                    class="video5" 
                    controls
                    >
                    <source src="../public/images/experimentarium/messiverse/video5.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>

                <video
                    loading="lazy"
                    poster="../public/images/experimentarium/messiverse/poster1.png"
                    class="video1" 
                    controls
                    >
                    <source src="../public/images/experimentarium/messiverse/video1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>


            </div>

           

            <div class="subscriptionsDiv">
                

                <span class="backToTop"><nuxt-link to="#top">Back to top &uarr;</nuxt-link></span>

            </div>
        </section>

        <hr class="firstDivider">


        <!-- COPENHAGEN CARTEL -->

        <section class="description">

            <h2>Copenhagen Cartel</h2>

            <div class="toolsAndLinks">
                <div class="titleTools">
                    <p>Built with:</p>
                    <ul>
                        <li>
                            <UTooltip text="Three js" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/three.png" alt="Three js icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="JavaScript" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/js.svg" alt="JavaScript icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Vite" :popper="{ placement: 'top' }">
                                <img class="toolLogo" src="../public/icons/vitejs.png" alt="Vite js icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    <span>
                        <a href="https://github.com/federico-barbieri/cph-cartel-scroll" target="_blank">
                            <UTooltip text="Github" :popper="{ placement: 'top' }">
                                <img class="githubLogo" src="../public/icons/github.png" alt="Github icon" />
                            </UTooltip>
                        </a>
                    </span>
                    <span><a class="visitSite" href="https://cphcartel.netlify.app/" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>


            <img class="firstScreen" src="../public/images/cartel/plastic.webp" alt="Cover image for Copenhagen Cartel" />


            <p class="projectDescription">
                As a user, it's easy to stand behind noble causes. Fighting against ocean pollution is one of them.
                But it's not easy to translate these values into actions. <br><br>

                For this reason, we literally asked the consumers how deep they were willing to go in order to understand
                the magnitude of the situation.
            </p>

            <div class="descriptionGrid">
                <img class="img" loading="lazy" src="../public/images/cartel/cartelCover.webp" alt="Cover of Copenhagen Cartel's project" />
                <p class="triangulationDescription">
                    In this immersive experience through scrolling, the user will get exposed to ocean pollution data while
                    feeling they are actually in the ocean.
                </p>
                <div class="personaAndFlow">
                    <img loading="lazy" class="img" src="../public/images/cartel/immersive.webp" alt="Screenshot of Copenhagen Cartel's immersive experience" />
                    

                </div>

            </div>

            </section>

            <section class="nuxtModules">

        

            <div class="subscriptionsDiv">
                

                <span class="backToTop"><nuxt-link to="#top">Back to top &uarr;</nuxt-link></span>

            </div>
        </section>
    </main>
</template>

<script setup>

useHead({
  title: 'Experimentarium | Federico Barbieri',
  meta: [
    { name: 'description', content: "A sandbox to experiment with technologies." }
  ],
  lang: 'en',
})

</script>

<style scoped>

/* videos */

.messiverseVideos{
    width: 100%;
    height: auto;
    gap: 1.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
}

.video1, .video2, .video4, .video5{
    max-width: 40%;
    display: inline;
}


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

.firstDivider{
    margin: 3rem auto;
    width: 70%;
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
    width: 80%;
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
    margin: 5rem auto;
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

.projectDescription{
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


/* DASHBOARD */

.dashboardSection{
    width: 80%;
    display: flex;
    flex-direction: column;
}

.dashboardDescription{
    max-width: 50%;
    margin: 2rem auto 5rem 0;
}


/* NUXT MODULES IMGS */

.nuxtModules{
    width: 80%;
    margin: 0 auto;
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

.backToTop{
    display: block;
    margin: 5rem 0 0 auto;
    padding-bottom: 0.2rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in;
}

.backToTop:hover{
    cursor: pointer;
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
    margin: 2rem auto;
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

.firstDivider{
    margin: 3rem auto;
    width: 90%;
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
    width: 80%;
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
    width: 4rem;
    padding-right: 1rem;
    transition: all 0.5s ease-in;
}

.githubLogo:hover{
    transform: scale(1.1);
    filter: drop-shadow(2px 2px 2px #35354A);
}

/* DESCRIPTION */

.description{
    width: 90%;
    margin: 5rem auto;
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

.projectDescription{
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
}

.dashboardDescription{
    max-width: 70%;
    margin: 2rem auto 5rem 0;
}


/* NUXT MODULES IMGS */

.nuxtModules{
    width: 90%;
    margin: 0 auto;
}

}

/* MEDIA QUERY 750PX */

@media only screen and (max-width: 750px){
    main{
    width: 95%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 95%;
    margin: 2rem auto;
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

.firstDivider{
    margin: 3rem auto;
    width: 95%;
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
    margin: 2rem auto 0 auto;
}

.titleTools ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    width: 90%;
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
    justify-content: flex-start;
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
    width: 95%;
    margin: 5rem auto;
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

.projectDescription{
    width: 90%;
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
    width: 90%;
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
    max-width: 90%;
    margin: 2rem auto 5rem 0;
}


/* NUXT MODULES IMGS */

.nuxtModules{
    width: 95%;
    margin: 0 auto;
}

/* videos */

.messiverseVideos{
    width: 100%;
    height: auto;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.video1, .video2, .video4, .video5{
    max-width: 90%;
    display: block;
}

}

/* MEDIA QUERY 500PX */

@media only screen and (max-width: 500px){
    main{
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 1rem;
}

.title{
    width: 100%;
    margin: 2rem auto;
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

.firstDivider{
    margin: 3rem auto;
    width: 100%;
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
    margin: 2rem auto 0 auto;
}

.titleTools ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    width: 100%;
    flex-wrap: wrap;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

.toolLogo{
    width: 7rem;
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
    margin: 5rem auto;
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

.projectDescription{
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
    margin: 5rem auto 5rem 0;
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
    margin: 0 auto 2rem 0;
}

/* DASHBOARD */

.dashboardSection{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.dashboardDescription{
    max-width: 100%;
    margin: 2rem auto 5rem 0;
}


/* NUXT MODULES IMGS */

.nuxtModules{
    width: 100%;
    margin: 0 auto;
}

/* videos */

.messiverseVideos{
    width: 100%;
    height: auto;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.video1, .video2, .video4, .video5{
    max-width: 100%;
    display: block;
}

}

</style>