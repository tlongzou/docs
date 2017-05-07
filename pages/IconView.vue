<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Icons',
          desc: 'The <code>v-icon</code> component provides a large set of glyphs to provide context to various aspects of your application. Vuetify icons utilize Google\'s Material Icons font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons</a> page.',
          examples: [
            { header: 'Standard (small)', file: 'icons/1' },
            { header: 'Medium', file: 'icons/2' },
            { header: 'Large', file: 'icons/3' },
            { header: 'X-Large', file: 'icons/4' },
            { header: 'Color', file: 'icons/5' },
            { header: 'Buttons', file: 'icons/6' }
          ],
          props2: {
            'v-icon': {
              params: [
                [
                  'medium',
                  'Boolean',
                  'False',
                  'Medium size'
                ],
                [
                  'large',
                  'Boolean',
                  'False',
                  'Large size'
                ],
                [
                  'x-large',
                  'Boolean',
                  'False',
                  'Extra-Large size'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Places icon on the left'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Places icon on the right'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme (default dark)'
                ]
              ]
            }
          }
        }
      }
    }
  }
</script>
