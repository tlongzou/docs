<template>
  <v-tabs id="mobile-tabs-4" grow icons>
    <v-tab-item href="#mobile-tabs-4-1" slot="activators">
      Recents
      <v-icon>phone</v-icon>
    </v-tab-item>
    <v-tab-item href="#mobile-tabs-4-2" slot="activators">
      Favorites
      <v-icon>favorite</v-icon>
    </v-tab-item>
    <v-tab-item href="#mobile-tabs-4-3" slot="activators">
      Nearby
      <v-icon>account_box</v-icon>
    </v-tab-item>
    <v-tab-content
      v-for="i in 3"
      :key="i"
      :id="'mobile-tabs-4-' + i"
      slot="content"
    >
      <v-card>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-content>
  </v-tabs>
</template>

<script>
  export default {
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>