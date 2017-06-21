<template>
  <v-app id="inspire">
    <v-tabs grow v-model="tabs">
      <v-toolbar class="grey lighten-4" light>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-tabs-bar slot="activators" class="grey lighten-4">
        <v-tabs-item href="#one">Item One</v-tabs-item>
        <v-tabs-item href="#two">Item Two</v-tabs-item>
        <v-tabs-item href="#three">Item Three</v-tabs-item>
        <v-tabs-slider></v-tabs-slider>
      </v-tabs-bar>
      <v-tabs-content 
        v-for="content in ['one', 'two', 'three']"
        :key="content"
        :id="content"
      >
        <v-card height="200px" flat></v-card>
      </v-tabs-content>
    </v-tabs>
    <v-fab
      bottom
      right
      hover
    >
      <v-btn
        slot="activator"
        :class="[activeFab.class]"
        dark
      >
        <v-icon>{{ activeFab.icon }}</v-icon>
      </v-btn>
      <v-btn class="green" small dark>
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn class="red" small dark>
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      hidden: false,
      tabs: null
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'indigo', icon: 'add' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    }
  }
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #inspire .fab {
    position: absolute;
  }
</style>
