<template>
  <div class="toasts">
    <div class="toast__list">
      <template v-for="toast in toastList" :key="toast.stamp" @remove="removeToast">
        <UiToast :toast="toast" />
      </template>
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import UiToast from './UiToast.vue';

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
        stamp: Date.now(),
        removeDelay: 5000,
      };

      this.toastList.push(toast);
      this.removeToast(toast);
    },

    error(msg) {
      let toast = {
        type: 'error',
        msg,
        stamp: Date.now(),
        removeDelay: 5000,
      };

      this.toastList.push(toast);
      this.removeToast(toast);
    },

    removeToast(toast) {
      setTimeout(() => {
        this.toastList = this.toastList.filter((item) => item.stamp != toast.stamp);
      }, toast.removeDelay);
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

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
