<template>
    <main>
        <section class="title">
            <div class="titleMain">
                <h1>SMK's vision into the future</h1>
                <p>With more than 200.000 artworks, SMK aims to 
                    <a href="https://www.smk.dk/en/article/smk-open/"><em>digitalize their entire collection</em></a>. 
                    This project imagines a potential way of doing it. 
                    Made in collaboration with Henry Navntoft for the subject Full Stack Development.
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
                        <li>
                            <UTooltip text="GitLab" :popper="{ placement: 'top' }">
                                <img class="gitlab" src="../public/icons/gitlab-logo-100.svg" alt="GitLab icon" />
                            </UTooltip>
                        </li>
                        <li>
                            <UTooltip text="Prisma" :popper="{ placement: 'top' }">
                                <img class="gitlab" src="../public/icons/prisma-2.svg" alt="Prisma icon" />
                            </UTooltip>
                        </li>
                    </ul>
                </div>
                <div class="titleLinks">
                    
                    <span><a class="visitSite" href="https://examprojecttest.net/" target="_blank">Visit site &#8594;</a></span>
                </div>
            </div>
        </section>
        <section class="introduction">
            <img class="img" src="../public/images/swampfest/titans.jpg" alt="Hero image of SMK" />
            <div class="inner_introduction">
                <h2>Introduction</h2>
                <p>
                    SMK has created an amazing API full of information about their artworks.
                    This project aims to create a platform where users can explore and interact with the collection.
                    <br><br>
                    To give the user enough flexibility without overwhelming it, 
                    the platform is initially seeded with 2000 artworks taken from the API 
                    and stored in a PostgreSQL database, following Prisma models. 
                    For efficiency, it uses tanstack query and incorporates pagination, filtering and sorting.
                </p>
            </div>
        </section>
        <section class="features">
            <img class="img" src="../public/images/swampfest/boat.jpg" alt="SMK art" />
            <div class="inner_features">
                <h2>Features</h2>
                <ul>
                    <li>Sign up flow</li>
                    <li>Log in flow</li>
                    <li>Forgot password flow</li>
                    <li>Like/Unlike artworks</li>
                    <li>Filtering</li>
                    <li>Sorting</li>
                    <li></li>
                </ul>
            </div>
        </section>
        <section class="process">
            <smk_carousel />
            <div class="inner_process">
                <h2>The Process</h2>
                <p>
                    When a change is made to the codebase, a long process starts. The code is pushed to GitLab, 
                    where a CI pipeline tests it and builds Docker Images that are stored in Docker Registry.
                    <br><br>
                    In the deployment stage, the CI job accesses my virtual private server with my credentials, 
                    pulls the Docker Images and Docker Compose up the services.
                </p>
            </div>
        </section>
        <section class="features">
            <img class="img" src="../public/images/swampfest/smk-ci-pipeline.png" alt="CI pipeline" />
            <div class="inner_features">
                <h2>Features</h2>
                <ul>
                    <li>Sign up flow</li>
                    <li>Log in flow</li>
                    <li>Forgot password flow</li>
                    <li>Like/Unlike artworks</li>
                    <li>Filtering</li>
                    <li>Sorting</li>
                    <li></li>
                </ul>
            </div>
        </section>
        <!-- 
        <section class="nextProjectSection">
            <span class="nextProject"><nuxt-link to="#">Next project &#8594;</nuxt-link></span>
        </section>
        -->
    </main>
</template>

<script setup>

useHead({
  title: 'SMK | Federico Barbieri',
  meta: [
    { name: 'description', content: "SMK Art Project, a project created by Federico Barbieri" }
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

.gitlab{
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

.gitlab:hover{
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

/* INTRODUCTION */

.introduction{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-around;
    height: auto;
    gap: 50px;
}

.introduction .img,
.features .img{
    max-width: 100%;
    display: block;
    margin: 0 auto;
}

.introduction p,
.features p{
    max-width: 50ch;
}

/* FEATURES */
.features{
    width: 80%;
    margin: 2rem auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-around;
    height: auto;
    gap: 50px;
}

.inner_features{
    width: 100%;
    text-align: right;
    margin-right: 0;
    margin-left: auto;
}

/* PROCESS */
.process{
    width: 80%;
    margin: 2rem auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-around;
    height: auto;
    gap: 50px;
}

.inner_process{
    width: 100%;
    text-align: left;
    margin-right: auto;
    margin-left: 0;
}

.inner_process p{
    max-width: 50ch;
}

/* NEXT PROJECT */

.nextProjectSection{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-around;
    height: auto;
    gap: 50px;
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
