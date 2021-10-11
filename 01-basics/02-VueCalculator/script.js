import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      opL: 1,
      opR: 1,
      operation: 'sum',
    };
  },
  computed: {
    res() {
      if (typeof this.opL == 'number' && typeof this.opR == 'number') {
        switch (this.operation) {
          case 'sum':
            return this.opL + this.opR;
          case 'subtract':
            return this.opL - this.opR;
          case 'multiply':
            return this.opL * this.opR;
          case 'divide':
            return this.opR > 0 ? this.opL / this.opR : 'Dividing by zero!';
          default:
            return '-';
        }
      } else {
        return '-';
      }
    },
  },
  methods: {
    selectOperator(e) {
      this.operation = e.target.value;
    },
  },
}).mount('#app');
