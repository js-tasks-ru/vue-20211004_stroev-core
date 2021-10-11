import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      btnValue: 0,
    };
  },
  methods: {
    increment() {
      this.btnValue++;
    },
  },
}).mount('#app');
