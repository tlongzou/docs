<template>
  <v-app id="e3" style="max-width: 400px; min-height: 0; margin: auto;">
    <v-toolbar class="pink">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">My Music</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid style="min-height: 0;">
        <v-layout column>
          <v-flex xs12>
            <v-card class="blue-grey darken-2 white--text mb-3">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="cyan darken-2 white--text mb-3">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-card-text>
                    <v-card-media src="https://consequenceofsound.files.wordpress.com/2014/01/foster-the-people-e28093-supermodel.png" height="100px"></v-card-media>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
            <v-card class="purple darken-2 white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-card-text>
                     <v-card-media src="https://upload.wikimedia.org/wikipedia/en/f/f1/HalcyonDaysCover.png" height="100px"></v-card-media>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
  </v-app>
</template>
