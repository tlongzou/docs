<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          component: 'slider',
          edit: 'SliderView',
          title: 'Slider',
          desc: 'The <code>v-slider</code> component is a better visualization of the number input. It is used for gathering numerical user data.',
          examples: [
            { header: 'Continuous', file: 'sliders/1', desc: '' },
            { header: 'Discrete', file: 'sliders/2', desc: '' },
            { header: 'Icons', file: 'sliders/3', desc: 'You can add icons to the slider with the <code>append-icon</code> and <code>prepend-icon</code> props.' },
            { header: 'With an editable numeric value', file: 'sliders/4', desc: '' },
            { header: 'Dark theme', file: 'sliders/5', desc: '' },
          ],
          props: {
            'v-slider': {
              shared: ['input', 'theme'],
              params: [
                [
                  'min',
                  'Number',
                  '0',
                  'Sets minimum value'
                ],
                [
                  'max',
                  'Number',
                  '100',
                  'Sets maximum value'
                ],
                [
                  'thumb-label',
                  'Boolean',
                  'False',
                  'Show thumb label'
                ],
                [
                  'step',
                  'Number',
                  '-',
                  'If greater than 0, sets step interval for ticks'
                ]
              ],
            }
          },
          events: {
            'v-slider': {
              params: [
                [
                  'input',
                  ['Number', 'String'],
                  'Selected value'
                ]
              ]
            }
          }
        }
      }
    },
  }
</script>

<style lang="stylus">
</style>
