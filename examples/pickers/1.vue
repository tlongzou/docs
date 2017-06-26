<template>
<div id="app">
    <v-app id="inspire">
        <v-dialog lazy v-model="outer">
            <v-btn slot="activator">open it</v-btn>
            <v-card>
                <v-card-text>
                    <form>
                        <v-menu lazy>
                          <v-text-field
                                  :rules="errors"
                                  slot="activator"
                                  label="Start Date"
                                  v-model="model.start_date"
                                  prepend-icon="event"
                                  readonly></v-text-field>
                          <v-date-picker v-model="model.start_date" scrollable></v-date-picker>
                      </v-menu>
                    </form>
                </v-card-text>
              <v-card-row actions>
                <v-btn primary flat @click.native="loadSampleError">Submit</v-btn>
                </v-card-row>
            </v-card>
        </v-dialog>
    </v-app>
</div>
</template>

<script>
  export default {
    data () {
      return {
        errors: [],
        outer: false,
        model: {
          start_date: null
        }
      }
    },
    methods: {
      loadSampleError() {
        this.errors = ['This could be a server side error'];
      }
    }
  }
</script>
