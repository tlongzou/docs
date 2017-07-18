<template lang="pug">
  v-app
    v-navigation-drawer(v-model="drawer")
    main
      v-toolbar
        v-toolbar-side-icon(@click="drawer = !drawer")
      v-content
        v-container(fluid fill-height)
          v-layout(align-center justify-center)
            v-flex(xs12)
              v-card(height="200px")
                v-toolbar(flat)
                v-card-text Hello
        v-divider
        v-footer
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    })
  }
</script>