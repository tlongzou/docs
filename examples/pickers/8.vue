<template>
  <v-container fluid>
    <v-layout row>
      <v-col xs12>
        <v-time-picker v-model="e4" landscape dark></v-time-picker>
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
