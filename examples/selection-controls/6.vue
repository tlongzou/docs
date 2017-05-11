<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col xs12 md6>
        <v-subheader>Light</v-subheader>
        <v-card class="elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap class="dark--text">
                <v-col xs6>on</v-col>
                <v-col xs6>off</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-radio value="radio-1" input-value="radio-1" light />
                </v-col>
                <v-col xs6>
                  <v-radio input-value="radio-2" light />
                </v-col>
              </v-layout>
              <v-layout row wrap class="dark--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-radio value="radio-3" input-value="radio-3"  light disabled />
                </v-col>
                <v-col xs6>
                  <v-radio input-value="radio-4" light disabled />
                </v-col>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs12 md6>
        <v-subheader>Dark</v-subheader>
        <v-card class="secondary elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap class="light--text">
                <v-col xs6>on</v-col>
                <v-col xs6>off</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-radio value="radio-5" input-value="radio-5" dark />
                </v-col>
                <v-col xs6>
                  <v-radio input-value="radio-6" dark />
                </v-col>
              </v-layout>
              <v-layout row wrap class="light--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-radio value="radio-7" input-value="radio-7"  dark disabled />
                </v-col>
                <v-col xs6>
                  <v-radio input-value="radio-8" dark disabled />
                </v-col>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>
