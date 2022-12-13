import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const button = document.querySelector("#btn");
const title = document.querySelector('#title')

const TL1 = new TimelineMax({paused: true});

TL1
    .from(title, 1, {y: -100, opacity: 0})
    .from(button, 1, {opacity: 0}, '-=0.4');

TL1.play();