<template>
  <v-carousel icon="remove">
    <v-carousel-item 
      v-for="(item,i) in items" :key="i"
      v-bind:src="item.src" 
      transition="fade" 
      reverseTransition="fade"
    />
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

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>