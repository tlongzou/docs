<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i" />
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/public/doc-images/carousel/squirrel.jpg'
          },
          {
            src: '/public/doc-images/carousel/sky.jpg'
          },
          {
            src: '/public/doc-images/carousel/bird.jpg'
          },
          {
            src: '/public/doc-images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>