<template lang="pug">
  v-toolbar(:class="[color]" fixed dark)#main-toolbar
    v-toolbar-side-icon(
      v-on:click.native.stop="$store.commit('vuetify/SIDEBAR', !$store.state.sidebar)"
    )

    transition(name="slide" mode="out-in")
      v-toolbar-title(
        v-html="title"
        style="position: relative"
        v-bind:key="title"
        class="flexbox"
      )
    v-spacer
    v-menu
      v-btn(flat slot="activator" dark) Version: {{ release || 'Latest' }}
        v-icon arrow_drop_down
      v-list
        v-list-tile(
          router
          to="/"
          v-if="i === 0"
          v-for="(release, i) in releases"
          v-bind:key="release"
        )
          v-list-tile-title {{ release }}
        v-list-tile(
          tag="a"
          v-else
          :href="`/releases/${release}`"
        )
          v-list-tile-title {{ release }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'toolbar',

    data: () => ({
      release: process.env.RELEASE
    }),

    computed: {
      ...mapState([
        'releases'
      ]),
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
