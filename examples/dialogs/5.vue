<template>
  <v-layout row align-horiz-center>
    <v-dialog v-model="dialog" scrollable>
      <v-btn primary dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-row height="300px">
          <v-card-text>
            <v-radio label="Bahamas, The" v-model="dialogm1" value="bahamas" light></v-radio>
            <v-radio label="Bahrain" v-model="dialogm1" value="bahrain" light></v-radio>
            <v-radio label="Bangladesh" v-model="dialogm1" value="bangladesh" light></v-radio>
            <v-radio label="Barbados" v-model="dialogm1" value="barbados" light></v-radio>
            <v-radio label="Belarus" v-model="dialogm1" value="belarus" light></v-radio>
            <v-radio label="Belgium" v-model="dialogm1" value="belgium" light></v-radio>
            <v-radio label="Belize" v-model="dialogm1" value="belize" light></v-radio>
            <v-radio label="Benin" v-model="dialogm1" value="benin" light></v-radio>
            <v-radio label="Bhutan" v-model="dialogm1" value="bhutan" light></v-radio>
            <v-radio label="Bolivia" v-model="dialogm1" value="bolivia" light></v-radio>
            <v-radio label="Bosnia and Herzegovina" v-model="dialogm1" value="bosnia" light></v-radio>
            <v-radio label="Botswana" v-model="dialogm1" value="botswana" light></v-radio>
            <v-radio label="Brazil" v-model="dialogm1" value="brazil" light></v-radio>
            <v-radio label="Brunei" v-model="dialogm1" value="brunei" light></v-radio>
            <v-radio label="Bulgaria" v-model="dialogm1" value="bulgaria" light></v-radio>
            <v-radio label="Burkina Faso" v-model="dialogm1" value="burkina" light></v-radio>
            <v-radio label="Burma" v-model="dialogm1" value="burma" light></v-radio>
            <v-radio label="Burundi" v-model="dialogm1" value="burundi" light></v-radio>
          </v-card-text>
        </v-card-row>
        <v-divider></v-divider>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false
      }
    }
  }
</script>