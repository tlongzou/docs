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
    margin-bottom: 3rem
    max-width: 1024px

  .version
    margin-top: -1rem
    margin-bottom: 1rem
    text-align: right

  .chip--component
    margin-right: 1rem

  dt
    font-weight 900

  .section-text
    line-height: $line-height-root * 1.5
</style>
