<template>
  <div id="app">
    <app-nav />
    <transition :name="pageTransition" mode="out-in">
      <router-view class="container" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { TransitionName } from './utils/enums';

import AppNav from '@/components/AppNav.vue';

const pages = namespace('pages');

@Component({
  components: {
    AppNav,
  },
})
export default class App extends Vue {
  @pages.State private pageTransition!: TransitionName;
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
