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

const TL3 = new TimelineMax({paused: true})

TL1
    .from(logo, 0.7,{y: -100, opacity: 0})
    .from(link1, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(link2, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(title, 1, {y: -100, opacity: 0})
    .from(cta, 1, {opacity: 0}, '-=0.25')

TL1.play();

gsap.registerPlugin(ScrollTrigger);


TL2

    gsap.from("#ceo", 1, {y: -100, opacity: 0, scrollTrigger: '#ceo'})
    gsap.from("#p1",1.2, {opacity: 0, scrollTrigger: '#p1'})
    gsap.from("#p2",1.2, {opacity: 0, scrollTrigger: '#p2', delay: 0.1})
    gsap.from("#p3",1.2, {opacity: 0, scrollTrigger: '#p3', delay: 0.2})
    gsap.from("#p4",1.2, {opacity: 0, scrollTrigger: '#p4', delay: 0.3})
    gsap.from("#icon-arbre",  1.2, {x: -100, opacity: 0, scrollTrigger: '#icon-arbre'})
    gsap.from("#text1",  1.2, {x: -75, opacity: 0, scrollTrigger: '#icon-arbre'})
    gsap.from("#icon-eco",  1.2, {x: 100, opacity: 0, scrollTrigger: '#icon-eco', delay: 0.1})
    gsap.from("#text2",  1.2, {x: 75, opacity: 0, scrollTrigger: '#icon-eco', delay: 0.1})

TL2.play();

TL3



TL3.play();


