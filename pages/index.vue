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

body{
  margin: 0 0;
  padding: 0;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#grid{
  width: 100vw;
  overflow: hidden;
  height: 95vh;
  background-color: var(--nearWhite);
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  align-items: center; 
}


.daycares{
border-bottom: 5px solid black;
width: 80%;
margin: 0 auto 0 0;
}

.swampfest{
border-bottom: 5px solid black;
width: 80%;
margin: 0 auto 0 0; 
}

.messiverse{
  border-bottom: 5px solid black;
  width: 80%;
  margin: 0 auto 0 0; 
}

.advertising{
  border-bottom: 5px solid black;
  width: 80%;
  margin: 0 auto 0 0; 
}



</style>
