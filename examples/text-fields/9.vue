<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-col sm12 md6 class="my-3">
        <v-card>
          <v-app top-toolbar id="example-9-1">
            <v-toolbar>
              <v-btn icon>
                <v-icon class="white--text">arrow_back</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon class="white--text">more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <main>
              <v-container fluid class="px-3">
                <v-layout row wrap>
                  <v-col xs12>
                    <v-text-field
                      label="Title"
                      counter
                      v-model="title"
                      max="50"
                    />
                  </v-col>
                  <v-col xs12>
                    <v-text-field
                      label="Description"
                    />
                  </v-col>
                  <v-col xs12>
                    <v-text-field
                      label="More descriptive text"
                    />
                  </v-col>
                </v-layout>
              </v-container>
            </main>
          </v-app>
        </v-card>
      </v-col>
      <v-col sm12 md6 class="my-3">
        <v-card>
          <v-app top-toolbar id="example-9-2">
            <v-toolbar>
              <v-btn icon>
                <v-icon class="white--text">arrow_back</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon class="white--text">more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <main>
              <v-container fluid class="px-3">
                <v-layout row wrap>
                  <v-col xs12>
                    <v-text-field
                      label="Title"
                      class="input-group--focused"
                      v-model="title2"
                      counter
                      max="50"
                    />
                  </v-col>
                  <v-col xs12>
                    <v-text-field
                      label="Description"
                    />
                  </v-col>
                  <v-col xs12>
                    <v-text-field
                      label="More descriptive text"
                    />
                  </v-col>
                </v-layout>
              </v-container>
            </main>
          </v-app>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Preliminary report describing the',
        title2: 'Preliminary report describing the state of California'
      }
    }
  }
</script>