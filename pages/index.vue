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


.daycares {
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto 0 0;
  position: relative;
  transition: padding 0.5s ease, background-color 0.5s ease;

}

.daycares::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../public/projectsImgs/daycares.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  width: 100%;
}

.daycares:hover::before {
  opacity: 0.5;
}

.daycares:hover {
  color: #f9f7f7;
  cursor: pointer;
  padding-bottom: 8rem;
  background-color: rgba(53, 53, 74, 0.5);

}

.swampfest {
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto 0 0;
  position: relative; /* Add this line */
  transition: padding 0.5s ease, background-color 0.5s ease;

}

.swampfest::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../public/projectsImgs/swampfest.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  width: 100%;
}

.swampfest:hover::before {
  opacity: 0.5;
}

.swampfest:hover {
  color: #f9f7f7;
  cursor: pointer;
  padding-bottom: 8rem;
  background-color: rgba(196, 211, 3, 0.5);

}

.messiverse{
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto 0 0; 
  position: relative; /* Add this line */
  transition: padding 0.5s ease, background-color 0.5s ease;

}

.messiverse::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../public/projectsImgs/messi2.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  width: 100%;

}

.messiverse:hover::before {
  opacity: 0.5;
}

.messiverse:hover{
    color: #F9F7F7;
    cursor: pointer;
    padding-bottom: 8rem;
    background-color: rgba(66, 164, 209, 0.5);
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
