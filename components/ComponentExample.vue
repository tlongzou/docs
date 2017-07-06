<template lang="pug">
  div.component-example
    v-card
      v-card-title(v-bind:class="[currentColor]")
        span.headline.white--text(v-text="header")
        v-spacer
        v-btn(
          dark
          icon
          tag="a"
          v-bind:href="'https://github.com/vuetifyjs/docs/tree/master/examples/'+file+'.vue'"
          target="_blank"
          v-tooltip:left="{ html: 'Edit this example' }"
        )
          v-icon edit
        v-btn(
          dark
          icon
          v-on:click.native.stop="panel = !panel"
          v-tooltip:left="{ html: 'View source' }"
        )
          v-icon code
      v-expansion-panel.elevation-0.component-example__panel
        v-expansion-panel-content(v-model="panel")
          v-tabs(ref="tabs" dark :scrollable="false")
            v-tabs-bar(slot="activators" v-bind:class="[currentColor]" class="darken-4 pl-0")
              v-tabs-slider(class="lighten-4" v-bind:class="[currentColor]")
              v-tabs-item(
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:href="'#'+tab"
                v-show="parsed[tab]"
              ) {{ tab }}
            v-tabs-content(
              v-for="tab in tabs"
              v-bind:key="tab"
              v-bind:id="tab"
            )
              markup(:lang="getLang(tab)" v-if="parsed[tab]").ma-0
                div(v-html="parsed[tab]")
      v-card-text.subheading.justify
        slot(name="desc")
      v-card-text
        div(v-bind:id="'example-'+uid")
    v-divider.my-5
</template>

<script>
  import Vue from 'vue'
  const release = process.env.RELEASE
  const path = require('path')
  const resolve = (file) => path.resolve(__dirname, file)

  export default {
    data () {
      return {
        tabs: ['template', 'script', 'style'],
        component: null,
        instance: null,
        uid: null,
        panel: false,
        parsed: {
          script: null,
          style: null,
          template: null
        },
        url: release ? 'releases/' + release + '/' : ''
      }
    },

    props: {
      file: String,
      header: String
    },

    computed: {
      currentColor () {
        return this.$store.state.currentColor
      }
    },

    watch: {
      panel () {
        this.$refs.tabs.slider()
      }
    },

    beforeDestroy () {
      this.instance.$destroy()
    },

    mounted () {
      this.uid = this._uid
      const vm = this
      import(`../examples/${this.file}.vue`).then(comp => {
        this.instance = new Vue(comp)
        this.instance.$mount('#example-'+vm.uid)
      })
      this.request(this.file, this.boot)
    },

    methods: {
      getLang (tab) {
        if (tab === 'script') return 'js'
        if (tab === 'style') return 'css'
        return 'html'
      },
      parseTemplate (target, template) {
        const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`
        const regex = new RegExp(string, 'g')
        const parsed = regex.exec(template)

        return parsed
          ? parsed[1].replace(/</g, '&lt;').replace(/>/g, '&gt;')
          : false
      },

      boot (res) {
        this.parsed.template = this.parseTemplate('template', res)
        this.parsed.script = this.parseTemplate('script', res)
        this.parsed.style = this.parseTemplate('style', res)
      },

      toggle () {
        this.active = !this.active
      },

      request (file, cb) {
        const xmlhttp = new XMLHttpRequest()
        const vm = this
        const timeout = setTimeout(() => this.loading = true, 500)
        xmlhttp.open('GET', `/${this.url}examples/${file}.vue`, true)

        xmlhttp.onreadystatechange = function () {
          if(xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            clearTimeout(timeout)
            vm.loading = false
            cb(xmlhttp.responseText)
          }
        }
        xmlhttp.send()
      }
    }
  }
</script>

<style lang="stylus">
  .component-example
    .component-example__panel
      .expansion-panel__body
        border: none

      .tabs__item, .markup
        height: 100%

      .tabs__items
        border: none
        max-height: 500px
        overflow-y: auto

      > li
        border: none

    .justify
      text-align: justify

    nav.toolbar
      z-index: 0

    [data-app]
      min-height: 300px
</style>
