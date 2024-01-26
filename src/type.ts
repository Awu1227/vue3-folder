export type TFolderData =  {
  folderName?: string,
  fileName?: string
  children?: TFolderData
}[]
export interface Tree {
  label: string
  children?: Tree[]
}