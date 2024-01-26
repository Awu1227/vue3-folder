
<template>
  <Folder :data="data" />
</template>

<script setup lang="ts">
import Folder from './components/Folder.vue'
import { TFolderData } from './type';

const data :TFolderData = [
  {
    folderName: 'Files',
    children:[
      {
        folderName: 'src',
        children:[
          {
            folderName:'world',
            children: [
              {
                fileName: 'world.js'
              }
            ]
          },
          {
            fileName: 'main.js'
          }
        ]
      },
      {
        folderName: 'styles',
        children: [{
          fileName: 'main.css'
        }]
      },
    ]
  }
]

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
