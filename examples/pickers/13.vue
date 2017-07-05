<template>
  <v-container fluid>
    <v-layout justify-space-between>
      <v-date-picker
        first-day-of-week="星期日"
        locale="zh-cn"
        v-model="picker"
      ></v-date-picker>
      <v-date-picker
        first-day-of-week="måndag"
        locale="sv-se"
        v-model="picker"
      ></v-date-picker>
      <v-date-picker
        first-day-of-week="lunes"
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
