<template>
  <div id="app">
  <v-tabs scroll-bars light v-model="current" dark>
    <v-tabs-bar slot="activators">
      <v-tabs-item v-for="tab in tabs" :key="tab.id" :href="'#' + tab.id" @dblclick.native="closeTab(tab)">
        {{ tab.text }}
      </v-tabs-item>
      <v-tabs-slider></v-tabs-slider>
    </v-tabs-bar>
    <v-tabs-content v-for="tab in tabs" :key="tab.id" :id="tab.id">
      <v-card flat>
        <v-card-text>This is {{ tab.text }}</v-card-text>
      </v-card>
    </v-tabs-content>
  </v-tabs>
</div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: ['tab-1', 'tab-2', 'tab-3'],
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    data() {
    return {
      tabs: [
        { id: 'item1', text: 'Item 1' },
        { id: 'item2', text: 'Item 2 blablablabla' },
        { id: 'item3', text: 'Item 3' },
        { id: 'item4', text: 'Item 4' }
      ],
      current: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.tabs = this.tabs.slice(1)
    }, 3000)
  },
  methods: {
    closeTab(tab) {
      const index = this.tabs.indexOf(tab);
      this.tabs.splice(index, 1);
      const nextIndex = Math.min(index, this.tabs.length - 1);
      this.current = this.tabs[nextIndex].id;
    }
  }
  }
</script>
