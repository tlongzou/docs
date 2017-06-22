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

    <v-speed-dial v-model="fab" fling bottom right direction="top" hover>
      <v-scale-transition
        mode="out-in"
        origin="center center"
        slot="activator"
      >
        <v-btn
          :class="[activeFab.class]"
          dark
          fab
          hover
          v-model="fab"
          
          :key="activeFab.icon"
        >
          <v-icon>{{ activeFab.icon }}</v-icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </v-scale-transition>
      <v-btn
        fab
        dark
        small
        class="green"
        v-for="n in 3"
        :key="n"
      >
        <v-icon>list</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      fab: false,
      tabs: null
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'indigo', icon: 'account_circle' }
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
  #inspire .speed-dial {
    position: absolute;
  }
</style>
