import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const cta = document.querySelector("#btn");
const title = document.querySelector('#title')
const eco = document.querySelector('#icon-eco');
const tree = document.querySelector('#icon-arbre');

const TL1 = new TimelineMax({paused: true});

TL1
    .from(title, 1, {y: -100, opacity: 0})
    .from(cta, 1, {opacity: 0}, '-=0.4')
    .from(eco, 1, {y: -100, opacity: 0})
    .from(tree, 1, {y: -100, opacity: 0})

TL1.play();



