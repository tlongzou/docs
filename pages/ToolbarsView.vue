<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>

  export default {
    data () {
      return {
        doc: {
          title: 'Toolbar',
          desc: 'The <code>v-toolbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The toolbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          examples: [
            { header: 'With icons', file: 'toolbar/1' },
            { header: 'With items', file: 'toolbar/2' },
            { header: 'With dropdown', file: 'toolbar/3' },
            { header: '', file: 'toolbar/4' },
            { header: 'Transparent', file: 'toolbar/5' },
            { header: 'With search', file: 'toolbar/6' }
          ],
          props2: {
            'v-toolbar': {
              params: [
                [
                  'fixed',
                  'Boolean',
                  'false',
                  'Fixes the toolbar to the top'
                ]
              ]
            },
            'v-toolbar-item': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router prop. Appends the relative path to the current path'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables the item'
                ],
                [
                  'href',
                  'String, Object',
                  'javascript:;',
                  'For router, this is passed to the "to" prop'
                ],
                [
                  'nuxt',
                  'Boolean',
                  'False',
                  'Specifies the link is a nuxt-link'
                ],
                [
                  'replace',
                  'Boolean',
                  'False',
                  'Vue Router prop. Will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record'
                ],
                [
                  'router',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will be a router-link'
                ],
                [
                  'ripple',
                  'Boolean',
                  'False',
                  'Designates whether the list tiles will attach the ripple directive'
                ],
                [
                  'tag',
                  'String',
                  'a',
                  'Use a custom tag for the list tile'
                ]
              ]
            }
          },
          functional: {
            'v-toolbar': {
              params: [
                [
                  'v-toolbar-items',
                  '.toolbar__items'
                ],
                [
                  'v-toolbar-logo',
                  '.toolbar__logo'
                ],
                [
                  'v-toolbar-title',
                  '.toolbar__title'
                ],
                [
                  'v-toolbar-side-icon',
                  '.toolbar__side-icon'
                ]
              ]
            }
          },
          slots: {
            'v-toolbar': {
              default: true
            },
            'v-toolbar-item': {
              default: true
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
          title: 'Toolbar Component | Vuetify.js',
          h1: 'Toolbars',
          description: 'Toolbar component for Vuetify Framework',
          keywords: 'vuetify, toolbars, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #toolbar
    .component-example
      position: relative
      z-index: 1

    .toolbar
      height: 64px !important
      margin: 1rem 0

  #toolbar-image
    height: 300px
    width: 100%

    .toolbar
      margin: 0
</style>
