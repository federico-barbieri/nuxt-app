<script setup>

</script>

<template>
  <main id="grid">

    <section class="daycares">
      <daycares />
     
    </section>

    <section class="swampfest">
      <swampfest />
    </section>

    <section class="messiverse">
      <messiverse />
    </section>

    <section class="advertising">
      <advertising />
      
    </section>
    
  </main>
</template>

<style scoped>

*{
  margin: 0;
  box-sizing: border-box;
}

#grid{
width: 95vw;
overflow: scroll;
height: 80vh;
background-color: red;
margin: 5rem auto;
border-radius: 30px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
place-items: center;
gap: 1rem;
justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
grid-template-areas: 
"daycares swampfest"
"messiverse advertising";
}

section{
  display: inline-block;
  margin: 1rem;
}

.daycares{
  grid-area: daycares;
  background-color: aliceblue;
  border: 5px solid blue;
}

.swampfest{
  grid-area: swampfest;
  background-color: burlywood;
  border: 5px solid blue;
  
}

.messiverse{
  grid-area: messiverse;
  background-color: magenta;
  border: 5px solid blue;

}

.advertising{
  grid-area: advertising;
  background-color: orange;
  border: 5px solid blue;
}



</style>
