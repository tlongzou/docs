<template>
  <div>
    <v-slider v-model="value1" dark></v-slider>
    <v-slider v-model="value2" dark disabled></v-slider>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
