<script setup>
import Button1 from "./components/Button1.vue"
</script>

<template>

<div class="img bg-cover h-full no-repeats">
  <div class="flex justify-center w-[100%] h-[800px]">
    <div class="flex flex-col justify-center items-center gap-y-9">
      <h1 class="text-white text-xl text-center"> Déposez vos meubles à vendre sur notre site et laissez nous s'occuper du reste.</h1>
      <Button1 class="rounded-full" text="Catalogue"/>
    </div>
  </div>
</div>



<div class="mt-[800px]">

  <div class="relative">
    <img class="w-full absolute bottom-0" src="public/img/Vector%206.svg" alt="path2">
    <img class="w-full absolute bottom-0" src="public/img/Vector%207.svg" alt="path2">
    <img class="w-full absolute bottom-0" src="public/img/Vector%209.svg" alt="path2">
    <div class="flex flex-col">
      <p class="z-40 text-center text-2xl text-white mb-[200px] px-[12px]">Consultez nous pour vos réparations de bois, métal, textile, cuir…, notre réseau d’artisans vous proposera la meilleure solution et la plus économique !</p>
    </div>
    <div class="rectangle"/>
  </div>
</div>






</template>

<style scoped>

.img {
  background-image:
      linear-gradient(rgba(131, 154, 126, 0.50), rgba(131, 154, 126, 0.50)),
      url("public/img/meubles.png");
  background-size: cover;
  background-blend-mode: normal;

}

.curv-bg {
  background-color: #4B5D4C;
}

.rectangle {
  height: 60px;
  background: linear-gradient(90.66deg, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%);
  backdrop-filter: blur(2px);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%) 1;
}



</style>
