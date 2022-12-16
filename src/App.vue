<script setup>
import Button1 from "./components/Button1.vue"
</script>

<template>



<div class="img bg-cover h-full max-sm:gradiant">
  <nav class="nav h-[100px] w-full top-0 absolute flex">
    <div class="flex items-center gap-x-6 w-full justify-between">
      <img class="pl-12 justify-start max-md:h-[50px] max-md:pl-8" src="/img/LOGO.png" id="logo" alt="logo-les meubles circulaires">
      <div class="flex justify-end gap-x-4 pr-12 max-md:pr-8">
        <a class="text-xl text-white font-light bfr-anim max-md:text-base" id="link1" href="#presentation">Qui suis-je ?</a>
        <a class="text-xl text-white font-light bfr-anim max-md:text-base" id="link2" href="#slider">Exemple</a>
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



<div class="flex items-center justify-center" id="presentation">

  <div class="flex mt-[80px] mx-[50px] box max-lg:flex-col max-md:mx-[10px] w-[900px] py-8 max-md:gap-y-4 z-50 max-md:py-4 max-md:mt-[100px] rounded-xl">
  <div class="flex items-center justify-center">
    <img class="w-[180px] md:hidden max-md:block  max-[450px]:p-0 max-[450px]:h-[150px]" id="ceo" src="/img/persona.svg" alt="meuble-circulaire">
  </div>  

    <div class="flex items-center gap-8 px-6 max-lg:pr-6 max-[450px]:flex-col max-[450px]:gap-y-4">
      <div class="flex flex-col">
        <p class="font-semibold mb-[60px]" id="p1">Les meubles circulaires est un service de vente, d’achat, de réparation et de livraison de meubles d’occasion en circuit court à Paris.</p>
        <p class="font-semibold mb-[40px]" id="p2">Depuis 2 ans, Bruno accompagne ses clients dans une démarche 100 % éco-responsable car depuis qu’il a commencé il n’a jamais négligé de faire preuve de loyauté envers notre planète. Et bien plus, toutes les livraisons sont effectuées par lui-même en vélo-remorque.</p>
        <p class="font-semibold mb-[20px]" id="p3">Plus de place pour un canapé, une table à manger ou encore un lit… ? Déposez vos meubles à vendre sur notre site et laissez nous s’occuper du reste.</p>
        <p class="font-semibold" id="p4"> Redonnez une vie à un ancien meuble ? Consultez nous pour vos réparations de bois, métal, textile, cuir…, notre réseau d’artisans vous proposera la meilleure solution et la plus économique !</p>
      </div>
      <img class="h-[200px] w-[200px] max-[450px]:p-0 max-[450px]:h-[110px] max-md:hidden" id="ceo" src="/img/persona.svg" alt="meuble-circulaire">
    </div>
  </div>
</div>



<img class="absolute w-full h-full z-40" src="/img/Group106.svg" alt="">
<div class="mt-[165px] max-sm:mt-[20s0px] max-md:mt-[90px]">


  <div class="relative max-sm:bg-darkgreen">
    <div class="rectangle2 md:hidden"/>

    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector6.svg" alt="path6">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector7.svg" alt="path7">
    <img class="w-full absolute bottom-0 max-sm:hidden" src="/img/Vector9.svg" alt="path9">


    <div class="flex justify-center gap-x-8 mb-[150px] max-md:mb-4 max-lg:mb-6 max-xl:mb-16 max-sm:flex-col max-sm:gap-y-8 max-sm:mb-0 max-sm:py-4">

      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-lg:h-[75px]" src="/img/Group79.svg" alt="icone-arbre" id="icon-arbre">
        <p class="text-xl font-light z-10 text-center max-sm:text-[16px] text-white max-sm:px-2 max-md:text-[18px]" id="text1">Une démarche 100 % éco-responsable</p>
      </div>
      <div class="flex flex-col max-sm:gap-y-1 gap-y-8">
        <img class="h-[100px] z-10 max-md:h-[50px] max-lg:h-[75px]" src="/img/Group78.svg" alt="icone-eco" id="icon-eco">
        <p class="text-xl font-light z-10 text-center max-sm:text-[16px] text-white max-sm:px-2 max-md:text-[18px]" id="text2">Redonnez une vie à un ancien meuble</p>
      </div>
    </div>

    <div class="rectangle" id="slider"/>
  </div>
