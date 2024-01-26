import { TFolderData,Tree } from "../type";

export const transformData = (data: TFolderData) => {
  return data.map(item => {
    const leaf:Tree = {label: 'default'}
    if (item.folderName) {
      leaf.label = item.folderName
      if (item.children) {
        leaf.children = transformData(item.children)
      }
    } else if (item.fileName) {
        leaf.label = item.fileName
      }
    return leaf
  })
}