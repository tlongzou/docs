<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          component: 'steppers',
          edit: 'SteppersView',
          title: 'stepper',
          desc: 'The <code>v-stepper</code> component displays progress through numbered steps.',
          examples: [
            { header: "Example", file: "steppers/1" },
            { header: "Editable steps", file: "steppers/2" },
            { header: "Non-editable steps", file: "steppers/3" },
            { header: "Optional steps", file: "steppers/4" },
            { header: "Horizontal steps", file: "steppers/5" },
            { header: "Vertical steppers", file: "steppers/6" },
            { header: "Linear steppers", file: "steppers/7" },
            { header: "Non-linear steppers", file: "steppers/8" },
            { header: "Alternate labels", file: "steppers/9" },
            { header: "Multi-line error state", file: "steppers/10" },
            { header: "Alternative label multi-line error state", file: "steppers/11" },
            { header: "Vertical multi-line error state", file: "steppers/12" }
          ],
          props: {
            'v-stepper': {
              params: [
                [
                  'alt-labels',
                  'Boolean',
                  'False',
                  'Places the labels beneath the step',
                ],
                [
                  'vertical',
                  'Boolean',
                  'False',
                  'Display steps vertically',
                ],
              ],
              model: {
                type: ['Number', 'String'],
                default: '-',
                description: 'Sets current selected step'
              }
            },
            'v-stepper-step': {
              params: [
                [
                  'completed',
                  'Boolean',
                  'False',
                  'Marks step as completed',
                ],
                [
                  'complete-icon',
                  'String',
                  'check',
                  'Icon to display when step is marked as completed',
                ],
                [
                  'edit-icon',
                  'String',
                  'edit',
                  'Icon to display when step is editable',
                ],
                [
                  'error-icon',
                  'String',
                  'warning',
                  'Icon to display when step has an error',
                ],
                [
                  'editable',
                  'Boolean',
                  'False',
                  'Marks step as editable',
                ],
                [
                  'rules',
                  'Array',
                  '[]',
                  'If any rule is falsy, step will be marked with error',
                ],
                [
                  'step',
                  'Number, String',
                  '-',
                  'Will be displayed inside the step circle',
                ],
              ]
            },
            'v-stepper-content': {
              params: [
                [
                  'step',
                  'Number, String',
                  '-',
                  'Sets step to associate the content to',
                ],
              ]
            }
          },
          functional: {
            'v-stepper': {
              params: [
                [
                  'v-stepper-header',
                  '.stepper__header'
                ],
              ]
            }
          },
          events: {
            'v-stepper': {
              params: [
                ['input', "Number, String", 'Current step'],
              ]
            },
          }
        }
      }
    }
  }
</script>
