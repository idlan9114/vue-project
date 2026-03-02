<script setup>
import CharacterInfo from './c.components/CharacterInfo.vue';
</script>

<template>
  <section class="S1">
    
  </section>

  <CharacterInfo/>

</template>

<style scoped>
.S1 {
  background-color: rgb(177, 177, 177);
  background-image: url('/assets/Rimage.png');
  background-position: center 0%;
  opacity: 70%;
  min-height: 50vh;
  padding: 40px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 27%;
}



@media screen and (max-width: 768px){
  .S1 {
 
    background-size: 50%; 
    background-position: center top 20px;
    padding: 20px;
  }
}
@media screen and (max-width: 1600px){
  .S1 {
 
    background-size: 25%; 
    background-position: center top 20px;
    padding: 20px;
  }
}
@media screen and (max-width: 1280px){
  .S1 {
 
    background-size: 50%; 
    background-position: center top 20px;
    padding: 20px;
  }
}
</style>