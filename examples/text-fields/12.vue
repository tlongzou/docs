<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col xs12 md8 offset-md2>
        <v-card>
          <v-toolbar class="pink">
            <v-icon class="white--text">arrow_back</v-icon>
            <v-toolbar-title>Compose</v-toolbar-title>
            <v-icon class="white--text">send</v-icon>
          </v-toolbar>
          <v-card-row>
            <v-container fluid class="pa-0">
              <v-layout wrap>
                <v-col xs2>
                  <v-subheader>To</v-subheader>
                </v-col>
                <v-col xs10 class="text-xs-right">
                  <v-chip>
                    <v-avatar>
                      <img src="https://randomuser.me/api/portraits/men/92.jpg" />
                    </v-avatar>
                    Trevor Hansen
                  </v-chip>
                  <v-chip>
                    <v-avatar>
                      <img src="https://randomuser.me/api/portraits/men/91.jpg" />
                    </v-avatar>
                    Alex Nelson
                  </v-chip>
                </v-col>
                <v-col xs12>
                  <v-divider />
                  <v-text-field
                    label="Subject"
                    value="Plans for the weekend"
                    single-line
                    full-width
                    class="mb-0"
                  />
                </v-col>
                <v-col xs12>
                  <v-divider />
                  <v-text-field
                    label="Message"
                    v-model="title"
                    counter
                    max="120"
                    full-width
                    multi-line
                    single-line
                  />
                </v-col>
              </v-layout>
            </v-container>
          </v-card-row>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa'
      }
    }
  }
</script>