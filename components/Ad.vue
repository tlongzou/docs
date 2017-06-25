<template lang="pug">
  v-flex(xs12 sm4 md12).ads
</template>

<script>
  export default {
    mounted () {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=vuetifyjscom'
      script.id = '_carbonads_js'

      this.$el.appendChild(script)
    }
  }
</script>

<style lang="stylus">
  @import '~assets/stylus/settings/_variables.styl'

  #carbonads
    display: flex
    justify-content: center
    position: fixed
    bottom: 124px
    right: 24px
    padding: 1em;
    background-color: hsla(0, 0%, 98%, .9)
    z-index: 3

    a
      color: rgba(#000, .87)
      display: inline-block
      max-width: 130px
      text-decoration: none
      
      &.carbon-poweredby
        color: rgba(#000, .56)
        text-transform: uppercase
        letter-spacing: 1px
        font-size: 9px !important

      &.carbon-text
        display: block
        font-size: 12px
        margin-bottom: .5em

  .ads
    @media $display-breakpoints.lg-and-up
      padding: 0 !important
      flex-basis: 0 !important
    
    @media $display-breakpoints.md-and-down
      #carbonads
        position: initial
        
    @media $display-breakpoints.xs-only
      #carbonads
        margin-bottom: 50px
</style>