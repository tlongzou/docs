<template>
  <v-tabs id="mobile-tabs-6" scroll-bars light>
    <v-card class="primary white--text">
      <v-card-text>
        <v-card-row>
          <v-btn icon light>
            <v-icon>menu</v-icon>
          </v-btn>
          <v-card-title>Page Title</v-card-title>
          <v-btn icon light>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon light>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-card-row>
      </v-card-text>
    </v-card>
    <v-tab-item
      v-for="i in 13"
      :key="i"
      :href="'#mobile-tabs-6-' + i"
      slot="activators"
    >
      Item {{ i }}
    </v-tab-item>
    <v-tab-content
      v-for="i in 13"
      :key="i"
      :id="'mobile-tabs-6-' + i"
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
