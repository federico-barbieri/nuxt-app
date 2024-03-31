<script setup>

</script>

<template>
  <main id="grid">

    <section class="name">
      <myName />
    </section>

    <section class="projects">
      <projects />
    </section>

    <section class="tools">
      <tools />
    </section>

    <section class="contact">
      <contact />
      
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
background-color: red;
height: 90vh;
margin: 0 auto;
border-radius: 30px;
grid-template-columns: 1fr 2fr 2fr;
grid-template-rows: repeat(3, 1fr);
gap: 1.5rem;
grid-template-areas: 
"name projects projects"
"tools projects projects"
"contact contact contact";
}

section{
  display: inline-block;
  margin: 1rem;
}

.name{
  grid-area: name;
  background-color: aliceblue;
  border: 5px solid blue;
}

.projects{
  grid-area: projects;
  background-color: burlywood;
  border: 5px solid blue;
  
}

.tools{
  grid-area: tools;
  background-color:chocolate;

}

.contact{
  grid-area: contact;
}



</style>
