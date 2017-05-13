<template>
  <v-layout row>
    <v-col xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="white--text indigo">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Inbox</v-toolbar-title>
          <v-btn icon>
             <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-item v-for="item in items" v-bind:key="item.title">
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon v-if="item.icon" class="pink--text">star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" />
              </v-list-tile-content>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar" />
              </v-list-tile-avatar>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner', avatar: '/public/doc-images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: '/public/doc-images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: '/public/doc-images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: '/public/doc-images/lists/4.jpg' },
        ]
      }
    }
  }
</script>