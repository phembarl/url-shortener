<template>
  <div id="app">
    <UrlShortener />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UrlShortener from './components/UrlShortener.vue';

export default Vue.extend({
  name: 'App',
  components: {
    UrlShortener,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
