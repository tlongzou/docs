<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Grid list',
          component: 'grid-lists',
          edit: 'GridListView',
          desc: 'Soon...',
          examples: [
            { header: 'Grid lists', file: 'grid-lists/1', desc: `` },
            { header: 'Grid lists', file: 'grid-lists/2', desc: `` }
          ]
        }
      }
    }
  }
</script>
