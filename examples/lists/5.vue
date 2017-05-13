<template>
  <v-layout row>
    <v-col xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar class="teal">
          <v-toolbar-side-icon class="grey--text text--darken-4" />
          <v-toolbar-title class="text-xs-center">New Chat</v-toolbar-title>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-item v-for="item in items" v-bind:key="item.title">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" />
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon v-bind:class="[item.active ? 'teal--text' : 'grey--text']">chat_bubble</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list subheader>
          <v-subheader>Previous chats</v-subheader>
          <v-list-item v-for="item in items2" v-bind:key="item.title">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" />
              </v-list-tile-content>
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
          { active: true, title: 'Jason Oner', avatar: '/public/doc-images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: '/public/doc-images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: '/public/doc-images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: '/public/doc-images/lists/4.jpg' },
        ],
        items2: [
          { title: 'Travis Howard', avatar: '/public/doc-images/lists/5.jpg' },
        ]
      }
    }
  }
</script>