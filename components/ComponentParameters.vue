<template lang="pug">
  v-card.component-parameters
    v-card-title
      v-select(
        label="Component"
        hide-details
        single-line
        v-bind:items="items"
        v-model="component"
        auto
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
      v-bind:items="table"
      hide-actions
    )
      template(slot="items" scope="{ item }")
          td(v-for="opt in item" v-bind:key="opt" v-html="opt")
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
          input: this.makeInput(),
          overlay: this.makeOverlay(),
          detachable: this.makeDetach(),
          positionable: this.makePosition(),
          transitionable: this.makeTransition(),
          colorable: this.makeColorable()
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
        let params = (c.params || []).slice()

        c.shared && c.shared.forEach(s => {
          params = params.concat(this.shared[s])
        })

        c.model && params.push(this.makeModel(c.model))

        return params.map(d => {
          return {
            prop: `<code>${d[0]}</code>`,
            type: d[1],
            default: d[2],
            desc: d[3]
          }
        })
      },
      makeDetach () {
        return [[
          'content-class', 'String', '-', 'Applies a custom class to the detached element. This is useful because the content is moved to the end of the app and is not targettable by classes passed directly on the component.'
        ]]
      },
      makePosition () {
        return [
          ['absolute', 'Boolean', 'False', 'Position the component absolutely.'],
          ['bottom', 'Boolean', 'False', 'Align the component towards the bottom.'],
          ['fixed', 'Boolean', 'False', 'Position the component fixed.'],
          ['right', 'Boolean', 'False', 'Align the component towards the right.'],
          ['left', 'Boolean', 'False', 'Align the component towards the left.'],
          ['top', 'Boolean', 'False', 'Align the component towards the top.'],
        ]
      },
      makeSlot () {
        return [[
          'default',
          'Default Vue slot'
        ]]
      },
      makeTransition () {
        return [
          ['mode', 'String', '-', 'Sets the transition mode (does not apply to transition-group)'],
          ['origin', 'String', '-', 'Sets the transition origin'],
          ['transition', 'String', '-', 'Sets the component transition. Can be one of the built in transitions or your own.']
        ]
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
        return ['primary', 'secondary', 'success', 'info', 'warning', 'error'].map(c => {
          return [ c, 'Boolean', 'False', `Applies the ${c} contextual color` ]
        })
      },
      makeTheme () {
        return [
          [
            'dark',
            'Boolean',
            'True',
            'Applies a dark tint to the content - light themes'
          ],
          [
            'light',
            'Boolean',
            'False',
            'Applies a light tint to the content - dark themes'
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
            'exact',
            'Boolean',
            'False',
            'Exactly match the link. Without this, "/" will match every route'
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
            'target',
            'String',
            '-',
            'Specify the target attribute, only works with anchor tag.'
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
            'ripple',
            'Boolean',
            'False',
            'Applies ripple effect'
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
            'error',
            'Boolean',
            'False',
            'Puts the input in an error state'
          ],
          [
            'error-messages',
            'Array',
            '[]',
            'Puts the input in an error state and passes through custom error messsages. Will be combined with any validations that occur from the <code>rules</code> prop. This field will not trigger validation.'
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
            'Applies a light tint to the content - dark themes'
          ],
          [
            'dark',
            'Boolean',
            'False',
            'Applies a dark tint to the content - light themes'
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
      },
      makeOverlay () {
        return [
          [
            'hide-overlay',
            'Boolean',
            'False',
            'Hide the display of the overlay'
          ]
        ]
      },
      makeColorable () {
        return [
          [
            'color',
            'String',
            '-',
            'Applies specified color to the control'
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
