<template>
  <v-card class="elevation-0 py-5">
    <v-card-text>
      <v-container fluid class="pa-0">
        <v-layout row wrap>
          <v-flex xs12>
            <p>Normal</p>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon>
              <v-icon class="pink--text">favorite</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon>
              <v-icon class="indigo--text">star</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon>
              <v-icon class="green--text">cached</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon>
              <v-icon class="deep-orange--text">thumb_up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-5">
          <v-flex xs12>
            <p>Disabled</p>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon disabled>
              <v-icon>favorite</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon disabled>
              <v-icon>star</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon disabled>
              <v-icon>cached</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm3>
            <v-btn icon disabled>
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
