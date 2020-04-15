<template>
  <div class="nav" :class="navClass">
    <div class="routes">
      <router-link to="/" class="route route--home">Home</router-link>
      <router-link to="/about" class="route route--about">About</router-link>
      <router-link to="/contact" class="route route--contact"
        >Contact</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { NavClass } from '@/utils/enums';

@Component
export default class AppNav extends Vue {
  private navClass = NavClass.Base;

  @Watch('$route')
  private onRouteUpdate(to: Route) {
    this.navClass = to.meta.navClass || NavClass.Base;
  }
}
</script>
