<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card>
          <v-toolbar light>
            <v-toolbar-side-icon></v-toolbar-side-icon>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5"></v-card-text>
          <v-card-text style="height: 100px; position: relative">
            <v-fab absolute primary top="-34" right="16">
              <v-icon>add</v-icon>
            </v-fab>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
