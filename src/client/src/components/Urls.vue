<template>
  <div class="urls">
    <table class="url-table">
      <tr>
        <th>URLs</th>
        <th>SHORTENED URLs</th>
      </tr>
      <tr v-for="url in urls" :key="url._id">
        <td>
          <Url :address="url.url" />
        </td>
        <td>
          <Url :address="url.shortenedUrl" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Url from './Url.vue';
export default Vue.extend({
  name: 'Urls',
  components: {
    Url,
  },
  props: {
    urls: Array,
  },
});
</script>

<style scoped>
.url-table {
  color: #000;
  background-color: #f2f2f2;
  text-align: initial;
  display: inline-block;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000;
}

th,
td {
  padding: 10px;
}

table tr:nth-child(even) {
  background-color: #d9d9d9;
}
</style>
