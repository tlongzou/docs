<template lang="pug">
  doc-view(v-bind:doc="doc" id="subheader-view")
    component-example(header="List subheaders" file="subheaders/1" v-bind:data="$data")
    component-example(header="Grid subheaders" file="subheaders/2" v-bind:data="$data")
    component-example(header="Menu subheaders" file="subheaders/3" v-bind:data="$data")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Subheaders',
          desc: 'The <code>v-subheader</code> component is used to separate sections of lists.',
          examples: [
            { header: 'List subheaders', file: 'subheaders/1' },
            { header: 'Grid subheaders', file: 'subheaders/2' },
            { header: 'Menu subheaders', file: 'subheaders/3' }
          ],
          props2: {
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
