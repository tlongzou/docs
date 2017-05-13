<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col md12 lg4>
        <v-time-picker v-model="e4"></v-time-picker>
      </v-col>
      <v-col md12 lg8>
        <v-time-picker v-model="e4" landscape></v-time-picker>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e4: null,
      }
    }
  }
</script>
