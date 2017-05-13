<template lang="pug">
  v-card.component-parameters
    v-card-title
      v-select(
        label="Component"
        hide-details
        single-line
        v-bind:items="items"
        v-model="component"
        bottom
      )
      v-spacer
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
        component: Object.keys(this.data)[0],
        search: '',
        shared: {
          contextual: this.makeContextual(),
          router: this.makeRouter(),
          default: this.makeSlot(),
          theme: this.makeTheme(),
          input: this.makeInput()
        }
      }
    },

    props: {
      id: String,
      headers: Array,
      data: Object
    },

    computed: {
      items () {
        return Object.keys(this.data)
      },
      table () {
        return this.parseComponent(this.data[this.component])
      }
    },

    methods: {
      parseComponent (c) {
        let params = c.params || []

        c.shared && c.shared.forEach(s => {
          params = params.concat(this.shared[s])
        })

        c.model && params.push(this.makeModel(c.model))

        console.log(params)

        return params.map(d => {
          return {
            prop: `<code>${d[0]}</code>`,
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
      makeContextual () {
        return ['success', 'info', 'warning', 'error'].map(c => {
          return [ c, 'Boolean', 'False', `Applies the ${c} contextual color` ]
        })
      },
      makeTheme () {
        return [
          [
            'dark',
            'Boolean',
            'False',
            'Applies the dark theme (default light)'
          ],
          [
            'light',
            'Boolean',
            'False',
            'Applies the light theme'
          ]
        ]
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
      },
      makeInput () {
        return [
          [
            'append-icon',
            'String',
            '-',
            'Append material icon'
          ],
          [
            'append-icon-cb',
            'Function',
            '-',
            'Callback for appended icon'
          ],
          [
            'prepend-icon',
            'String',
            '-',
            'Prepend material icon'
          ],
          [
            'prepend-icon-cb',
            'Function',
            '-',
            'Callback for prepended icon'
          ],
          [
            'light',
            'Boolean',
            'True',
            'Applies the light theme'
          ],
          [
            'dark',
            'Boolean',
            'False',
            'Applies the dark theme'
          ],
          [
            'disabled',
            'Boolean',
            'False',
            'Disables the input'
          ],
          [
            'hint',
            'String',
            '-',
            'Hint text'
          ],
          [
            'persistent-hint',
            'Boolean',
            'False',
            'Forces hint visible'
          ],
          [
            'label',
            'String',
            '-',
            'Sets input label'
          ],
          [
            'required',
            'Boolean',
            'False',
            'Designates the input as required'
          ],
          [
            'rules',
            'Array',
            '[]',
            "Array of functions that return either True or a String with an error message"
          ],
          [
            'tabindex',
            'Number',
            '0',
            'Tabindex of input'
          ],
          [
            'placholder',
            'String',
            '-',
            'Placeholder text'
          ],
          [
            'hide-details',
            'Boolean',
            'False',
            'Hides hint, validation errors'
          ]
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .component-parameters
    box-shadow: none
    code
      white-space: nowrap
</style>
