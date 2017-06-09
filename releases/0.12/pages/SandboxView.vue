<template lang="pug">
  doc-view#sandbox-view
    v-layout(column-xs row-sm)
      v-flex(xs12 sm8 md12)
        section-def
          dt(slot="title") Sandbox
          dd(slot="desc") This page will allow you to configure and play around with the different settings and themes available to you with the Vuetify framework.
      ad
    section
      v-layout
        v-flex(xs12)
          component-example(
            header="Application"
            file="sandbox/1"
          )
</template>

<script>
  export default {
    //
  }
</script>
