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
            { header: 'Standard', file: 'tables/1', desc: 'The standard data-table contains data with no additional functionality.' },
            { header: 'Selectable rows', file: 'tables/2', desc: 'Selectable rows allow you to perform an action on specific and all rows.' },
            { header: 'Card with actions', file: 'tables/3', desc: 'The data-table exposes a <code>search</code> prop that allows you to filter your data. You can also opt in for displaying table actions that allow you to control the pagination of information.' }
          ],
          props: {
            'v-data-table': {
              params: [
                [
                  'headers',
                  'Array',
                  '[]',
                  'The array of headers'
                ],
                [
                  'header-text',
                  'String',
                  'text',
                  'If using an object, the text value for the header'
                ],
                [
                  'hide-actions',
                  'Boolean',
                  'False',
                  'Hide the table actions'
                ],
                [
                  'items',
                  'Array',
                  '[]',
                  'The array of table rows'
                ],
                [
                  'item-value',
                  'String',
                  'value',
                  'When using a selectable row, used for determining the item value for highlight.'
                ],
                [
                  'no-data-text',
                  'String',
                  'No data available in table',
                  'Display text when there is no table data.'
                ],
                [
                  'no-results-text',
                  'String',
                  'No matching records found',
                  'Display text when there are no filtered results.'
                ],
                [
                  'rows-per-page',
                  'Number',
                  '5',
                  'The default rows-per-page to show'
                ],
                [
                  'rows-per-page-text',
                  'String',
                  'Rows per page:',
                  'The default rows per page text'
                ],
                [
                  'rows-per-page-items',
                  'Array',
                  '[5, 15, 25, { text: "All", value: -1 }]',
                  'The default values for the rows-per-page dropdown'
                ],
                [
                  'select-all',
                  'Boolean',
                  'False',
                  'Adds header row select all radio.'
                ],
                [
                  'search',
                  'String',
                  '',
                  'The search model for filtering results'
                ],
                [
                  'filter',
                  'Function',
                  `(val, search) => {
                  defined', 'boolean'].indexOf(typeof val) === -1 &&
                      val.toString().toLowerCase().indexOf(search) !== -1
                  }`,
                  'The filtering method for search'
                ]
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
            'v-data-table': {
              params: [
                [
                  'scope[headers]',
                  'The scoped slot for modifying headers.'
                ],
                [
                  'scope[items]',
                  'The scoped slot for templating the row display.'
                ]
              ]
            }
          },
          events: {
            'v-data-table': {
              params: [
                ['input', 'Array', 'Array will contain selected rows'],
              ]
            },
            'v-edit-dialog': {
              params: [
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
