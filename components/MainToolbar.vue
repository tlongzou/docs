<template lang="pug">
  v-toolbar(:class="[color]" fixed light)#main-toolbar
    v-toolbar-side-icon( light
      v-on:click.native.stop="$store.commit('vuetify/SIDEBAR', !$store.state.sidebar)"
    )

    transition(name="slide" mode="out-in")
      div(style="position: relative" v-bind:key="title")
        v-toolbar-title(v-html="title")
</template>

<script>
  export default {
    computed: {
      color () {
        return this.$store.state.currentColor
      },
      title () {
        return this.$store.state.h1
      }
    }
  }
</script>

<style lang="stylus">
  #main-toolbar .toolbar
    &__logo, &__title
      white-space: nowrap
      min-width: 0
      overflow: hidden
      text-overflow: ellipsis

    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center

      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem

        img
          height: 25px

        i
          padding: 0

        h1
          font-size: 4vw
</style>
