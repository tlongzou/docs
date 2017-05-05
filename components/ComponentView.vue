<template lang="pug">
  div.view(v-bind:id="`${doc.title.toLowerCase()}-view`")
    section-def(v-bind:doc="doc")
      dt(slot="title" v-text="doc.title")
      dd(slot="desc" v-html="doc.desc")
      v-divider
      v-card-row(actions)
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
    section-header.mt-5 API
    v-tabs.elevation-1
      template(v-for="(a, i) in ['Props', 'Slots', 'Events']" v-if="model[a].length")
        v-tab-item(
          v-bind:href="`#${a}`"
          slot="activators"
          v-bind:key="`${i}-act`"
        ) {{ a }}
        v-tab-content(
          slot="content"
          v-bind:id="a"
          v-bind:key="`${i}-con`"
        )
          v-card
            v-card-title
              v-spacer
              v-spacer
              v-text-field(
                append-icon="search"
                label="Search..."
                single-line
                hide-details
                v-model="propsSearch"
              )
            v-data-table(
              v-bind:headers="headers[a]"
              v-model="model[a]"
              v-bind:search="propsSearch"
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
        propsSearch: '',
        headers: {
          Props: [{ text: 'Option', value: 'option', left: true },
          { text: 'Type(s)', value: 'type', left: true },
          { text: 'Default', value: 'default', left: true },
          { text: 'Description', value: 'description', left: true }],
          Slots: [{ text: 'Name', value: 'name', left: true }, { text: 'Description', value: 'description', left: true }],
          Events: []
        },
        model: {
          Props: [],
          Slots: [],
          Events: []
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
      props () {
        let props = Array.isArray(this.doc.props) ? this.doc.props : []

        if (this.doc.shared) this.doc.shared.forEach(i => props = props.concat(this.shared[i]))

        return props
      },
      slots () {
        let slots = []

        if (this.doc.defaultSlot) {
          slots.push({
            prop: 'default',
            description: 'Default vue slot'
          })
        }

        return slots
      },
      events () {
        return []
      },
      currentColor () {
        return this.$store.state.currentColor
      }
    },

    mounted () {
      this.model.Props = this.props
      this.model.Slots = this.slots
      this.model.Events = this.events
    },

    methods: {
      makeModel () {
        const model = this.doc.model || false

        if (!model) return false

        return {
          prop: 'v-model',
          type: model.type.length > 1 ? model.types.join(', ') : model.type,
          default: model.default || '-',
          description: model.description ? model.description : 'Controls visibility'
        }
      },
      makeRouter () {
        return {
          prop: 'router',
          type: 'Boolean',
          default: false,
          description: `Supported through <code>href</code> or <code>to</code> props. Has access to all <a href="https://router.vuejs.org/en/api/router-link.html" target="_blank">vue-router</a> and <a href="https://nuxtjs.org/api/components-nuxt-link" target="_blank">nuxt</a> router properties.`
        }
      },
      makeContextual () {
        return ['success', 'info', 'warning', 'error'].map(c => {
          return { prop: c, type: 'Boolean', default: 'False', description: `Applies the ${c} contextual color` }
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