</div>





<div class="my-[50px]">
  <div class="product flex flex-col">

    <div class="swiper mySwiper container">
      <div class="swiper-wrapper content">
        <div class="swiper-slide card">
          <div class="content">


            <div class="image">
              <img src="/img/img1.png" alt="">
            </div>

          </div>
        </div>
        <div class="swiper-slide card">
          <div class="content">
            <div class="image">
              <img src="/img/img2.png" alt="">
            </div>

          </div>
        </div>
        <div class="swiper-slide card">
          <div class="content">
            <div  class="image ">
              <img src="/img/img3.png" alt="">
            </div>

          </div>

        </div>

        <div class="swiper-slide card">
          <div class="content">
            <div class="image">
              <img src="/img/img4.png" alt="">
            </div>

          </div>
        </div>

        <div class="swiper-slide card">
          <div class="content">
            <div class="image">
              <img src="/img/img5.png" alt="">
            </div>

          </div>
        </div>

        <div class="swiper-slide card">
          <div class="content">
            <div  class="image">
              <img src="/img/img1.png" alt="">
            </div>

          </div>
        </div>

        <div class="swiper-slide card">
          <div class="content">
            <div class="image">
              <img src="/img/img2.png" alt="">
            </div>

          </div>
        </div>


        <div class="swiper-slide card">
          <div class="content">
            <div class="image">
              <img src="/img/img3.png" alt="">
            </div>
          </div>
        </div>

        <div class="swiper-slide card">
          <div class="content">
            <div class="image ">
              <img src="/img/img4.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>



    <div class="swiper-button-next max-[575px]:hidden"></div>
    <div class="swiper-button-prev max-[575px]:hidden"></div>
    <div class="swiper-pagination max-[575px]:block"></div>

  </div>


</div>





<div class="bg-darkgreen">


<div class="bg-darkgreen">

  <div class="rectangle2"/>

  <div class="flex items-center justify-center py-[200px]">
    <div class="flex gap-x-[60px] mx-[100px] py-[50px] box2 max-lg:flex-col max-md:mx-[10px] w-[1200px] max-lg:gap-y-2 rounded-xl">
      <div class="flex items-center pl-6 max-lg:pr-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px] rounded-full" src="/img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">Pour notre emménagement sur Paris, nous souhaitions acheter au maximum nos meubles en seconde main, nous sommes passés par la boutique les meubles circulaires et aucun regret. Très bonne expérience !</p>
          <p class="py-5 text-black font-semibold italic">Louise Bordes</p>
        </div>
      </div>
      <div class="flex items-center pr-6 max-lg:pl-6 max-[450px]:flex-col max-[450px]:gap-y-2">
        <img class="h-[132px] w-[132px] pr-6 max-[450px]:p-0 max-[450px]:h-[110px] rounded-full" src="/img/img-person.svg" alt="avis-meuble-circulaire">
        <div class="flex flex-col">
          <p class="text-black">J’ai acheté à Bruno une jolie table avec deux chaises pour la terrasse à un prix très raisonnable. Super service avec livraison à domicile à vélo. Je recommande vivement ce lieu, son concept et Bruno très sympa !</p>
          <p class="py-5 text-black font-semibold italic">Paolini Pascale</p>
        </div>
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
  -webkit-background-image:
      linear-gradient(rgba(131, 154, 126, 0.50), rgba(131, 154, 126, 0.50)),
      url("/img/meubles.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;}

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
.bfr-anim {
  position: relative;
}

.bfr-anim::before {
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

.bfr-anim:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}



.product{
  position: relative;  
  height: 227px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.product .swiper{
  width: 80%;
}


.product .card .image img{
  height: 227px;
  width: 372px;
  border-radius: 50px 0px;
  border: 3px solid rgba(201, 197, 197, 0.781);

  
}

.swiper-pagination{
  top: 250px;
  
}

/* .swiper-pagination-bullet{
  height: 7px;
  width: 26px;
  border-radius: 5px;
  background: rgb(4, 27, 177);
} */

.swiper-button-next, .swiper-button-prev{
  opacity: 0.7;
  color:#839A7E;
  transition: all 0.3s ease;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
  opacity: 1;
  color: rgb(6, 147, 46);
}




@media screen and (max-width: 768px) {
  .rectangle {
    height: 30px;
  }


  .rectangle2 {
    height: 30px;
  }

}


</style>
