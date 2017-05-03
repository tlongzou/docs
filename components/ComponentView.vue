<template lang="pug">
  div.view(v-bind:id="doc.id")
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
      v-tab-item(
        href="#props"
        slot="activators"
      ) Props
      v-tab-content(
        slot="content"
        id="props"
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
              v-model="props"
            )
          v-data-table(
            v-bind:headers="headers"
            v-model="doc.props"
            v-bind:search="props"
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
        props: '',
        slots: '',
        events: '',
        headers: [
          { text: 'Option', value: 'option', left: true },
          { text: 'Type(s)', value: 'type', left: true },
          { text: 'Default', value: 'default', left: true },
          { text: 'Description', value: 'description', left: true }
        ]
      }
    },

    props: {
      doc: Object
    },

    computed: {
      currentColor () {
        return this.$store.state.currentColor
      }
    }
  }
</script>