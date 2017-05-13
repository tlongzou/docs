<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col md12 lg4 lg-offset8>
        <v-time-picker v-model="e7" format="24hr"></v-time-picker>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e7: null,
      }
    }
  }
</script>
