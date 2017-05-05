<template>
  <div>
    <v-slider v-model="value" dark></v-slider>
    <v-slider v-model="value" dark disabled></v-slider>
  </div>
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