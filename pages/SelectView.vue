<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Select',
          desc: 'Select fields components are used for collecting user provided information from a list of options.',
          component: 'select',
          edit: 'SelectView',
          examples: [
            { header: 'Light theme', file: 'selects/1', desc: 'A standard single select has a multitude of configuration options.' },
            { header: 'Dark theme', file: 'selects/2', desc: 'Selects also support themeing, dark and light.' },
            { header: 'Icons', file: 'selects/3', desc: 'Use a custom prepended or appended icon.' },
            { header: 'Multiple', file: 'selects/4', desc: `A multi-select can utilize v-chip as the display for selected items.` },
            { header: 'Scoped slots', file: 'selects/5', desc: `With the power of scoped slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.` },
            { header: 'Customized item text and value', file: 'selects/6', desc: `You can specify the specific properties within your items array correspond to the text and value fields. By default, this is <strong>text</strong> and <strong>value</strong>. In this example we also use the <code>return-object</code> prop which will return the entire object of the selected item on selection.` }
          ],
          props: {
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
                  'Can be an array of objects or array of strings. When using objects, will look for a <strong>text</strong> and <strong>value</strong> field. This can be changed using the <code>item-text</code> and <code>item-value</code> props.'
                ],
                [
                  'item-text',
                  'String',
                  'text',
                  'Set property of <code>items</code> will be displayed on option'
                ],
                [
                  'item-value',
                  'String',
                  'value',
                  'Set property of <code>items</code> define option\'s value'
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
                  'auto',
                  'Boolean',
                  'False',
                  'Centers list on selected element',
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
              params: [
                ['input', 'String', 'Selected value']
              ]
            }
          }
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
