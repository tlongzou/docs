<template>
  <v-container fluid>
    <v-layout justify-space-between>
      <v-date-picker
        :first-day-of-week="0"
        locale="zh-cn"
        v-model="picker"
      ></v-date-picker>
      <v-date-picker
        :first-day-of-week="1"
        locale="sv-se"
        v-model="picker"
      ></v-date-picker>
      <v-date-picker
        :first-day-of-week="1"
        locale="es-sp"
        v-model="picker"
      ></v-date-picker>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        picker: null
      }
    }
  }
</script>
