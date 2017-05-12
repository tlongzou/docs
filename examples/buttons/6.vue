<template>
  <v-card class="elevation-0 py-5">
    <v-card-text>
      <v-container fluid class="pa-0">
        <v-layout row wrap>
          <v-col xs12>
            <p>Normal</p>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon class="pink--text">
              <v-icon light>favorite</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon class="indigo--text">
              <v-icon light>star</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon class="green--text">
              <v-icon light>cached</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon class="deep-orange--text">
              <v-icon light>thumb_up</v-icon>
            </v-btn>
          </v-col>
        </v-layout>
        <v-layout row wrap class="mt-5">
          <v-col xs12>
            <p>Disabled</p>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon disabled light class="pink--text">
              <v-icon>favorite</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon disabled light class="indigo--text">
              <v-icon>star</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon disabled light class="green--text">
              <v-icon>cached</v-icon>
            </v-btn>
          </v-col>
          <v-col xs12 sm3>
            <v-btn icon disabled light class="deep-orange--text">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </v-col>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
