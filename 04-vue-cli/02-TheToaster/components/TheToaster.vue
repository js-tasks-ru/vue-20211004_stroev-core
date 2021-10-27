<template>
  <div class="toasts">
    <div class="toast__list">
      <UiToast v-for="toast in toastList" :key="toast.id" v-bind="toast" @removeNow="removeNow" />
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from './UiToast.vue';

let id = 0;

export default {
  name: 'TheToaster',

  components: {
    UiIcon,
    UiToast,
  },

  data() {
    return {
      toastList: [],
    };
  },

  methods: {
    success(msg) {
      let toast = {
        type: 'success',
        msg,
        id: id++,
        removeDelay: 5000,
        closeBtn: false,
      };

      this.toastList.push(toast);
      this.removeDelay(toast);
    },

    error(msg) {
      let toast = {
        type: 'error',
        msg,
        id: id++,
        removeDelay: 5000,
        closeBtn: false,
      };

      this.toastList.push(toast);
      this.removeDelay(toast);
    },

    removeDelay(toast) {
      setTimeout(() => {
        this.toastList = this.toastList.filter((item) => item.id != toast.id);
      }, toast.removeDelay);
    },

    removeNow(toast) {
      this.toastList = this.toastList.filter((item) => item.id != toast.id);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
