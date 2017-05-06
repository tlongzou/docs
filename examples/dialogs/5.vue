<template>
  <v-dialog v-model="dialog" scrollable>
    <v-btn primary dark slot="activator">Open Dialog</v-btn>
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-row height="300px">
        <v-card-text>
          <v-radio label="Bahamas, The" primary v-model="dialogm1" value="bahamas" light></v-radio>
          <v-radio label="Bahrain" primary v-model="dialogm1" value="bahrain" light></v-radio>
          <v-radio label="Bangladesh" primary v-model="dialogm1" value="bangladesh" light></v-radio>
          <v-radio label="Barbados" primary v-model="dialogm1" value="barbados" light></v-radio>
          <v-radio label="Belarus" primary v-model="dialogm1" value="belarus" light></v-radio>
          <v-radio label="Belgium" primary v-model="dialogm1" value="belgium" light></v-radio>
          <v-radio label="Belize" primary v-model="dialogm1" value="belize" light></v-radio>
          <v-radio label="Benin" primary v-model="dialogm1" value="benin" light></v-radio>
          <v-radio label="Bhutan" primary v-model="dialogm1" value="bhutan" light></v-radio>
          <v-radio label="Bolivia" primary v-model="dialogm1" value="bolivia" light></v-radio>
          <v-radio label="Bosnia and Herzegovina" primary v-model="dialogm1" value="bosnia" light></v-radio>
          <v-radio label="Botswana" primary v-model="dialogm1" value="botswana" light></v-radio>
          <v-radio label="Brazil" primary v-model="dialogm1" value="brazil" light></v-radio>
          <v-radio label="Brunei" primary v-model="dialogm1" value="brunei" light></v-radio>
          <v-radio label="Bulgaria" primary v-model="dialogm1" value="bulgaria" light></v-radio>
          <v-radio label="Burkina Faso" primary v-model="dialogm1" value="burkina" light></v-radio>
          <v-radio label="Burma" primary v-model="dialogm1" value="burma" light></v-radio>
          <v-radio label="Burundi" primary v-model="dialogm1" value="burundi" light></v-radio>
        </v-card-text>
      </v-card-row>
      <v-divider></v-divider>
      <v-card-row actions>
        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
      </v-card-row>
    </v-card>
  </v-dialog>
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