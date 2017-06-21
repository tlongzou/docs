<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    name: 'fabs-view',

    data () {
      return {
        doc: {
          component: 'buttons',
          edit: 'FabsView',
          title: 'Buttons: Floating Action Button',
          desc: `
            <p>
              The <code>v-btn</code> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Remember that all event captures must be done using the <strong>.native</strong> modifier.
            </p>
          `,
          examples: [
            { header: "Default", file: "fabs/1", desc: `` },
            { header: "Default", file: "fabs/2", desc: `` },
            { header: "Default", file: "fabs/3", desc: `` },
            // { header: "Default", file: "fabs/4", desc: `` },
            // { header: "Default", file: "fabs/5", desc: `` },
          ]
        }
      }
    }
  }
</script>
