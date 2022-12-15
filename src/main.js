import { createApp } from 'vue'
import './style.css'
import App from './App.vue'





createApp(App).mount('#app')

const cta = document.querySelector("#btn");
const title = document.querySelector('#title')
const eco = document.querySelectorAll('#icon-eco');
const tree = document.querySelectorAll('#icon-arbre');
const logo = document.querySelector('#logo');
const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');

const TL1 = new TimelineMax({paused: true});

const TL2 = new TimelineMax({paused: true})


TL1
    .from(logo, 0.7,{y: -100, opacity: 0})
    .from(link1, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(link2, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(title, 1, {y: -100, opacity: 0})
    .from(cta, 1, {opacity: 0}, '-=0.25')

TL1.play();

gsap.registerPlugin(ScrollTrigger);


TL2
    gsap.from("#icon-arbre",  1.2, {y: -100, opacity: 0, scrollTrigger: '#icon-arbre'})
    gsap.from("#text1",  1.2, {y: 75, opacity: 0, scrollTrigger: '#text1'})
    gsap.from("#icon-eco",  1.2, {y: -100, opacity: 0, scrollTrigger: '#icon-eco', delay: 0.8})
    gsap.from("#text2",  1.2, {y: 75, opacity: 0, scrollTrigger: '#text2', delay: 0.8})


TL2.play();


