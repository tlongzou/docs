<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>

  export default {
    name: 'tabs-view',

    data () {
      return {
        doc: {
          title: 'Tabs',
          desc: 'The <code>v-tabs</code> component is used for hiding content behind a selectable item. This can also be used as a psuedo-navigation for a page, where the tabs are links and the tab-items are the content.',
          examples: [
            { header: 'Mobile tabs', file: 'tabs/1' },
            { header: '', file: 'tabs/2' },
            { header: '', file: 'tabs/3' },
            { header: '', file: 'tabs/4' },
            { header: '', file: 'tabs/5' },
            { header: 'Desktop tabs', file: 'tabs/6' },
            { header: '', file: 'tabs/7' },
          ],
          props2: {
            'v-tabs': {
              params: [
                [
                  'centered',
                  'Boolean',
                  'False',
                  'Centers the tabs'
                ],
                [
                  'grow',
                  'Boolean',
                  'False',
                  'Items fill available space'
                ],
                [
                  'icons',
                  'Boolean',
                  'False',
                  'Applies the tabs--icons class'
                ],
                [
                  'scroll-bars',
                  'Boolean',
                  'False',
                  'Displays scrollbars when content overflows'
                ]
              ],
              model: {
                types: ['String'],
                default: '-',
                description: 'Current selected tab'
              }
            },
            'v-tab-item': {
              params: [
                [
                  'append',
                  'Boolean',
                  'False',
                  'Vue Router router-link prop'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables tab item'
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
                  'Vue Router router-link prop'
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
            },
            'v-tab-content': {
              params: [
                [
                  'id',
                  'String',
                  'Required',
                  'The content id'
                ],
                [
                  'transition',
                  'String',
                  'v-tab-transition',
                  'Sets the default transition'
                ],
                [
                  'reverse-transition',
                  'String',
                  'v-tab-reverse-transition',
                  'Sets the reverse transition'
                ]
              ]
            }
          },
          functional2: {
            'v-tabs': {
              params: [
                [
                  'v-tabs-slider',
                  '.tabs__slider'
                ],
                [
                  'v-tabs-items',
                  '.tabs__items'
                ],
                [
                  'v-tabs-tabs',
                  '.tabs__tabs'
                ],
              ]
            },
          },
          events2: {
            'v-tabs': {
              events: [
                ['input', 'Object', 'Current active tab'],
              ]
            },
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  #components-tabs-view
    .tabs
      margin: 1rem 0
</style>
