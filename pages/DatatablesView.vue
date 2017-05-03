<template lang="pug">
  component-view(v-bind:doc="doc")
    //- component-example(header="Standard" file="tables/1" v-bind:data="$data")
    //- component-example(header="Selectable with header tooltip" file="tables/2" v-bind:data="$data")
    //- component-example(header="Title with actions and editing" file="tables/3" v-bind:data="$data")
    //-   section-text(slot="details") Click the deserve or iron fields in order to edit.
    //- v-expansion-panel(class="mb-5")
    //-   v-expansion-panel-content
    //-     div(slot="header") Example Array
    //-     markup(lang="js" class="mb-0")
    //-       |headers: [
    //-       |  {
    //-       |    text: 'Dessert (100g serving)',
    //-       |    left: true,
    //-       |    sortable: false,
    //-       |    value: 'name'
    //-       |  },
    //-       |  { text: 'Calories', value: 'calories' }
    //-       |],
    //-       |items: [
    //-       |  {
    //-       |    value: false,
    //-       |    name: 'Frozen Yogurt',
    //-       |    calories: 159,
    //-       |    fat: 6.0,
    //-       |    carbs: 24,
    //-       |    protein: 4.0,
    //-       |    sodium: 87,
    //-       |    calcium: '14%',
    //-       |    iron: '1%'
    //-       |  },
    //-       |  {
    //-       |    value: false,
    //-       |    name: 'Ice cream sandwich',
    //-       |    calories: 237,
    //-       |    fat: 9.0,
    //-       |    carbs: 37,
    //-       |    protein: 4.3,
    //-       |    sodium: 129,
    //-       |    calcium: '8%',
    //-       |    iron: '1%'
    //-       |  }
    //-       |]
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
            { header: 'Standard', file: 'tables/1', desc: '' }
          ],
          props2: {
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
                    return ['undefined', 'boolean'].indexOf(typeof val) === -1 &&
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
