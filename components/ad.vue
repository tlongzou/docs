<template lang="pug">
  v-flex(xs12 sm4).ads
    script(defer type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=vuetifyjscom" id="_carbonads_js")
</template>

<style lang="stylus">
  @import '~assets/stylus/settings/_variables.styl'

  #carbonads
    display: flex
    justify-content: center
    position: fixed
    bottom: 24px
    right: 24px
    

    a
      color: rgba(#000, .87)
      display: inline-block
      max-width: 130px
      text-decoration: none
      
      &.carbon-poweredby
        color: rgba(#000, .56)

      &.carbon-text, &.carbon-poweredby
        display: block
        font-size: 12px

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
