import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from './MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
    },
  },

  data() {
    return {
      meetup: {},
      state: '',
    };
  },

  watch: {
    meetupId() {
      this.state = '';
      this.updateMeetup();
    },
  },

  created() {
    this.updateMeetup();
  },

  methods: {
    updateMeetup() {
      fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.meetup = meetup;
          this.state = 'loaded';
        })
        .catch((error) => {
          this.state = `${error.message}`;
          return error;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="state == 'loaded'" :meetup="this.meetup"/>

      <ui-container v-if="state == ''">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else>
        <ui-alert>Test Error</ui-alert>
      </ui-container>
    </div>`,
});
