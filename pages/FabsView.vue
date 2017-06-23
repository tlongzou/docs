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
            { header: "Promoted action", file: "fabs/1", desc: `Floating action buttons can be attached to material to signify a promoted action in your application. The default size will be used in most cases, whereas the <code>small</code> variant can be used to maintain continuity with similar sized elements.` },
            { header: "Small variant", file: "fabs/2", desc: `For better visual appeal, we use a small button to match our list avatars.` },
            { header: "Display animation", file: "fabs/3", desc: `When displaying for the first time, a floating action button should animate onto the screen. Here we use the <code>v-fab-transition</code> with v-show. You can also use any custom transition provided by Vuetify or your own.` },
            { header: "Lateral screens", file: "fabs/4", desc: `When changing the default action of your button, it is recommended that you display a transition to signify a change. We do this by binding the <code>key</code> prop to a piece of data that can properly signal a change in action to the Vue transition system. While you can use a custom transition for this, ensure that you set the <code>mode</code> prop to <strong>out-in</strong>.` },
            { header: "FAB with speed-dial", file: "fabs/5", desc: `The speed-dial component has an very robust api for customizing your FAB experience exactly how you want.` },
          ],
          props: {
            'speed-dial': {
              model: {
                types: ['Boolean']
              }
            }
          }
        }
      }
    }
  }
</script>
