<script setup>
import Button1 from "./components/Button1.vue"
</script>

<template>

<div class="img bg-cover h-full max-sm:gradiant">
  <div class="flex justify-center w-[100%] h-[800px]">
    <div class="flex flex-col justify-center items-center gap-y-9">
      <h1 class="text-white text-xl text-center px-6 max-sm:text-[17px]" id="title"> Déposez vos meubles à vendre sur notre site et laissez nous s'occuper du reste.</h1>
      <Button1 class="rounded-full" text="Catalogue"/>
    </div>
  </div>
</div>



<div class="mt-[800px]">

  <div class="relative">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%206.svg" alt="path6">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%207.svg" alt="path7">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%209.svg" alt="path9">

    <div class="flex justify-center gap-x-8 mb-[150px] max-md:mb-4 max-lg:mb-6 max-xl:mb-16 max-sm:flex-col max-sm:gap-y-8">
      <div class="flex flex-col max-sm:gap-y-1">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden" src="public/img/Group%2079.svg" alt="icone-arbre">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="public/img/black-tree.svg" alt="icone-arbre">
        <p class="text-white text-xl font-light z-10 text-center max-md:text-[16px] max-sm:text-black">Une démarche 100 % éco-responsable</p>
      </div>
      <div class="flex flex-col max-sm:gap-y-1">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden" src="public/img/Group%2078.svg" alt="icone-arbre">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="public/img/black-eco.svg" alt="icone-arbre">
        <p class="text-white text-xl font-light z-10 text-center max-md:text-[16px] max-sm:text-black">Redonnez une vie à un ancien meuble</p>
      </div>
    </div>

    <div class="rectangle"/>
  </div>
</div>






</template>

<style scoped>

.gradiant {
  background-color: #4B5D4C;
}


.img {
  background-image:
      linear-gradient(rgba(131, 154, 126, 0.50), rgba(131, 154, 126, 0.50)),
      url("public/img/meubles.png");
  background-blend-mode: normal;
  width: 100%;
  border-bottom: 10px solid black;
  clip-path: path("M523.853 648.417C414.649 853.596 147.255 761.953 27.2087 690.484H-12V-178H1752.22L1784 77.8346L1752.22 325.449C1732.47 237.515 1652.1 432.984 1578.04 510.786C1507.85 611.656 1199.7 713.01 946.436 558.854C693.177 404.699 559.189 554.331 523.853 648.417Z");
}

.rectangle {
  height: 60px;
  background: linear-gradient(90.66deg, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%);
  backdrop-filter: blur(2px);
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%) 1;
}

@media screen and (max-width: 768px) {
  .rectangle {
    height: 30px;
  }
}


</style>
