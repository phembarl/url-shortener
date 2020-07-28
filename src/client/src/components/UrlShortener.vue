<template>
  <div class="url-shortener">
    <h2 class="title">URL Shortener</h2>
    <ShortenUrl @shorten-url="shortenUrl" />
    <p class="error">{{ errorMsg }}</p>
    <Urls v-if="urls[0]" :urls="urls" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Urls from './Urls.vue';
import ShortenUrl from './ShortenUrl.vue';
import axios from 'axios';
export default Vue.extend({
  name: 'UrlShortener',
  components: {
    Urls,
    ShortenUrl,
  },
  data() {
    return {
      urls: [] as object[],
      errorMsg: '',
    };
  },
  methods: {
    shortenUrl(urlAddress: string) {
      this.errorMsg = '';
      axios
        .post('http://localhost:5000/urls/shorten', { url: urlAddress })
        .then(res => (this.urls = [...this.urls, res.data.data]))
        .catch(error => {
          this.errorMsg = error.response.data.message.url;
        });
    },
  },
  mounted() {
    axios
      .get('http://localhost:5000/urls')
      .then(res => (this.urls = res.data.urls))
      .catch(error => console.log(error));
  },
});
</script>

<style scoped>
.url-shortener {
  text-align: center;
}

.title {
  color: #fff;
}

.error {
  color: red;
}
</style>
