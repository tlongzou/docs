<template>
  <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
</template>

<script>
  export default {
    data () {
      return {
        valueDeterminate: 0
      }
    },
    methods: {
      determinate () {
        setInterval(() => {
          if (this.valueDeterminate >= 100) {
            this.valueDeterminate = 0
          } else {
            this.valueDeterminate += 5
          }
        }, 1000)
      }
    },
    mounted () {
      this.determinate()
    }
  }
</script>
