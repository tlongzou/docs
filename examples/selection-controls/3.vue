<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col xs12 md6>
        <v-subheader>Light</v-subheader>
        <v-card class="elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap class="dark--text">
                <v-col xs4>on</v-col>
                <v-col xs4>off</v-col>
                <v-col xs4>indeterminate</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs4>
                  <v-checkbox input-value="true" value="true" light />
                </v-col>
                <v-col xs4>
                  <v-checkbox value="" light />
                </v-col>
                <v-col xs4>
                  <v-checkbox value="" indeterminate light />
                </v-col>
              </v-layout>
              <v-layout row wrap class="dark--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-checkbox input-value="true" value="true" light disabled />
                </v-col>
                <v-col xs6>
                  <v-checkbox value="" light disabled />
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
                <v-col xs4>on</v-col>
                <v-col xs4>off</v-col>
                <v-col xs4>indeterminate</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs4>
                  <v-checkbox input-value="true" value="true" dark />
                </v-col>
                <v-col xs4>
                  <v-checkbox value="" dark />
                </v-col>
                <v-col xs4>
                  <v-checkbox value="" indeterminate dark />
                </v-col>
              </v-layout>
              <v-layout row wrap class="light--text">
                <v-col xs6>on disabled</v-col>
                <v-col xs6>off disabled</v-col>
              </v-layout>
              <v-layout row wrap>
                <v-col xs6>
                  <v-checkbox input-value="true" value="true" dark disabled />
                </v-col>
                <v-col xs6>
                  <v-checkbox value="" dark disabled />
                </v-col>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>
