<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        test: [],
        test2: false,
        doc: {
          title: 'Selection controls',
          component: 'selectioncontrols',
          edit: 'SelectionControlsView',
          desc: 'Selection control components allow a user to select options. These components <strong>must</strong> be used with the <code>v-model</code> prop as they do not maintain their own state.',
          examples: [
            { header: "Checkboxes - Boolean", file: "selection-controls/1", desc: '' },
            { header: "Checkboxes - Array", file: "selection-controls/2", desc: '' },
            { header: "Checkboxes - States", file: "selection-controls/3", desc: '' },
            { header: "Checkboxes - Contextual", file: "selection-controls/4", desc: '' },
            { header: "Radios - Default", file: "selection-controls/5", desc: '' },
            { header: "Radios - States", file: "selection-controls/6", desc: '' },
            { header: "Radios - Contextual", file: "selection-controls/7", desc: '' },
            { header: "Switches - Boolean", file: "selection-controls/8", desc: '' },
            { header: "Switches - Array", file: "selection-controls/9", desc: '' },
            { header: "Switches - States", file: "selection-controls/10", desc: '' },
            { header: "Switches - Contextual", file: "selection-controls/11", desc: '' },
          ],
          props: {
            'all': {
              params: [
                [
                  'append-icon',
                  'String',
                  '-',
                  'Append material icon'
                ],
                [
                  'prepend-icon',
                  'String',
                  '-',
                  'Prepend material icon'
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
                  'Disables the input'
                ],
                [
                  'label',
                  'String',
                  '-',
                  'Sets input label'
                ],
                [
                  'hint',
                  'String',
                  '-',
                  'Hint text'
                ],
                [
                  'persistent-hint',
                  'Boolean',
                  'False',
                  'Forces hint visible'
                ],
                [
                  'required',
                  'Boolean',
                  'False',
                  'Designates the input as required'
                ],
                [
                  'rules' ,
                  'Array',
                  '[]',
                  "Array of functions that return either True or a String with an error message"
                ],
                [
                  'primary',
                  'Boolean',
                  'False',
                  'Sets input context to "primary"'
                ],
                [
                  'secondary',
                  'Boolean',
                  'False',
                  'Sets input context to "secondary"'
                ],
                [
                  'success',
                  'Boolean',
                  'False',
                  'Sets input context to "success"'
                ],
                [
                  'info',
                  'Boolean',
                  'False',
                  'Sets input context to "info"'
                ],
                [
                  'warning',
                  'Boolean',
                  'False',
                  'Sets input context to "warning"'
                ],
                [
                  'error',
                  'Boolean',
                  'False',
                  'Sets input context to "error"'
                ],
              ],
            },
            'v-checkbox': {
              params: [
                [
                  'input-value',
                  'Array, Boolean, String',
                  '-',
                  'Sets possible input values'
                ],
                [
                  'true-value',
                  'String',
                  '-',
                  'Sets value for truthy state'
                ],
                [
                  'false-value',
                  'String',
                  '-',
                  'Sets value for falsy state'
                ],
                [
                  'indeterminate',
                  'Boolean',
                  'False',
                  'Sets an indeterminate state for the checkbox'
                ],
              ],
              model: {
                type: '*',
                default: 'None',
                description: 'Current input value'
              }
            },
            'v-radio': {
              params: [
                [
                  'input-value',
                  'String, Number',
                  '-',
                  'Sets the radio current input value'
                ]
              ],
              model: {
                type: '*',
                default: 'None',
                description: 'Current radio value'
              }
            },
            'v-switch': {
              params: [
                [
                  'input-value',
                  'Array, Boolean, String',
                  '-',
                  'Sets possible input values'
                ],
                [
                  'true-value',
                  'String',
                  '-',
                  'Sets value for truthy state'
                ],
                [
                  'false-value',
                  'String',
                  '-',
                  'Sets value for falsy state'
                ],
              ],
              model: {
                type: '*',
                default: 'None',
                description: 'Current switch value'
              }
            }
          },
          events: {
            'v-radio': {
              events: [
                ['change', 'String, Number', 'Input value changed.']
              ]
            },
          }
        }
      }
    },
  }
</script>

<style lang="stylus">
 #selection-controls-view
   .component-example
      table
        tr
          border-bottom: none !important
          height: 75px

          &:hover
            background: transparent !important

        td, th
          text-align: center

        td
          .input-group
            justify-content: center
</style>
