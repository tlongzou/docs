<template lang="pug">
  v-card
    v-card-title
      v-layout(row nowrap grow)
      v-spacer
      v-text-field(
        append-icon="search"
        label="Search..."
        single-line
        hide-details
        v-model="search"
      )
    v-data-table(
      v-bind:headers="headers"
      v-bind:search="search"
      v-model="table"
      hide-actions
    )
      template(slot="items" scope="props")
        template(v-for="prop in props")
          td(v-for="opt in prop" v-bind:key="opt") {{ opt }}
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        shared: {
          contextual: this.makeContextual(),
          model: this.makeModel(),
          router: this.makeRouter()
        }
      }
    },

    props: {
      id: String,
      headers: Array,
      data: Object
    },

    computed: {
      table () {
        let params = this.data.params

        if (this.data.shared) {
          this.data.shared.forEach(s => {
            params = params.concat(this.shared[s])
          })
        }

        return params.map(d => {
          return {
            prop: d[0],
            type: d[1],
            default: d[2],
            desc: d[3]
          }
        })
      }
    },

    methods: {
      makeModel () {
        const model = this.data.model || false

        if (!model) return false

        return [[
          'v-model',
          Array.isArray(model.type) ? model.type.join(', ') : model.type,
          model.default || '-',
          model.description ? model.description : 'Controls visibility'
        ]]
      },
      makeRouter () {
        return [[
          'router',
          'Boolean',
          false,
          `Supported through <code>href</code> or <code>to</code> props. Has access to all <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">vue-router</a> and <a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank">nuxt</a> router properties.`
        ]]
      },
      makeContextual () {
        return ['success', 'info', 'warning', 'error'].map(c => {
          return [ c, 'Boolean', 'False', `Applies the ${c} contextual color` ]
        })
      }
    }
  }
</script>