<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-toolbar class="white">
            <v-toolbar-side-icon></v-toolbar-side-icon>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5"></v-card-text>
          <v-card-text style="height: 100px; position: relative">
            <v-fab absolute top right>
              <v-btn class="pink" floating dark>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card>
          <v-toolbar class="white" extended>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-fab absolute bottom left>
              <v-btn class="pink" floating dark small>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab>
          </v-toolbar>
          <v-card-text style="height: 228px;" class="grey lighten-5"></v-card-text>
          <v-card-text style="height: 100px; position: relative">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
