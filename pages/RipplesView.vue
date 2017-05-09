<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Ripples',
          desc: 'The <code>v-ripple</code> directive is used to show action from a user. It can be applied to any block level element. Numerous components come with the ripple directive built in, such as the <code>v-btn</code>, <code>v-tab-item</code> and many more.',
          examples: [
            { header: 'Buttons', file: 'ripples/1' },
            { header: 'Custom color', file: 'ripples/2' },
            { header: 'Tabs', file: 'ripples/3' },
            { header: 'Sidebars', file: 'ripples/4' },
            { header: 'Toolbars', file: 'ripples/5' },
            { header: 'Expansion panels', file: 'ripples/6' }
          ],
          props2: {
            'v-ripple': {
              params: [
                [
                  `{ class: 'class' }`,
                  'Property',
                  '',
                  'Applies a custom class to the ripple, useful for changing color'
                ]
              ]
            }
          }
        }
      }
    }
  }
</script>