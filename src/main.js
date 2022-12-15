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
const TL2 = new TimelineMax({paused: true});


TL1
    .from(logo, 0.7,{y: -100, opacity: 0})
    .from(link1, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(link2, 0.6, {y: -100, opacity: 0}, '-=0.2')
    .from(title, 1, {y: -100, opacity: 0})
    .from(cta, 1, {opacity: 0}, '-=0.25')

TL1.play();

TL2

    .from(tree, 1, {y: -100, opacity: 0})
    .from(eco, 1, {y: -100, opacity: 0})

TL2.play();



