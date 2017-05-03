<template lang="pug">
  div#home-view
    v-toolbar(fixed :class="[toolbar ? 'primary' : 'transparent elevation-0']")
      img(src="/static/v.png" height="38px")
      v-spacer
      v-toolbar-items
        v-toolbar-item(
          to="/vuetify/quick-start"
          router
        )
          span.subheading Docs
        v-toolbar-item(
          href="https://github.com/vuetifyjs/vuetify/releases"
          target="_blank"
        ) 
          span.subheading Updates

    section#hero.elevation-12
      v-parallax(src="/static/doc-images/hero_bg.png")
        v-layout(row align-vert-center align-horiz-center)
          v-col(xs12).text-xs-center
            h1(class="grey--text text--lighten-4") Vuetify.js
            div.grey--text.text--lighten-4.display-1 Material Component Framework
            div.mt-5.pt-5
              v-btn(
                light
                large
                tag="a"
                href="https://github.com/vuetifyjs/vuetify"
              ).grey.lighten-2
                v-icon(fa left light medium) fa-github
                span Github
              v-btn(dark large router href="/vuetify/quick-start").green.lighten-2
                span Get Started
                v-icon(right) chevron_right

    section#development.text-xs-center.pb-5
      v-container(fluid)
        v-layout(row)
          v-col(xs12)
            img(src="static/doc-images/featured.png" height="300px")
      h2.display-2 Supercharge your Development
      span.headline With the power of Vue and Material Design

    v-divider

    section#features.pb-5.pt-3
      v-container(fluid)
        v-layout(column)
          v-col(sm12).my-5
            v-layout(row)
              v-col(xs6 layout column align-vert-end align-horiz-center)
                v-card.transparent.elevation-0
                  div.title.grey--text.text--darken-1 Built-in input validation
              v-col(xs6)
                v-card(height="150px" img="https://rco.cc/vuetify/input-valid.png")
          v-col(sm12).my-5
            v-layout(row)
              v-col(xs6)
                v-card(height="150px" img="https://rco.cc/vuetify/theme.png")
              v-col(xs6 layout column align-vert-start align-horiz-center)
                v-card.transparent.elevation-0
                  div.title.grey--text.text--darken-1 Configurable themes
          v-col(sm12).my-5
            v-layout(row)
              v-col(xs6 layout column align-vert-end align-horiz-center)
                v-card.transparent.elevation-0
                  div.title.grey--text.text--darken-1 Datatables
              v-col(xs6)
                v-card(height="150px" img="https://rco.cc/vuetify/datatable.png")
          v-col(sm12).my-5
            v-layout(row)
              v-col(xs6)
                v-card(height="150px" img="https://rco.cc/vuetify/selects.png")
              v-col(xs6 layout column align-vert-start align-horiz-center)
                div.title.grey--text.text--darken-1 Fancy selects


    section#highlights.text-xs-center.grey.lighten-4.py-5
      v-container
        v-layout(row)
          v-col(xs3)
            v-btn(floating large).red.lighten-2
              v-icon devices
            p Ready for any screen size, from desktop to mobile.
          v-col(xs3)
            v-btn(floating large).red.lighten-2
              v-icon storage
            p Reusable components to make app development a breeze.
          v-col(xs3)
            v-btn(floating dark large).red.lighten-2 SSR
            p SSR support for SEO friendly apps.
          v-col(xs3)
            v-btn(floating large).red.lighten-2
              v-icon photo_size_select_small
            p Small footprint <br/> Under 100KB

    section#sponsors.py-5
      v-container( fluid)
        v-layout(row)
          v-col(xs10 offset-xs1).text-xs-center
            h4.headline.text-xs-center.mb-5 Vuetify.js is proudly sponsored by
            a( href="http://www.thedifferenceengine.io/")
              img( width="300px" src="https://vuetifyjs.com/public/doc-images/browser-stack.svg")

    v-footer(class="grey lighten-4 grey--text text--darken-4")
      v-layout(row)
        v-col(xs6)
          span © 2016-2017 John Leider
        v-col(xs6).text-xs-right
          span MIT License
</template>

<script>
  export default {
    data () {
      return {
        toolbar: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll, { passive: true })
    },
    methods: {
      onScroll () {
        this.toolbar = window.scrollY > 200
      }
    }
  }
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/settings/_colors'
  
  #home-view
    #hero
      .btn
        width: 190px
        
  #features
    .card__column.transparent
      height: 150px !important
</style>