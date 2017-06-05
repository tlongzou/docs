<template>
  <v-app
    id="sandbox"
    :dark="dark"
    :light="!dark"
  >
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :permanent="primaryDrawer.permanent"
      :persistent="primaryDrawer.persistent"
      :temporary="primaryDrawer.temporary"
      :clipped="primaryDrawer.clipped"
      absolute
    ></v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs8>
            <v-card>
              <v-card-text style="height: 300px;"></v-card-text>
              <v-card-row actions>
                <v-btn flat>Cancel</v-btn>
                <v-btn flat primary>Submit</v-btn>
              </v-card-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dark: false,
      primaryDrawer: {
        model: true,
        permanent: false,
        persistent: true,
        temporary: false,
        clipped: false
      }
    })
  }
</script>

<style>
  #sandbox {
    border: 1px solid rgba(0, 0, 0, .1);
    overflow: hidden;
  }
  #sandbox .container, #sandbox {
    min-height: 700px;
  }
</style>
