<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    name: 'parallax-view',

    data () {
      return {
        doc: {
          component: 'parallax',
          edit: 'ParallaxView',
          title: 'Parallax',
          desc: 'The <code>v-parallax</code> component creates a 3d effect that makes an image appear to scroll slower than the window.',
          examples: [
            { header: '', file: 'parallax/1', desc: '' }
          ],
          defaultSlot: true,
          props: [
            {
              prop: 'height',
              type: 'Number',
              default: '500',
              description: 'The height of the parallax container'
            },
            {
              prop: 'src',
              type: 'String',
              default: 'Required',
              description: 'The image to parallax'
            }
          ]
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
          title: 'Parallax Component | Vuetify.js',
          h1: 'Parallax',
          description: 'Parallax component for Vuetify Framework',
          keywords: 'vuetify, parallax, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
