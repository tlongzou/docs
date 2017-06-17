<template lang="pug">
  v-footer.white.main-footer
    v-layout(row grow).ma-0
      v-flex(
        v-if="previous.route"
        xs12
        v-bind:class="{ 'xs6': next.route }"
      ).primary.pa-0
        v-list(v-bind:class="[previous.color]" dark).py-0
          v-list-tile(router :to="previous.route" ripple)
            v-icon(dark).mr-5.hidden-xs-only arrow_back
            v-list-tile-content
              v-list-tile-sub-title Previous
              v-list-tile-title(v-text="previous.name")
      v-flex(
        v-if="next.route && next.route !== '*'"
        xs12
        v-bind:class="{ 'xs6': previous.route }"
      ).pa-0
        v-list(v-bind:class="[next.color]" dark).py-0
          v-list-tile(router :to="next.route" ripple)
            v-list-tile-content
              v-list-tile-sub-title.text-xs-right Next
              v-list-tile-title.text-xs-right(v-text="next.name")
            v-icon(dark).ml-5.hidden-xs-only arrow_forward
</template>

<script>
  export default {
    computed: {
      previous () {
        return this.$store.state.previous
      },
      next () {
        return this.$store.state.next
      }
    }
  }
</script>

<style lang="stylus">
  .main-footer
    height: initial

    .col
      transition: .3s ease-in-out

    .list__tile
      height: 100px

      &__title
        color: #fff

      &__sub-title
        color: rgba(#fff, .3)
</style>
