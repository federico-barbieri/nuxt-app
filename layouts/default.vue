<template>
    <div>
        <nav>
            <h1><nuxt-link to="/">Federico Barbieri</nuxt-link></h1>
            <ul>
                <li><nuxt-link aria-label="Go to the about page" to="about">About</nuxt-link></li>
                
            </ul>
        </nav>
        <slot></slot>

        <footer>


            <section class="foot">
                <p>A footer joke my daughter would enjoy if she could read.</p>

                
            </section>
            
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
    width: 20%;
    list-style: none;
    font-size: 1.5rem;
}

ul > li:hover {
    cursor: pointer;
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
    height: 30vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Exa', sans-serif;
}

.foot{
    background: url('/public/images/footer/footer-foot.png') no-repeat center bottom;
    background-size: contain;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}

.foot p{
    width: 50%;
}


.pagesInFooter{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    margin: 0 auto;
}

.projectOnHover{
    text-align: left;
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
}

h1{
    font-size: 1.1rem;
}

ul{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
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




.github{
    width: 4rem;
}

.pagesInFooter{
    display: flex;
    flex-direction: row;
    align-items: start;
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