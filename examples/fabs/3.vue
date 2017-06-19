<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card>
          <v-toolbar class="white" extended>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-fab absolute bottom left :hidden="hidden" slot="extension">
              <v-btn class="pink" floating dark small>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5 text-xs-center">
            <v-btn primary @click.native="hidden = !hidden">
              {{ hidden ? 'Show' : 'Hide' }}
            </v-btn>
          </v-card-text>
          <v-card-text style="height: 100px; position: relative">
            <v-fab absolute top right :hidden="hidden">
              <v-btn class="pink" floating dark>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      hidden: false
    })
  }
</script>
