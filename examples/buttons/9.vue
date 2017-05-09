<template>
  <div class="text-xs-center">
    <v-btn
      secondary
      v-bind:loading="loading"
      v-on:click.native="loader = 'loading'"
      v-bind:disabled="loading"
    >
      Accept Terms
    </v-btn>

    <v-btn
      v-bind:loading="loading3"
      v-on:click.native="loader = 'loading3'"
      v-bind:disabled="loading3"
      class="blue-grey"
    >
      Upload
      <v-icon right>cloud_upload</v-icon>
    </v-btn>

    <v-btn
      success
      v-bind:loading="loading2"
      v-on:click.native="loader = 'loading2'"
      v-bind:disabled="loading2"
    >
      Custom Loader
      <span slot="loader">Loading...</span>
    </v-btn>

    <v-btn
      info
      v-bind:loading="loading4"
      v-on:click.native="loader = 'loading4'"
      v-bind:disabled="loading4"
    >
      Icon Loader
      <span slot="loader" class="custom-loader">
        <v-icon>cached</v-icon>
      </span>
    </v-btn>
  </div>
</template>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 30000)

        this.loader = null
      }
    },
  }
</script>
