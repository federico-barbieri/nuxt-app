<template>
    <div>
        <nav>
            <h1><nuxt-link to="/">Federico Barbieri</nuxt-link></h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <slot></slot>
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
    font-size: 3rem;
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
    padding-bottom: 0.5rem;
}

a{
    color: inherit;
    text-decoration: none;
}

</style>