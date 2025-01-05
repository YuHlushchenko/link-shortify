interface ISvgUrl {
  src: string
  height: number
  width: number
  blurWidth: number
  blurHeight: number
}

declare module '*.svg?url' {
  const content: ISvgUrl

  export default content
}

// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//   const content: string

//   export { ReactComponent }
//   export default content
// }
