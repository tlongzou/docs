<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Chip',
          desc: `The <code>v-chip</code> component is used to convey small pieces of information. Using the <code>close</code> property, the chip becomes interactive, allowing user interaction.`,
          examples: [
            { header: 'Default', file: 'chips/1' },
            { header: 'Colored', file: 'chips/2' },
            { header: 'Icon', file: 'chips/3' },
            { header: 'Outline', file: 'chips/4' },
            { header: 'Label', file: 'chips/5' },
            { header: 'Closable', file: 'chips/6' },
          ],
          props2: {
            'v-chip': {
              params: [
                [
                  'close',
                  'Boolean',
                  'False',
                  'Adds remove button'
                ],
                [
                  'label',
                  'Boolean',
                  'False',
                  'Applies the chip--label class'
                ],
                [
                  'outline',
                  'Boolean',
                  'False',
                  'Applies the chip--outline class'
                ],
                [
                  'small',
                  'Boolean',
                  'False',
                  'Applies the chip--small class'
                ]
              ],
              model: {
                types: ['Boolean'],
                default: 'True'
              }
            }
          },
          slots: {
            'v-chip': {
              default: true
            }
          },
          events: {
            'v-chip': {
              events: [
                ['input', 'Boolean: False', "Chip was closed. Requires 'close' prop."]
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
      meta () {
        return {
          title: 'Chip Component | Vuetify.js',
          h1: 'Chips',
          description: 'Chip component for Vuetify Framework',
          keywords: 'vuetify, chips, components'
        }
      }
    }
  }
</script>

<style lang="stylus">
  #chips-view
    .component-example__container > div
      text-align: center

    .chip
      margin: 1rem
</style>
