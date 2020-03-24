<template>
  <v-card class="rounded-card mx-auto mt-2">
    <v-img v-if="!loading" :src="image" />
    <v-img
      v-else
      aspect-ratio="1"
      src="https://i.giphy.com/media/45aI8f1nI1b071X96C/giphy.webp"
    />
    <v-skeleton-loader class="my-5" max-width="200" v-if="loading" type="list-item"></v-skeleton-loader>

    <v-card-title v-else>
      <span class="mr-2">By</span>
      <a :href="url" target="_blank">{{ author }}</a>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    author: {
      type: String
    },
    image: {
      type: String
    },
    url: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.rounded-card {
  max-width: 500px;
  border-radius: 1rem !important;
  box-shadow: 0 0 10rem rgba(0, 0, 0, 0.2) !important;
}
</style>