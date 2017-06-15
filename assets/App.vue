<template lang="pug">
  div#app
    v-fade-transition(mode="out-in")
      component(:is="component")
        slot
</template>

<script>
  const meta = require('../router/meta.json')

  export default {
    name: 'App',

    components: {
      default: require('layouts/Default'),
      home: require('layouts/Home')
    },

    data () {
      return {
        title: ''
      }
    },

    created () {
      if (process.env.VUE_ENV !== 'server') return

      const metaData = meta[this.$route.path] || {}
      const section = this.$route.path.split('/')
      let h1 = metaData.h1

      if (section.length > 2) {
        h1 = `
          <div class="hidden-sm-and-down">${section[1].charAt(0).toUpperCase()}${section[1].slice(1)} &nbsp;&mdash;&nbsp;&nbsp;
          </div><div>${h1}</div>
        `
      }

      this.$store.commit('vuetify/H1', h1)
      this.$ssrContext.title = `${metaData.title} | Vuetify.js`
      this.$ssrContext.description = metaData.description
      this.$ssrContext.keywords = metaData.keywords
    },

    computed: {
      component () {
        return this.$route.path === '/' ? 'home' : 'default'
      }
    },

    watch: {
      '$route' () {
        this.setMeta()
        this.$store.commit('vuetify/COLOR', this.getColor(this.$route.path))
        this.getPrevNext()
      }
    },

    mounted () {
      this.$store.commit('vuetify/COLOR', this.getColor(this.$route.path))
      this.getPrevNext()
    },

    methods: {
      setMeta () {
        if (typeof document === 'undefined') return

        const metaData = meta[this.$route.path] || {}
        const section = this.$route.path.split('/')
        let h1 = metaData.h1

        if (section.length > 2) {
          h1 = `${section[1].charAt(0).toUpperCase()}${section[1].slice(1)} &nbsp;&mdash;&nbsp; ${h1}`
        }

        document.title = `${metaData.title} | Vuetify.js`
        document.querySelector('meta[name="description"]').setAttribute('content', metaData.description)
        document.querySelector('meta[name="keywords"]').setAttribute('content', metaData.keywords)

        this.$store.commit('vuetify/H1', h1)
      },
      getColor (path) {
        let color = 'primary'

        if (this.match(path, /components/)) {
          color = 'indigo'
        } else if (this.match(path, /motion/)) {
          color = 'purple'
        } else if (this.match(path, /layout/)) {
          color = 'darken-3 pink'
        } else if (this.match(path, /style/)) {
          color = 'cyan'
        } else if (this.match(path, /directives/)) {
          color = 'teal'
        }

        return color
      },
      getPrevNext () {
        const currentIndex = this.$router.options.routes.findIndex(r => r.path === this.$route.path)
        const previous = currentIndex > 0 ? this.$router.options.routes[currentIndex - 1] : null
        const next = currentIndex < this.$router.options.routes.length - 1
          ? this.$router.options.routes[currentIndex + 1]
          : null

        this.$store.commit('vuetify/NEXT', {
          name: next ? next.meta && next.meta.h1 : null,
          color: next ? this.getColor(next.path) : null,
          route: next ? next.path : null
        })

        this.$store.commit('vuetify/PREVIOUS', {
          name: previous ? previous.meta && previous.meta.h1 : null,
          color: previous ? this.getColor(previous.path) : null,
          route: previous && previous.path !== '/' ? previous.path : null
        })
      },
      match (path, regex) {
        return path.match(regex)
      },
      meta (obj) {
        this.title = obj.h1
        this.$store.commit('vuetify/TITLE', obj.title)
        this.$store.commit('vuetify/DESCRIPTION', obj.description)
        this.$store.commit('vuetify/KEYWORDS', obj.keywords)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  [data-app] > main > .container
    min-height: calc(100vh - 156px)

  #app
    transition: .3s ease-in-out
</style>

<style src="../node_modules/mdi/css/materialdesignicons.css"></style>
