<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>

  export default {
    data () {
      return {
        doc: {
          title: 'Toolbar',
          component: 'toolbar',
          edit: 'ToolbarsView',
          desc: 'The <code>v-toolbar</code> component is pivotol to any gui, as it generally is the primary source of site navigation. The toolbar component works great in cojunction with a sidebar for hiding links and presenting an activator to open the sidebar on mobile.',
          examples: [
            { header: 'Default', file: 'toolbar/1', desc: 'A toolbar is a flexible container that can be utilized in a number of ways. By default, the toolbar is 64px high on desktop, 56px high on mobile portrait and 48px high on mobile landscape. These can be overwritten using the <code>dense</code> and <code>prominent</code> props.' },
            { header: 'App bar', file: 'toolbar/2', desc: 'An App bar is the primary toolbar of your application. It can contain icons, menus and more.' },
            { header: 'App bar with extension', file: 'toolbar/3', desc: 'Menu dropdowns can be used within a toolbar to provide more space for actionable items.' },
            { header: 'Column width with hierarchy', file: 'toolbar/4', desc: 'Toolbars and be placed anywhere and can represent different sets of actions.' },
            { header: 'Flexible toolbar and card toolbar', file: 'toolbar/5', desc: 'With a few custom styles, you can easily create your own custom interfaces.' },
            { header: 'Floating with search', file: 'toolbar/6', desc: 'A floating toolbar can be placed over the content that it references.' },
            { header: 'Floating with search', file: 'toolbar/7', desc: 'A floating toolbar can be placed over the content that it references.' },
            { header: 'Variations', file: 'toolbar/8', desc: 'An app-bar has multiple variations that can be applied with themes and helper classes. These range from light and dark themes, colored and transparent.' },
            { header: 'Prominent toolbars', file: 'toolbar/9', desc: 'Prominent toolbars add a slot where you can placed elements in the extended area. The content and extension areas will be locked to 64px in height.' },
            { header: 'Dense toolbars', file: 'toolbar/10', desc: 'Dense toolbars reduce their height to 48px. This is also the default behavior for mobile landscape orientation.' },
            { header: 'Dense prominent toolbars', file: 'toolbar/11', desc: 'You can combine both the prominent and dense to extend a smaller variant of the toolbar.' },
            { header: 'App bar with menu', file: 'toolbar/12', desc: 'You can combine both the prominent and dense' },
            { header: 'System bars - status/window', file: 'toolbar/13', desc: 'System bars are useful for notification icons on mobile and desktop.' }
          ],
          props: {
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
              shared: ['router'],
              params: [
                [
                  'activeClass',
                  'String',
                  'toolbar__item--active',
                  'Class to apply for the active toolbar item'
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
              shared: ['default']
            },
            'v-toolbar-item': {
              shared: ['default']
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
