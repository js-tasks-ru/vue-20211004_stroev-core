<template>
  <ui-container>
    <h2 class="title">IndexPage</h2>
    <!-- Для проверки: <router-link to="/login?from=/">/login?from=/</router-link> -->
    <ui-form-group label="Label Text">
      <div class="input-group">
        <input class="form-control" placeholder="With label" />
      </div>
    </ui-form-group>

    <ui-form-group>
      <div class="input-group">
        <input class="form-control" placeholder="No label" />
      </div>
    </ui-form-group>

    <ui-form-group inline>
      <div class="input-group">
        <input class="form-control" placeholder="Inline" />
      </div>
    </ui-form-group>
  </ui-container>
</template>

<script>
import UiContainer from '../components/UiContainer';
import UiFormGroup from '../components/UiFormGroup';

export default {
  name: 'PageIndex',
  components: { UiContainer, UiFormGroup },
};
</script>

<style></style>
