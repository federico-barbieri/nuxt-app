<template>
    <section>
        <div class="text">
            <h1>Let's get in touch</h1>

            <div class="some">
                <a href="https://www.linkedin.com/in/fedebarbieri" aria-label="Check Federico's LinkedIn profile" target="_blank">
                    <img loading="lazy" class="linkedin" src="../public/icons/linkedin.png" alt="LinkedIn logo">
                </a>

                <a href="mailto: federico.pedro.barbieri@gmail.com" aria-label="Send an email to Federico" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                    </svg>
                </a>
            </div>

        </div>           

    </section>

</template>

<script setup>

</script>

<style scoped>

section{
    width: 90vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
}

.text{
    width: 100%;
    height: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

h1{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2rem;
    margin: 0 auto 1rem 0;
}

.some{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto 0 0;
    width: 100%;
}

.linkedin{
    width: 4rem;
}

.github{
    width: 4rem;
}

</style>