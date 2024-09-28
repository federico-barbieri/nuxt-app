<template>
    <section>
        <div class="text">
            <h1>About me</h1>
            <p>I'm a web developer at BioNordic and student at KEA.</p>
            <p>As part of my third semester, I'm looking for an unpaid internship between January and April 2025.</p>
            <p>In a past life, I was a creative writer working for advertising agencies.</p>
            <p>In my freetime you'll find me learning more about web security and perfecting my Danish.</p>
            
            <h2>Education</h2>
            <ul>
                <li>KEA - PBA i Web Udvikling(2024-2025)</li>
                <li>KEA - Associates Degree in Multimedia Design (2022-2024)</li>
            </ul>

            <h2>Work Experience</h2>
            <ul>
                <li><em>BioNordic</em> - <strong>Web Developer</strong> (Dec 2023 - Current Position)</li>
                <li><em>Waitly</em> - <strong>Frontend Developer</strong> - Internship (Aug 2023- Dec 2023)</li>
                <li><em>AIM Robotics</em> - <strong>Frontend Developer</strong> - (Dec 2022- May 2023)</li>
            </ul>

            <carousel />
        </div>

        <div class="img">

        </div>

    </section>

</template>

<script setup>

</script>

<style scoped>

section{
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
}

@media only screen and (max-width: 1100px){
    section{
    width: 90vw;
    height: 140vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    margin: 0 auto;
}
}

.text{
    width: 100%;
    height: 100%;
    padding: 1rem;
    overflow-y: scroll;
}

.text p:nth-child(3) {
    width: 60%;
}

.text p{
    margin: 1rem auto 0 0;
}

h1{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2rem;
    margin: 0 auto 1rem auto;
}

h2{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.2rem;
    margin: 2rem auto 1rem auto;
}

.img{
    width: clamp(100%, 70%, 100%);
    height: 100%;
    margin: 0 auto;
    background-image: url('/fpb.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media only screen and (max-width: 600px){
    section{
    width: 100vw;
    height: 160vh;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
}
    .text{
    width: 100%;
    height: 100%;
    padding: 1rem;
}

.text p:nth-child(3) {
    width: 80%;
}

.text p{
    margin: 1rem auto 0 0;
}

h1{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 2rem;
    margin: 0 auto 1rem auto;
}

h2{
    font-family: 'Lexend Exa', sans-serif;
    font-size: 1.2rem;
    margin: 2rem auto 1rem auto;
}

.img{
    width: clamp(100%, 70%, 100%);
    height: 100%;
    margin: 0 auto;
    background-image: url('/fpb.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
}

</style>