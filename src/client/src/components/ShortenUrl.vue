<template>
  <div>
    <form @submit="shortenUrl">
      <input
        type="url"
        v-model="urlAddress"
        name="urlAddress"
        placeholder="Input Url"
        required
        class="url-input"
      />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Shortenurl',
  data() {
    return {
      urlAddress: '',
    };
  },
  methods: {
    shortenUrl(event: Event) {
      event.preventDefault();

      const urlAddress = this.urlAddress;
      this.$emit('shorten-url', urlAddress);
      this.urlAddress = '';
    },
  },
});
</script>

<style scoped>
.url-input {
  width: 30%;
  height: 20px;
  border: 1px solid #000;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
}
</style>
