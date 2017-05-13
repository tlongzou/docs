<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          component: 'subheader',
          edit: 'SubheaderView',
          title: 'Subheaders',
          desc: 'The <code>v-subheader</code> component is used to separate sections of lists.',
          examples: [
            { header: 'List subheaders', file: 'subheaders/1' },
            { header: 'Grid subheaders', file: 'subheaders/2' },
            { header: 'Menu subheaders', file: 'subheaders/3' }
          ],
          props: {
            'v-subheader': {
              params: [
                [
                  'inset',
                  'Boolean',
                  'False',
                  'Adds identation (72px)'
                ]
              ]
            }
          }
        }
      }
    }
  }
</script>
