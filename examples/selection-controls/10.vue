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
                  <v-switch value="true" input-value="true"  light />
                </v-col>
                <v-col xs6>
                  <v-switch light />
                </v-col>
              </v-layout>
              <v-layout row wrap class="dark--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-switch value="true" input-value="true" light disabled />
                </v-col>
                <v-col xs6>
                  <v-switch light disabled />
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
                  <v-switch value="true" input-value="true" dark />
                </v-col>
                <v-col xs6>
                  <v-switch dark />
                </v-col>
              </v-layout>
              <v-layout row wrap class="light--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-switch value="true" input-value="true" dark disabled />
                </v-col>
                <v-col xs6>
                  <v-switch dark disabled />
                </v-col>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>
