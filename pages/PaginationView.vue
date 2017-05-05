<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    name: 'pagination-view',

    data () {
      return {
        doc: {
          component: 'pagination',
          edit: 'PaginationView',
          title: 'Pagination',
          desc: 'The <code>v-pagination</code> component is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a v-model attribute.',
          examples: [
            { header: 'Short', file: 'pagination/1', desc: '' },
            { header: 'Long', file: 'pagination/2', desc: 'When the number of pages exceeds 6, the component will truncate the list of pages' },
            { header: 'Round', file: 'pagination/3', desc: '' },
            { header: 'Disabled', file: 'pagination/4', desc: '' }
          ],
          shared: ['model'],
          props: [
            {
              prop: 'circle',
              type: 'Boolean',
              default: 'False',
              desc: 'Shape pagination elements as circles',
            },
            {
              prop: 'length',
              type: 'Number',
              default: '0',
              desc: 'The length of the paginator',
            }
          ],
          model: {
            type: 'Number',
            description: 'Current selected page'
          },
          events: [
            {
              event: 'input',
              type: 'Number',
              desc: 'Current page'
            }
          ]
        }
      }
    },
  }
</script>
