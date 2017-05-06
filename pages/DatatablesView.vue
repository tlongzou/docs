<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Data tables',
          id: '#data-tables-view',
          desc: `The <code>v-data-table</code> component is used for displaying tabular data. Features include sorting, searching, pagination, inline-editing, header tooltips, and row selection.`,
          examples: [
            { header: 'Standard', file: 'tables/1', desc: '' },
            { header: 'Selectable rows', file: 'tables/2', desc: '' },
            { header: 'Card with actions', file: 'tables/3', desc: '' }
          ],
          props: [
            {
              prop: 'headers',
              type: 'Array',
              default: '[]',
              description: 'The array of headers'
            },
            {
              prop: 'header-text',
              type: 'String',
              default: 'text',
              description: 'If using an object, the text value for the header'
            },
            {
              prop: 'hide-actions',
              type: 'Boolean',
              default: 'False',
              description: 'Hide the table actions'
            },
            {
              prop: 'items',
              type: 'Array',
              default: '[]',
              description: 'The array of table rows'
            },
            {
              prop: 'item-value',
              type: 'String',
              default: 'value',
              description: 'When using a selectable row, used for determining the item value for highlight.'
            },
            {
              prop: 'no-data-text',
              type: 'String',
              default: 'No data available in table',
              description: 'Display text when there is no table data.'
            },
            {
              prop: 'no-results-text',
              type: 'String',
              default: 'No matching records found',
              description: 'Display text when there are no filtered results.'
            },
            {
              prop: 'rows-per-page',
              type: 'Number',
              default: '5',
              description: 'The default rows-per-page to show'
            },
            {
              prop: 'rows-per-page-text',
              type: 'String',
              default: 'Rows per page:',
              description: 'The default rows per page text'
            },
            {
              prop: 'rows-per-page-items',
              type: 'Array',
              default: '[5, 15, 25, { text: "All", value: -1 }]',
              description: 'The default values for the rows-per-page dropdown'
            },
            {
              prop: 'select-all',
              type: 'Boolean',
              default: 'False',
              description: 'Adds header row select all radio.'
            },
            {
              prop: 'search',
              type: 'String',
              default: '',
              description: 'The search model for filtering results'
            },
            {
              prop: 'filter',
              type: 'Function',
              default: `(val, search) => {
                return ['undefined', 'boolean'].indexOf(typeof val) === -1 &&
                  val.toString().toLowerCase().indexOf(search) !== -1
              }`,
              description: 'The filtering method for search'
            }
          ],
          props2: {
            'v-data-table': {
              params: [
                
              ],
              model: {
                types: ['Array'],
                default: 'undefined',
                description: 'Used for mutating the items array when selecting items.'
              }
            },
            'v-edit-dialog': {
              params: [
                [
                  'cancel-text',
                  'String',
                  'Cancel',
                  `Set's the default text for the cancel button when using the <code>large</code> prop`
                ],
                [
                  'save-text',
                  'String',
                  'Save',
                  `Set's the default text for the save button when using the <code>large</code> prop`
                ],
                [
                  'Large',
                  'Boolean',
                  'False',
                  'Attachs a submit and cancel button to the dialog'
                ],
                [
                  'Lazy',
                  'Boolean',
                  'False',
                  'Lazily load the dialog contents'
                ],
                [
                  'transition',
                  'String',
                  'v-slide-x-reverse-transition',
                  'The transition of the edit dialog'
                ]
              ]
            }
          },
          slots: {
            headers: {
              params: [
                [
                  'scope[headers]',
                  'The scoped slot for modifying headers.'
                ]
              ]
            },
            items: {
              params: [
                [
                  'scope[items]',
                  'The scoped slot for templating the row display.'
                ]
              ]
            }
          },
          events: {
            'v-data-table': {
              events: [
                ['input', 'Array', 'Array will contain selected rows'],
              ]
            },
            'v-edit-dialog': {
              events: [
                ['open', '-', 'Edit dialog opened'],
                ['close', '-', 'Edit dialog closed'],
                ['cancel', '-', 'Cancel button was clicked'],
                ['save', '-', 'Save button was clicked'],
              ]
            },
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
      saving () {
        console.log('I saved!')
      },
      meta () {
        return {
          title: 'Data tables | Vuetify.js',
          h1: 'Data tables',
          description: 'The v-data-table component is used for displaying tabular data. Features include sorting, searching, pagination, inline-editing, header tooltips, and row selection.',
          keywords: 'vuetify, components, data tables'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #data-tables-view
    max-width: 1200px
</style>
