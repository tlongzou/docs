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
      v-parallax(src="/static/doc-images/bg-2.jpg" height="400")
        v-layout(row align-vert-center align-horiz-center)
          v-flex(xs12).text-xs-center
            h1.grey--text.text--lighten-4.display-2 Vuetify.js
            div.grey--text.text--lighten-4.headline.hidden-xs-only Material Component Framework
            div.mt-5
              v-btn(
                light
                large
                tag="a"
                href="https://github.com/vuetifyjs/vuetify"
              ).grey.lighten-2
                v-icon(fa left light medium) github
                span Github
              v-btn(dark large router href="/vuetify/quick-start").green.lighten-2
                span Get Started
                v-icon(right) chevron_right

    section#development.text-xs-center.pa-5
      v-container(fluid)
        v-layout(row)
          v-flex(xs12)
            img(src="static/doc-images/featured.png" width="100%" style="max-width: 1024px")
      h2.display-2 Supercharge your Development
      span.headline With the power of Vue and Material Design

    v-divider

    section#features.pb-5.pt-3
      v-container(style="max-width: 1024px")
        v-layout(column)
          v-flex(sm12).my-5
            v-layout(row)
              v-flex(xs12 sm6 layout column align-end justify-center)
                v-card.transparent.elevation-0
                  v-card-title.pl-0.pt-0 Premade Templates
                  div.grey--text.text--darken-1 Vuetify comes ready to go with 5 pre-made vue-cli templates. Ranging from a simple html to a full blown SSR (server side rendered) application. No matter what the project, you are ready to go in minutes with your next great idea.
              v-flex(xs6).hidden-xs-only
                v-card(height="280px" img="/static/vuetify_cli.svg")
          v-flex(sm12).my-5
            v-layout(row)
              v-flex(xs6).hidden-xs-only
                v-card(height="280px" img="/static/vuetify_layout2.svg")
              v-flex(xs12 sm6 layout column align-end justify-center)
                v-card.transparent.elevation-0
                  v-card-title.pl-0.pt-0 Custom layouts
                  div.grey--text.text--darken-1 Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any task.
          v-flex(sm12).my-5
            v-layout(row)
              v-flex(xs12 sm6 layout column align-start justify-center)
                v-card.transparent.elevation-0
                  v-card-title.pl-0.pt-0 Semantic components
                  div.grey--text.text--darken-1 Every component has been meticulously crafted to offer the easiest, most understandable interface and robust api of properties that will customize the experience delivered in your next application.
              v-flex(xs6).hidden-xs-only
                v-card(height="280px" img="/static/vuetify_semantic.svg")
          v-flex(sm12).my-5
            v-layout(row)
              v-flex(xs6).hidden-xs-only
                v-card(height="280px" img="/static/vuetify_sizes.svg")
              v-flex(xs12 sm6 layout column align-start justify-center)
                v-card.transparent.elevation-0
                  v-card-title.pl-0.pt-0 Material design framework
                  div.grey--text.text--darken-1 Be prepared to have an armada of specialized components at your disposal. With over 80 in total, there is a solution to any situation.


    section#highlights.text-xs-center.grey.lighten-4.py-5
      v-container
        v-layout(row wrap)
          v-flex(xs12 sm6 md3)
            div.py-3.caption Ready for any screen size, from desktop to mobile
            v-btn(floating large).red.lighten-2
              v-icon devices
          v-flex(xs12 sm6 md3)
            div.py-3.caption Reusable components that make app development a breeze
            v-btn(floating large).red.lighten-2
              v-icon storage
          v-flex(xs12 sm6 md3)
            div.py-3.caption SSR support for SEO friendly apps
            v-btn(floating dark large).red.lighten-2 SSR
          v-flex(xs12 sm6 md3)
            div.py-3.caption Small footprint. Under 100KB
            v-btn(floating large).red.lighten-2
              v-icon photo_size_select_small

    section#sponsors.py-5
      v-container( fluid)
        v-layout(row)
          v-flex(xs10 offset-xs1).text-xs-center
            h4.headline.text-xs-center.mb-5 Vuetify.js is proudly sponsored by
            a( href="http://www.thedifferenceengine.io/")
              img( width="300px" src="https://vuetifyjs.com/public/doc-images/browser-stack.svg")

    v-footer.grey.lighten-4.grey--text.text--darken-4
      v-layout(row flex)
        v-flex(xs6)
          span © {{ new Date().getFullYear() }} John Leider
        v-flex(xs6).text-xs-right
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
    
    div.grey--text
      line-height: 2
        
  #features
    .card__column.transparent
      height: 150px !important
</style>