import path from 'path'

export const getLambdaPath = (fileName: string): string => {
  return path.resolve(__dirname, '..', 'lambda', fileName)
}
