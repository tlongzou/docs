<template>
  <v-container fluid class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12 sm6><span>Light Theme</span>
        <v-card height="225px" class="elevation-0 white">
          <v-card-text>
            <div>
              <v-btn flat>Normal</v-btn>
            </div>
            <div>
              <v-btn flat class="btn--dark-flat-focused">Focused</v-btn>
            </div>
            <div>
              <v-btn flat class="btn--dark-flat-pressed">Pressed</v-btn>
            </div>
            <div>
              <v-btn flat disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6><span>Dark Theme</span>
        <v-card height="225px" class="secondary elevation-0">
          <v-card-text>
            <div>
              <v-btn flat dark>Normal</v-btn>
            </div>
            <div>
              <v-btn flat dark class="btn--light-flat-focused">Focused</v-btn>
            </div>
            <div>
              <v-btn flat dark class="btn--light-flat-pressed">Pressed</v-btn>
            </div>
            <div>
              <v-btn flat dark disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
