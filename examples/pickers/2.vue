<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col md12 lg4>
        <v-date-picker v-model="e2" actions dark></v-date-picker>
      </v-col>
      <v-col md12 lg8>
        <v-date-picker v-model="e2" actions landscape dark></v-date-picker>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e2: null,
      }
    }
  }
</script>
