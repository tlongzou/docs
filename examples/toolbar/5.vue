<template>
  <div id="toolbar-image">
    <v-toolbar class="transparent elevation-0">
      <v-toolbar-logo class="hidden-sm-and-down">Toolbar</v-toolbar-logo>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-toolbar-item v-for="item in items">
          {{ item.text }}
        </v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Send Feedback' },
          { title: 'Request Help' },
          { title: 'Contact Developer' }
        ]
      }
    }
  }
</script>