<template lang="pug">
  v-app(dark)
    v-toolbar
      v-toolbar-side-icon(@click="drawer = !drawer")
    v-navigation-drawer(v-model="drawer")
    main
      v-content
        v-container(fluid)
          v-layout(align-center justify-center)
            v-flex(xs12)
              v-card(height="2000px")
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

<style lang="stylus" scoped>
  // .application
  //   flex-direction: column
    
  //   main
  //     flex-direction: row
      
  //   .navigation-drawer
  //     height: auto !important
</style>