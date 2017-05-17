<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md12 lg4 lg-offset8>
        <v-date-picker v-model="e8" :allowed-dates="everyOtherDay"></v-date-picker>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e8: null,
        everyOtherDay: function (date) {
          return date.getDay() % 2 == 0
        },
      }
    }
  }
</script>
