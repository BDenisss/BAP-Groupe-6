<script setup>
import Button1 from "./components/Button1.vue"
</script>

<template>

<div class="img bg-cover h-[100vh]">
  <div class="flex justify-center img bg-cover w-[100%] h-[100%]">
    <div class="flex flex-col justify-center items-center gap-y-9">
      <h1 class="text-white text-xl"> Déposez vos meubles à vendre sur notre site et laissez nous s'occuper du reste.</h1>
      <Button1 class="rounded-full" text="Catalogue"/>
    </div>
  </div>
</div>



</template>

<style scoped>

.img {
  background-image: url("public/img/bg.svg");
}

</style>
