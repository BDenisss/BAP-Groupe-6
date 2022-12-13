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

<!--
<div class=" box box-border absolute w-[1012px] h-[637px] left-[224px] top-[583px] z-50">
  <p class=" absolute left-12 top-12 not-italic font-light text-2xl leading-9">Consultez nous pour vos réparations de bois, métal, textile, cuir…, notre réseau d’artisans vous proposera la meilleure solution et la plus économique !</p>
</div>
 -->
<div class="mt-[800px]">

  <div class="relative">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%206.svg" alt="path6">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%207.svg" alt="path7">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="public/img/Vector%209.svg" alt="path9">

    <div class="flex justify-center gap-x-8 mb-[150px] max-md:mb-4 max-lg:mb-6 max-xl:mb-16 max-sm:flex-col max-sm:gap-y-8">
      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden" src="public/img/Group%2079.svg" alt="icone-arbre" id="icon-arbre">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="public/img/black-tree.svg" alt="icone-arbre">
        <p class="text-black text-xl font-light z-10 text-center max-sm:text-[16px] sm:text-white">Une démarche 100 % éco-responsable</p>
      </div>
      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden" src="public/img/Group%2078.svg" alt="icone-eco" id="icon-eco">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="public/img/black-eco.svg" alt="icone-arbre">
        <p class="text-black text-xl font-light z-10 text-center max-sm:text-[16px] sm:text-white">Redonnez une vie à un ancien meuble</p>
      </div>
    </div>

    <div class="rectangle"/>
  </div>
</div>

<div class=" bg-emerald-100 h-[400px]">

 

</div>



<div class="bg-darkgreen">

  <div class="rectangle2 "/>

  <div class="flex items-center py-[200px]">
    <div class="flex gap-x-[60px] mx-[100px] py-[50px] box2 max-lg:flex-col max-md:mx-[10px]">
      <div class="flex items-center pl-12 max-lg:pr-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px]" src="img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">Pour notre emménagement sur Paris, nous souhaitions acheter au maximum nos meubles en seconde main, nous sommes passés par la boutique les meubles circulaires et aucun regret. Très bonne expérience !</p>
          <p class="py-5 text-black font-semibold">Louise Bordes</p>
        </div>
      </div>
      <div class="flex items-center pr-12 max-lg:pl-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px]" src="img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">J’ai acheté à Bruno une jolie table avec deux chaises pour la terrasse à un prix très raisonnable. Super service avec livraison à domicile à vélo. Je recommande vivement ce lieu, son concept et Bruno très sympa !</p>
          <p class="py-5 text-black font-semibold">Paolini Pascale</p>
        </div>
      </div>
    </div>
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
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(to right, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%) 1;
  }

.rectangle2 {
height: 60px;
background: linear-gradient(90.66deg, rgba(255, 255, 255, 0) 49.43%, rgba(255, 255, 255, 0.208) 74.36%);
backdrop-filter: blur(2px);
border-width: 2px;
border-style:solid;
border-image: linear-gradient(to left, rgba(255, 255, 255, 0.19) 49.43%, rgba(255, 255, 255, 0) 74.36%) 1;


}

.box{
background: linear-gradient(185.12deg, rgba(255, 255, 255, 0.66) -7.46%, rgba(239, 243, 232, 0.264) 93.59%);
box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(4px);
}

.box2 {
  background: linear-gradient(185.12deg, rgba(255, 255, 255, 0.66) -7.46%, rgba(239, 243, 232, 0.264) 93.59%);
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
}

@media screen and (max-width: 768px) {
  .rectangle {
    height: 30px;
  }
}


</style>
