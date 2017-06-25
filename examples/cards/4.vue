<template>
  <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-system-bar status class="indigo darken-2" dark>
        <v-spacer></v-spacer>
        <v-icon>network_wifi</v-icon>
        <v-icon>signal_cellular_null</v-icon>
        <v-icon>battery_full</v-icon>
        <span>12:30</span>
      </v-system-bar>
      <v-toolbar class="indigo" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Discover</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://s-media-cache-ak0.pinimg.com/736x/10/d7/e2/10d7e21a36b7f0641b178220d2d9c8ad.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'http://az616578.vo.msecnd.net/files/2016/05/30/636001685998824916478671336_o-ROAD-TRIP-facebook.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://images.trvl-media.com/media/content/expus/graphics/launch/flight1320x742.jpg', flex: 6 }
      ]
    })
  }
</script>
