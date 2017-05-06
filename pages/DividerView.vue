<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Dvididers',
          desc: 'The <code>v-divider</code> component is used to separate sections of lists.',
          examples: [
            { header: 'Full bleed', file: 'dividers/1' },
            { header: 'Full bleed', file: 'dividers/2' },
            { header: 'Inset dividers', file: 'dividers/3' },
            { header: 'Subheaders and dividers', file: 'dividers/4' },
          ],
          props2: {
            'v-divider': {
              params: [
                [
                  'inset',
                  'Boolean',
                  'False',
                  'Applies a margin-left of 72px'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Changes color for darker backgrounds'
                ]
              ]
            }
          }
        }
      }
    },

    mounted () {
      this.$emit('view', this.meta())
    },

    preFetch () {
      return this.methods.meta()
    },

    methods: {
      meta () {
        return {
          title: 'Divider Component | Vuetify.js',
          h1: 'Dividers',
          description: 'Dividers are used for separating lists of content.',
          keywords: 'vuetify, header, divider'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #subheader-view
    .grid
      max-height: 500px
      overflow-y: auto

    .component-example
      position: relative
      z-index: 1

      .card
        max-width: 400px
        margin: 0 auto

      .image
        width: 100%

    .toolbar
      height: 64px
      min-height: none
</style>
