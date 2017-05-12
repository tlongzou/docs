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
      v-tabs(v-model="tabs").elevation-1
        template(slot="activators")
          v-tab-item(
            v-for="p in ['props', 'slots', 'events', 'functional']"
            v-show="doc[p]"
            v-bind:href="`#${p}`"
            v-bind:key="p"
          ) {{ p }}
        div(slot="content")
          v-tab-content(
            v-for="p in ['props', 'slots', 'events', 'functional']"
            v-if="doc[p]"
            v-bind:id="p"
            v-bind:key="p"
          )
            component-parameters(
              v-bind:headers="headers[p]"
              v-bind:data="doc[p]"
            )
</template>

<script>
  export default {
    data () {
      return {
        current: {
          props: null,
          slots: null,
          events: null,
          functional: null
        },
        headers: {
          props: [
            { text: 'Component', value: 'key', left: true },
            { text: 'Option', value: 'prop', left: true },
            { text: 'Type(s)', value: 'type', left: true },
            { text: 'Default', value: 'default', left: true },
            { text: 'Description', value: 'desc', left: true }
          ],
          slots: [
            { text: 'Component', value: 'key', left: true },
            { text: 'Name', value: 'name', left: true },
            { text: 'Description', value: 'description', left: true }
          ],
          events: [
            { text: 'Component', value: 'key', left: true },
            { text: 'Name', value: 'name', left: true },
            { text: 'Description', value: 'description', left: true }
          ],
          functional: [
            { text: 'Component', value: 'key', left: true },
            { text: 'Name', value: 'name', left: true },
            { text: 'Description', value: 'description', left: true }
          ]
        },
        tabs: null
      }
    },

    props: {
      doc: Object
    },

    computed: {
      currentColor () {
        return this.$store.state.currentColor
      }
    },

    mounted () {
      if (this.doc.props) {
        const props = Object.keys(this.doc.props)

        if (props.length) {
          this.current.props = props[0]
          this.currentComponentKey = props[0]
        }
      }

      if (this.doc.slots) {
        const slots = Object.keys(this.doc.slots)

        if (slots.length) this.current.slots = slots[0]
      }

      if (this.doc.events) {
        const events = Object.keys(this.doc.events)

        if (events.length) this.current.events = events[0]
      }

      if (this.doc.functional) {
        const functional = Object.keys(this.doc.functional)

        if (functional.length) this.current.functional = functional[0]
      }
    }
  }
</script>

<style lang="stylus">
  .view
    max-width: 1024px
    padding-bottom: 75px
</style>