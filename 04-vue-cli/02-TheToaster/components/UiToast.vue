<template>
  <div class="toast" :class="`toast_${toast.type}`">
    <ui-icon class="toast__icon" :icon="ico" />
    <span>{{ toast.msg }}</span>
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
.icon {
  margin-right: 10px;
}
</style>
