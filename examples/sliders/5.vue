<template>
  <v-card class="secondary">
    <v-card-text>
      <v-slider v-model="value" dark></v-slider>
      <v-slider value="50" dark disabled></v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>
