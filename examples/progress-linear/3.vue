<template>
  <v-progress-linear
    v-model="buffer"
    buffer
    v-bind:buffer-value="bufferValue"
  ></v-progress-linear>
</template>

<script>
  export default {
    data () {
      return {
        value: 0,
        buffer: 10,
        bufferValue: 20
      }
    },
    methods: {
      startBuffer () {
        let int
        let intTwo

        this.$nextTick(() => {
          this.buffer = 10
          this.bufferValue = 50
        })

        setTimeout(() => {
          int = setInterval(() => {
            if (this.bufferValue < 100) {
              this.bufferValue += 5
            }
          }, 700)

          intTwo = setInterval(() => {
            if (this.buffer < 50) {
              this.buffer += Math.random() * (15 - 5) + 5
            } else if (this.bufferValue >= 100) {
              this.buffer = 100
            }

            if (this.buffer === 100) {
              clearInterval(int)
              clearInterval(intTwo)

              setTimeout(() => {
                this.buffer = 0
                this.bufferValue = 0
                this.startBuffer()
              }, 2000)
            }
          }, 1500)
        }, 1000)
      }
    },
    mounted () {
      this.startBuffer()
    }
  }
</script>
