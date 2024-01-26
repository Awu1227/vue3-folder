<template>
  <div>
    folder
  </div>
  <el-tree :data="computedData" :props="defaultProps" @node-click="handleNodeClick" icon="Folder"   draggable/>

</template>

<script lang="ts" setup>
import {computed} from 'vue';
import {type TFolderData,type Tree} from '../type';
import {transformData} from '../utils/index';

type config = {
  data: TFolderData
}

const props = defineProps<config>()

const computedData = computed(() => {
  return transformData(props.data)
})
console.log('data',computedData.value);

const handleNodeClick = (data: Tree) => {
  console.log(data)
}


const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>

<style lang="scss" scoped>

</style>