<template lang="pug">
  div.view(v-bind:id="`${doc.title.toLowerCase()}-view`")
    section-def(v-bind:doc="doc")
      dt(slot="title" v-text="doc.title")
      dd(slot="desc" v-html="doc.desc")
      v-divider
      v-card-row(actions)
        div.do-not-remove-this
          v-btn(
            tag="a"
            v-bind:href="'https://github.com/vuetifyjs/vuetify/tree/master/src/components/'+doc.component"
            target="_blank"
            icon
            light
            v-tooltip:right="{ html: 'View component' }"
            v-if="doc.component"
            v-bind:class="[`${currentColor}--text`]"
          )
            v-icon widgets
        v-btn(
          tag="a"
          v-bind:href="'https://github.com/vuetifyjs/docs/tree/master/src/views/'+doc.edit+'.vue'"
          target="_blank"
          icon
          light
          v-tooltip:right="{ html: 'Edit this page' }"
          v-if="doc.edit"
          v-bind:class="[`${currentColor}--text`]"
        )
          v-icon edit
        v-spacer
        v-btn(
          flat
          tag="a"
          href="#api"
          v-bind:class="[`${currentColor}--text`]"
        ) Go to api
    section-header Examples
    component-example(
      v-for="(example, i) in doc.examples"
      v-bind:key="example"
      v-bind:header="`#${i + 1} ${example.header}`"
      v-bind:file="example.file"
    )
      div(slot="desc" v-html="example.desc" v-if="example.desc")
    slot
    template(v-if="doc.props")
      section-header.mt-5 API
      div(v-if="api.Props && Object.keys(api.Props).length > 1")
        v-radio(
          v-for="(component, key) in props"
          v-bind:key="key"
          v-bind:value="key"
          v-bind:label="key"
        )
      v-tabs.elevation-1
        template(v-for="(a, i) in api" v-if="a")
          v-tab-item(
            v-bind:href="`#${i}`"
            slot="activators"
            v-bind:key="`${i}-act`"
          ) {{ i }}
          v-tab-content(
            slot="content"
            v-bind:id="i"
            v-bind:key="`${i}-con`"
          )
            v-card
              v-card-title
                v-layout(row nowrap grow)
                v-spacer
                v-text-field(
                  append-icon="search"
                  label="Search..."
                  single-line
                  hide-details
                  v-model="propsSearch"
                )
              v-data-table(
                v-bind:headers="headers[i]"
                v-bind:search="propsSearch"
                v-model="currentTable"
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
        currentComponent: false,
        propsSearch: '',
        headers: {
          Props: [{ text: 'Option', value: 'prop', left: true },
          { text: 'Type(s)', value: 'type', left: true },
          { text: 'Default', value: 'default', left: true },
          { text: 'Description', value: 'desc', left: true }],
          Slots: [{ text: 'Name', value: 'name', left: true }, { text: 'Description', value: 'description', left: true }],
          Events: [{ text: 'Name', value: 'name', left: true }, { text: 'Description', value: 'description', left: true }]
        },
        api: {
          Props: {},
          Slots: {},
          Events: {}
        },
        shared: {
          contextual: this.makeContextual(),
          model: this.makeModel(),
          router: this.makeRouter()
        }
      }
    },

    props: {
      doc: Object
    },

    computed: {
      currentTable () {
        return this.currentComponent || []
      },
      currentColor () {
        return this.$store.state.currentColor
      },
      props () {
        const props = this.doc.props || false

        if (!props) return props

        for (let key in props) {
          let prop = props[key]

          if (prop[0].shared) {
            const shared = prop.shift().shared

            shared.forEach(s => {
              prop = prop.concat(this.shared[s])
            })
          }

          props[key] = prop.map(p => {
            return {
              prop: p[0],
              type: p[1],
              default: p[2],
              desc: p[3]
            }
          })
        }

        return props
      },
      slots () {
        return this.doc.slots || false
      },
      events () {
        return this.doc.events || false
      }
    },

    mounted () {
      this.api.Props = this.props
      this.api.Slots = this.slots
      this.api.Events = this.events

      if (!this.props) return

      const component = Object.keys(this.props)

      if (component.length) {
        this.currentComponent = this.props[component[0]]
      }
    },

    methods: {
      makeModel () {
        const model = this.doc.model || false

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

<style lang="stylus">
  .view
    max-width: 1024px
    padding-bottom: 75px
</style>