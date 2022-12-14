<script setup>
import Button1 from "./components/Button1.vue"
</script>

<template>



<div class="img bg-cover h-full max-sm:gradiant">
  <nav class="nav h-[100px] w-full top-0 absolute flex">
    <div class="flex items-center gap-x-6 w-full justify-between">
      <img class="pl-12 justify-start" src="/img/LOGO.png" alt="logo-les meubles circulaires">
      <div class="flex justify-end gap-x-4 pr-12">
        <a class="text-xl text-white font-light" href="">Qui suis-je ?</a>
        <a class="text-xl text-white font-light" href="">Exemple</a>
      </div>
    </div>
  </nav>
  <div class="flex justify-center w-[100%] h-[100vh]">
    <div class="flex flex-col justify-center items-center gap-y-9">
      <h1 class="text-white text-xl text-center px-6 max-sm:text-[17px] font-normal" id="title"> Déposez vos meubles à vendre sur notre site et laissez nous s'occuper du reste.</h1>
      <Button1 class="rounded-full" text="Catalogue"/>
    </div>
  </div>
</div>

<!--
<div class=" box box-border absolute w-[1012px] h-[637px] left-[224px] top-[583px] z-50">
  <p class=" absolute left-12 top-12 not-italic font-light text-2xl leading-9">Consultez nous pour vos réparations de bois, métal, textile, cuir…, notre réseau d’artisans vous proposera la meilleure solution et la plus économique !</p>
</div>
 -->
<div class="mt-[100vh]">

  <div class="relative">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector%206.svg" alt="path6">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector%207.svg" alt="path7">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector%209.svg" alt="path9">

    <div class="flex justify-center gap-x-8 mb-[150px] max-md:mb-4 max-lg:mb-6 max-xl:mb-16 max-sm:flex-col max-sm:gap-y-8">
      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden max-lg:h-[75px]" src="/img/Group%2079.svg" alt="icone-arbre" id="icon-arbre">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="/img/black-tree.svg" alt="icone-arbre" id="icon-arbre">
        <p class="text-black text-xl font-light z-10 text-center max-sm:text-[16px] sm:text-white">Une démarche 100 % éco-responsable</p>
      </div>
      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-sm:hidden max-lg:h-[75px]" src="/img/Group%2078.svg" alt="icone-eco" id="icon-eco">
        <img class="h-[100px] z-10 max-md:h-[50px] sm:hidden" src="/img/black-eco.svg" alt="icone-arbre" id="icon-eco">
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

  <div class="flex items-center justify-center py-[200px]">
    <div class="flex gap-x-[60px] mx-[100px] py-[50px] box2 max-lg:flex-col max-md:mx-[10px] w-[1200px] max-lg:gap-y-2">
      <div class="flex items-center pl-6 max-lg:pr-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px]" src="img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">Pour notre emménagement sur Paris, nous souhaitions acheter au maximum nos meubles en seconde main, nous sommes passés par la boutique les meubles circulaires et aucun regret. Très bonne expérience !</p>
          <p class="py-5 text-black font-semibold italic">Louise Bordes</p>
        </div>
      </div>
      <div class="flex items-center pr-6 max-lg:pl-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px]" src="img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">J’ai acheté à Bruno une jolie table avec deux chaises pour la terrasse à un prix très raisonnable. Super service avec livraison à domicile à vélo. Je recommande vivement ce lieu, son concept et Bruno très sympa !</p>
          <p class="py-5 text-black font-semibold italic">Paolini Pascale</p>
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
      url("/img/meubles.png");
  background-blend-mode: normal;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: 100%;
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

.nav {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
a {
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 4px;
  background-color: #FFFFFF;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}


@media screen and (max-width: 768px) {
  .rectangle {
    height: 30px;
  }
}


</style>
