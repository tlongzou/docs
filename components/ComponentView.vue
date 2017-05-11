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
      v-layout(row align-horiz-start v-if="api.Props && Object.keys(api.Props).length > 1")
        v-radio(
          v-for="(component, key) in props"
          v-bind:key="key"
          v-bind:value="key"
          v-bind:label="key"
          v-model="currentComponentKey"
          hide-details
          class="ma-1"
        )
      v-tabs(v-model="tabs").elevation-1
        div(slot="activators")
          v-tab-item(href="#props" v-if="props") Props
          v-tab-item(href="#slots" v-if="slots") Slots
          v-tab-item(href="#events" v-if="events") Events
        div(slot="content")
          v-tab-content(
            id="props"
            v-if="api.Props"
            v-for="prop in api.Props"
            v-bind:key="prop"
          )
            param-content(
              v-bind:headers="headers.Props"
              v-bind:data="prop"
            )
          v-tab-content(
            id="slots"
            v-if="api.Slots"
            v-for="prop in api.Slots"
            v-bind:key="prop"
          )
            param-content(
              v-bind:headers="headers.Slots"
              v-bind:data="prop"
            )
          v-tab-content(
            id="events"
            v-if="api.Events"
            v-for="prop in api.Events"
            v-bind:key="prop"
          )
            param-content(
              v-bind:headers="headers.Events"
              v-bind:data="prop"
            )
</template>

<script>
  export default {
    data () {
      return {
        currentComponent: false,
        currentComponentKey: null,
        headers: {
          Props: [{ text: 'Option', value: 'prop', left: true },
          { text: 'Type(s)', value: 'type', left: true },
          { text: 'Default', value: 'default', left: true },
          { text: 'Description', value: 'desc', left: true }],
          Slots: [{ text: 'Name', value: 'name', left: true }, { text: 'Description', value: 'description', left: true }],
          Events: [{ text: 'Name', value: 'name', left: true }, { text: 'Description', value: 'description', left: true }]
        },
        tabs: null
      }
    },

    props: {
      doc: Object
    },

    computed: {
      api () {
        return {
          Props: this.props,
          Slots: false,
          Events: false
        }
      },
      currentTable () {
        return  []
      },
      currentColor () {
        return this.$store.state.currentColor
      },
      props () {
        return this.doc.props
        const props = this.doc.props || false

        if (!props) return props

        // for (let key in props) {
        //   let prop = props[key]

        //   if (prop[0].shared) {
        //     const shared = prop.shift().shared

        //     shared.forEach(s => {
        //       prop = prop.concat(this.shared[s])
        //     })
        //   }

        //   props[key] = prop.map(p => {
        //     return {
        //       prop: p[0],
        //       type: p[1],
        //       default: p[2],
        //       desc: p[3]
        //     }
        //   })
        // }

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
      if (!this.props) return

      const component = Object.keys(this.props)

      if (component.length) {
        this.currentComponent = this.props[component[0]]
        this.currentComponentKey = component[0]
      }
    }
  }
</script>

<style lang="stylus">
  .view
    max-width: 1024px
    padding-bottom: 75px
</style>