<template>
    <div>
        <nav>
            <h1><nuxt-link to="/">Federico Barbieri</nuxt-link></h1>
            <ul>
                <li><nuxt-link aria-label="Go to the about page" to="about">About</nuxt-link></li>
                <li><nuxt-link aria-label="Go to the contact page" to="contact">Contact</nuxt-link></li>
            </ul>
        </nav>
        <slot></slot>

        <footer>

            <h3 class="federicoBarbieri"><strong>Federico Barbieri 2024</strong></h3>
            
            <div class="some">
                <a href="https://www.linkedin.com/in/fedebarbieri" aria-label="Check Federico's LinkedIn profile" target="_blank">
                    <img loading="lazy" class="linkedin" src="../public/icons/linkedin.png" alt="LinkedIn logo">
                </a>
                    
                <a href="https://github.com/federico-barbieri" aria-label="Check Federico's Github profile" target="_blank">
                    <img loading="lazy" class="github" src="../public/icons/github.png" alt="Github logo">
                </a>

                <a href="mailto: federico.pedro.barbieri@gmail.com" aria-label="Send an email to Federico" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                </a>
            </div>

            <div class="pagesInFooter">
                <h4 class="projectOnHover"><nuxt-link to="reborn">Rebørn</nuxt-link></h4>
                <h4 class="projectOnHover"><nuxt-link to="swampfest">Swampfest</nuxt-link></h4>
                <h4 class="projectOnHover"><nuxt-link to="experimentarium">Experimentarium</nuxt-link></h4>
            </div>
            
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>

body{
    margin: 0;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav{
    width: 100vw;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Exa', sans-serif;
}

h1{
    font-size: 1.5rem;
}

ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 30%;
    list-style: none;
    font-size: 1.5rem;
}

ul > li:hover {
    cursor: pointer;
    border-bottom: 1px solid black;
}

li{
    padding-bottom: 0.5rem;
}

a{
    color: inherit;
    text-decoration: none;
}

footer{
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Exa', sans-serif;
}

.federicoBarbieri{
    margin: 0 auto;
    font-size: 1.5rem;
}

.some{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

.linkedin{
    width: 4rem;
}

.github{
    width: 4rem;
}

.pagesInFooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

.projectOnHover:hover{
    text-decoration: underline;
}

@media only screen and (max-width: 767px){
    nav{
    width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Exa', sans-serif;
    border-bottom: 1px solid rgba(53, 53, 74, 0.8);
}

h1{
    font-size: 1.1rem;
}

ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    list-style: none;
    font-size: 1rem;
}
}

@media only screen and (max-width: 750px){
    footer{
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.federicoBarbieri{
    margin: 0 auto;
    font-size: 1.5rem;
}

.some{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

.linkedin{
    width: 4rem;
}

.github{
    width: 4rem;
}

.pagesInFooter{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 100%;
}
}

@media only screen and (max-width: 500px){
    footer{
        height: 35vh;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
    }
    ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    font-size: 1rem;
}

.some{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin: 0 auto;
    width: auto;
}
.linkedin{
    width: 4rem;
}

.github{
    width: 4rem;
}
.bi-envelope{
    width: 4rem;
}
.projectOnHover{
    font-size: 0.6rem;
    font-weight: 100;
}
.pagesInFooter{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: auto;
    padding: 0;
}
h3{
    font-size: 1rem;
}
}

</style>