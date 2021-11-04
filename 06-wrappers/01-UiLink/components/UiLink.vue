<template>
  <component :is="computedTag" class="link"> <slot /> </component>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'UiLink',
  props: ['tag'],
  computed: {
    computedTag() {
      if (typeof this.tag === 'undefined') return RouterLink;
      return this.tag;
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--blue);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
