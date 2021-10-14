import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },

  // <time datetime="2020-01-01">1 янв. 2020</time>
  // {{ new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })  }}

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
      
        <time :datetime="new Date(date).toISOString().split('T')[0]">{{ new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
      </li>
    </ul>`,
});
