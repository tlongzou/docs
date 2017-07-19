<template>
<div id="app">
  <v-app id="inspire">
    <v-select :items="items" 
              v-model="selectedItems" 
              multiple 
              label="Select">
    </v-select>
    {{ selectedItems }}
  </v-app>
</div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { text: 'Item 1', value: { foo: 'item', bar: 2 } },
        { text: 'Item 2', value: { foo: 'test', bar: 42 } },
        { text: 'Item 3', value: { foo: 'foobar', bar: 4 } }
      ],
      selectedItems: []
    })
  }
</script>