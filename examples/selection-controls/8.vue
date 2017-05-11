<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col xs12 md6>
        <v-subheader>Light</v-subheader>
        <v-card class="elevation-0">
          <v-card-text>
            <v-switch v-bind:label="`Switch 1: ${ex11.toString()}`" v-model="ex11" light />
            <v-switch v-bind:label="`Switch 2: ${ex12.toString()}`" v-model="ex12" light />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xs12 md6>
        <v-subheader>Dark</v-subheader>
        <v-card class="secondary elevation-0">
          <v-card-text>
            <v-switch v-bind:label="`Switch 3: ${ex13.toString()}`" v-model="ex13" dark />
            <v-switch v-bind:label="`Switch 4: ${ex14.toString()}`" v-model="ex14" dark />
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ex11: true,
        ex12: false,
        ex13: true,
        ex14: false,
      }
    }
  }
</script>
