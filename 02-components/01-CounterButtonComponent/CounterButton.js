import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  emits: {
    'update:count': null,
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    incrCount() {
      return this.count + 1;
    },
  },

  // Шаблон потребуется отредактировать
  template: `
    <button
      type="button"
      @click="$emit('update:count', incrCount())"
    >{{count}}</button>
    `,
});
