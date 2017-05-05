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
          props: [
            {
              prop: 'append-icon',
              type: 'String',
              default: '-',
              desc: 'Append material icon'
            },
            {
              prop: 'prepend-icon',
              type: 'String',
              default: '-',
              desc: 'Prepend material icon'
            },
            {
              prop: 'light',
              type: 'Boolean',
              default: 'True',
              desc: 'Applies the light theme'
            },
            {
              prop: 'dark',
              type: 'Boolean',
              default: 'False',
              desc: 'Applies the dark theme'
            },
            {
              prop: 'disabled',
              type: 'Boolean',
              default: 'False',
              desc: 'Disables the checkbox'
            },
            {
              prop: 'hint',
              type: 'String',
              default: '-',
              desc: 'Hint text'
            },
            {
              prop: 'persistent-hint',
              type: 'Boolean',
              default: 'False',
              desc: 'Forces hint visible'
            },
            {
              prop: 'label',
              type: 'String',
              default: '-',
              desc: 'Adds label to slider'
            },
            {
              prop: 'min',
              type: 'Number',
              default: '0',
              desc: 'Sets minimum value'
            },
            {
              prop: 'max',
              type: 'Number',
              default: '100',
              desc: 'Sets maximum value'
            },
            {
              prop: 'required',
              type: 'Boolean',
              default: 'False',
              desc: 'Designates the input as required'
            },
            {
              prop: 'rules',
              type: 'Array',
              default: '[]',
              desc: "Array of cb fn's that return either True or a String with an error message"
            },
            {
              prop: 'thumb-label',
              type: 'Boolean',
              default: 'False',
              desc: 'Show thumb label'
            },
            {
              prop: 'step',
              type: 'Number',
              default: '-',
              desc: 'If greater than 0, sets step interval for ticks'
            }
          ],
          events: [
            {
              event: 'input',
              type: ['Number', 'String'],
              desc: 'Selected value'
            },
          ]
        }
      }
    },
  }
</script>

<style lang="stylus">
</style>
