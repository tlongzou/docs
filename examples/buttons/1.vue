<template>
  <v-container fluid class="text-xs-center">
    <v-layout row wrap>
      <v-col xs12 sm6><span>Light Theme</span>
        <v-card height="300px" class="elevation-0">
          <v-card-text>
            <div>
              <v-btn light flat>Normal</v-btn>
            </div>
            <div>
              <v-btn light flat class="btn--light-flat-focused">Focused</v-btn>
            </div>
            <div>
              <v-btn light flat class="btn--light-flat-pressed">Pressed</v-btn>
            </div>
            <div>
              <v-btn light flat disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs12 sm6><span>Dark Theme</span>
        <v-card height="300px" class="secondary elevation-0">
          <v-card-text>
            <div>
              <v-btn flat dark>Normal</v-btn>
            </div>
            <div>
              <v-btn flat dark class="btn--dark-flat-focused">Focused</v-btn>
            </div>
            <div>
              <v-btn flat dark class="btn--dark-flat-pressed">Pressed</v-btn>
            </div>
            <div>
              <v-btn flat dark disabled>Disabled</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_colors'
  @import '../../node_modules/vuetify/src/stylus/settings/_variables'

  .btn--light-flat-focused:after
    background-color: $button-light-overlay

  .btn--light-flat-pressed:after
    background-color: rgba(#000, .3)

  .btn--dark-flat-focused:after
    background-color: $button-dark-overlay

  .btn--dark-flat-pressed:after
    background-color: rgba(#fff, .3)
</style>
