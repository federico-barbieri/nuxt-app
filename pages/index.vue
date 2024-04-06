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

@import "../css/styles.css";

body{
  margin: 0;
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
  height: 90vh;
  background-color: var(--nearWhite);
  margin: 0rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 

}


.daycares{
  padding: 1rem 0;
  width: 80%;
  margin: 0 auto 0 0;
  transition: all 0.5s ease;

}

.daycares:hover{
    color: #F9F7F7;
    background-color: #35354A;
    border-bottom: 40px solid rgb(22, 21, 21);
    cursor: pointer;
}

.swampfest{
  padding: 1rem 0;
width: 80%;
margin: 0 auto 0 0; 
transition: all 0.5s ease;
}

.swampfest:hover{
    color: #F9F7F7;
    background-color: #C4D303;
    border-bottom: 40px solid rgb(22, 21, 21);
    cursor: pointer;
}

.messiverse{
  padding: 1rem 0;
  width: 80%;
  margin: 0 auto 0 0; 
  transition: all 0.5s ease;
}

.messiverse:hover{
    color: #F9F7F7;
    background-color: #42A4D1;
    border-bottom: 40px solid rgb(22, 21, 21);
    cursor: pointer;
}

.advertising{
  padding: 1rem 0;
  width: 80%;
  margin: 0 auto 0 0; 
  transition: all 0.5s ease;
}

.advertising:hover{
    color: #F9F7F7;
    background-color: #6C0D0D;
    border-bottom: 40px solid rgb(22, 21, 21);
    cursor: pointer;
}



</style>
