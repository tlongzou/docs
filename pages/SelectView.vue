<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      let srcs = {
        1: '/public/doc-images/lists/1.jpg',
        2: '/public/doc-images/lists/2.jpg',
        3: '/public/doc-images/lists/3.jpg',
        4: '/public/doc-images/lists/4.jpg',
        5: '/public/doc-images/lists/5.jpg'
      }
      return {
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        people: [
          { header: 'Group 1'},
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { divider: true },
          { header: 'Group 2'},
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] }
        ],
        states: [
          'Alabama','Alaska','American Samoa','Arizona',
          'Arkansas','California','Colorado','Connecticut',
          'Delaware','District of Columbia','Federated States of Micronesia',
          'Florida','Georgia','Guam','Hawaii','Idaho',
          'Illinois','Indiana','Iowa','Kansas','Kentucky',
          'Louisiana','Maine','Marshall Islands','Maryland',
          'Massachusetts','Michigan','Minnesota','Mississippi',
          'Missouri','Montana','Nebraska','Nevada',
          'New Hampshire','New Jersey','New Mexico','New York',
          'North Carolina','North Dakota','Northern Mariana Islands','Ohio',
          'Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico',
          'Rhode Island','South Carolina','South Dakota','Tennessee',
          'Texas','Utah','Vermont','Virgin Island','Virginia',
          'Washington','West Virginia','Wisconsin','Wyoming'
        ],
        doc: {
          title: 'Select',
          desc: 'Select fields components are used for collecting user provided information from a list of options.',
          examples: [
            { header: 'Standard select', file: 'selects/1', desc: 'Light theme' },
            { header: 'Standard select', file: 'selects/2', desc: 'Dark theme' },
            { header: 'Multiple', file: 'selects/3', desc: `A multi-select can utilize v-chip as the display for selected items.` },
            { header: 'Scoped slots', file: 'selects/4', desc: `With the power of scoped slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.` }
          ],
          props2: {
            'v-select': {
              params: [
                [
                  'chips',
                  'Boolean',
                  'False',
                  'Changes display of selections to chips'
                ],
                [
                  'items',
                  'Array',
                  '[]',
                  'The array of items. Item object is required to have a <code>text</code> property'
                ],
                [
                  'max-height',
                  'Number, String',
                  '200',
                  'Sets the maximum height for the select menu'
                ],
                [
                  'multiple',
                  'Boolean',
                  'False',
                  'Changes select to multiple. Accepts array for v-model'
                ],
                [
                  'single-line',
                  'Boolean',
                  'False',
                  'Removes floating label'
                ],
                [
                  'light',
                  'Boolean',
                  'True',
                  'Applies the light theme'
                ],
                [
                  'dark',
                  'Boolean',
                  'False',
                  'Applies the dark theme'
                ],
                [
                  'disabled',
                  'Boolean',
                  'False',
                  'Disables input'
                ],
                [
                  'hint',
                  'String',
                  '-',
                  'Sets hint text'
                ],
                [
                  'persistent-hint',
                  'Boolean',
                  'False',
                  'Forces hint visible'
                ],
                [
                  'label',
                  'String',
                  '-',
                  'Sets select label'
                ],
                [
                  'append-icon',
                  'String',
                  'arrow_drop_down',
                  'Changes the dropdown icon'
                ],
                [
                  'prepend-icon',
                  'String',
                  '-',
                  'Prepend an icon to the select'
                ],
                [
                  'required',
                  'Boolean',
                  'False',
                  'Designates the input as required'
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  "Array of functions that return either True or a String with an error message"
                ],
              ],
              model: {
                types: ['Array', 'Object'],
                default: '-',
                description: 'Single select requires model, multiple requires array'
              }
            }
          },
          events: {
            'v-select': {
              events: [
                ['input', 'String', 'Selected value'],
              ]
            },
          }
        },
        input: null,
        multiple: ['1', '2'],
        options: [
          {
            value: 1,
            text: 'Option 1'
          },
          {
            value: 2,
            text: 'Option 2'
          },
          {
            value: 3,
            text: 'Option 3'
          }
        ],
        text: null,
        errors: ['Username or Password is incorrect']
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
          title: 'Select Component | Vuetify.js',
          h1: 'Selects',
          description: 'Select component for Vuetify Framework',
          keywords: 'vuetify, selects, directives'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #forms-view
    .with
      min-height: 0

    main
      min-height: 0
      padding-left: 0

    .toolbar
      max-height: 64px

    .component-example__container
      justify-content: space-between
      flex-wrap: wrap

      > div > *
        margin: 2rem 0
        flex: 1 0 100%
</style>
