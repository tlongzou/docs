<template lang="pug">
  div.view
    slot
</template>

<script>
  export default {
    props: ['doc']
  }
</script>

<style lang="stylus">
  @import '~assets/stylus/settings/_variables'

  .view
    max-width: 1024px

  dt
    font-weight 900

  .section-text
    line-height: $line-height-root * 1.5
</style>
