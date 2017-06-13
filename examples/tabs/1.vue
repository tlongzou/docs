<template>
  <v-tabs
    id="mobile-tabs-1"
    fixed
    scroll-bars
    v-model="active"
    dark
  >
    <v-toolbar class="cyan" dark>
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
    <v-tabs-bar slot="activators" class="cyan">
      <v-tabs-item
        v-for="i in 3"
        :key="i"
        :href="'#mobile-tabs-1-' + i"
        ripple
      >
        Item {{ i }}
      </v-tabs-item>
      <v-tabs-slider class="yellow"></v-tabs-slider>
    </v-tabs-bar>
    <v-tabs-content
      v-for="i in 3"
      :key="i"
      :id="'mobile-tabs-1-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
