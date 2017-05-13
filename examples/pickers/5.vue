<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col md12 lg4>
        <v-time-picker v-model="e5" dark></v-time-picker>
      </v-col>
      <v-col md12 lg8>
        <v-time-picker v-model="e5" landscape dark></v-time-picker>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e5: null,
      }
    }
  }
</script>
