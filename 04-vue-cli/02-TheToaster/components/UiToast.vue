<template>
  <div class="toast" :class="`toast_${toast.type}`">
    <ui-icon class="toast__icon" :icon="ico" />
    <span>{{ toast.msg }}</span>
    <button v-if="toast.closeBtn" class="close-btn">X</button>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
export default {
  name: 'UiToast',

  components: {
    UiIcon,
  },

  props: {
    toast: {
      type: Object,
    },
  },

  emits: ['removeNow'],

  computed: {
    ico() {
      if (this.toast.type == 'success') return 'check-circle';
      else if (this.toast.type == 'error') return 'alert-circle';
      else return '';
    },
  },
};
</script>

<style scoped>
.toast {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px 16px 16px;
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

.icon {
  margin-right: 10px;
}

.close-btn{
  position: absolute;
  background: none;
  border: none;
  top: 4px;
  right: 4px;
  font-size: 12px;
  width: 10px;
  cursor: pointer;
}
</style>
