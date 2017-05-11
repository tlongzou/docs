<template lang="pug">
  v-card.component-parameters
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
          td(v-for="opt in prop" v-bind:key="opt" v-html="opt")
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        shared: {
          contextual: this.makeContextual(),
          router: this.makeRouter(),
          default: this.makeSlot()
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
        let params = []

        for (let key in this.data) {
          params = params.concat(this.parseComponent(this.data[key], key))
        }

        return params
      }
    },

    methods: {
      parseComponent (c, key) {
        let params = c.params || []

        c.shared && c.shared.forEach(s => {
          params = params.concat(this.shared[s])
        })

        c.model && params.push(this.makeModel(c.model))

        return params.map(d => {
          return {
            key: `<code>${key}</code>`,
            prop: d[0],
            type: d[1],
            default: d[2],
            desc: d[3]
          }
        })
      },
      makeSlot () {
        return [[
          'default',
          'Default Vue slot'
        ]]
      },
      makeModel (model) {
        if (!model) return false

        return [
          'v-model',
          Array.isArray(model.type) ? model.type.join(', ') : model.type,
          model.default || '-',
          model.description ? model.description : 'Controls visibility'
        ]
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
      },
      makeRouter () {
        return [
          [
            'append',
            'Boolean',
            'False',
            'Vue Router router-link prop'
          ],
          [
            'disabled',
            'Boolean',
            'False',
            'List tile is disabled'
          ],
          [
            'href',
            'String, Object',
            'javascript:;',
            'For router, this is passed to the "to" prop'
          ],
          [
            'to',
            'String, Object',
            'javascript:;',
            'For router, this is passed to the "to" prop'
          ],
          [
            'nuxt',
            'Boolean',
            'False',
            'Specifies the link is a nuxt-link'
          ],
          [
            'replace',
            'Boolean',
            'False',
            'Vue Router router-link prop'
          ],
          [
            'router',
            'Boolean',
            'False',
            'Designates whether the list tiles will be a router-link'
          ],
          [
            'tag',
            'String',
            'a',
            'Use a custom tag for the list tile'
          ]
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .component-parameters code
    white-space: nowrap
</style>