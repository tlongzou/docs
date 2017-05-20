<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>

  export default {
    data () {
      return {
        doc: {
          title: 'Navigation drawer',
          desc: `The <code>v-navigation-drawer</code> component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without <strong>vue-router</strong> right out the box.`,
          examples: [
            { header: 'Google keep', file: 'navigation-drawers/1' },
            { header: 'Google contacts', file: 'navigation-drawers/2' }
          ],
          props2: {
            'v-sidebar': {
              params: [
                [
                  'absolute',
                  'Boolean',
                  'False',
                  'Sets the sidebar position to absolute',
                ],
                [
                  'close-on-click',
                  'Boolean',
                  'True',
                  'Designates if sidebar should close on body click',
                ],
                [
                  'drawer',
                  'Boolean',
                  'False',
                  'Default hides sidebar. Will not automatically hide on resize',
                ],
                [
                  'fixed',
                  'Boolean',
                  'False',
                  'Sets the sidebar position to fixed',
                ],
                [
                  'height',
                  'String',
                  `[fixed || drawer ? '100vh' : 'auto']`,
                  'Sets height of the sidebar',
                ],
                [
                  'hide-overlay',
                  'Boolean',
                  'False',
                  'Hide the display of the overlay',
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Changes the sidebar theme to light (default dark)',
                ],
                [
                  'mini',
                  'Boolean',
                  'False',
                  'Condenses sidebar width',
                ],
                [
                  'mobile',
                  'Boolean',
                  'True',
                  'Specifies whether menu should collapse automatically on mobile',
                ],
                [
                  'mobile-break-point',
                  '[Number, String]',
                  '992',
                  'The maximum width in px before sidebar auto-closes',
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Places the sidebar on the right'
                ],
                [
                  'disable-route-watcher',
                  'Boolean',
                  'False',
                  'Disables opening of Sidebar when route changes'
                ],
              ]
            }
          },
          slots: {
            'v-sidebar': {
              default: true
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  #navigation-drawer-view
    .navigation-drawer
      z-index: 0
</style>
