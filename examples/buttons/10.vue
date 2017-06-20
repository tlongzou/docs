<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <div class="text-xs-center">
          <v-card class="elevation-0">
            <v-card-text>
              <div>
                <v-btn small primary dark>Small Button</v-btn>
              </div>
              <div>
                <v-btn warning dark>Normal Button</v-btn>
              </div>
              <div>
                <v-btn error dark large>Large Button</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
      <v-flex xs12 sm4>
        <div class="text-xs-center">
          <v-card class="elevation-0">
            <v-card-text>
              <div>
                <v-btn primary floating small>
                  <v-icon dark>edit</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn warning floating>
                  <v-icon dark>account_circle</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn error floating large>
                  <v-icon dark>alarm</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
      <v-flex xs12 sm4>
        <div class="text-xs-center">
          <v-card class="elevation-0">
            <v-card-text>
              <div>
                <v-btn icon small>
                  <v-icon primary>edit</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn icon>
                  <v-icon warning>account_circle</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn icon large>
                  <v-icon error>alarm</v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
