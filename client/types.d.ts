declare module '*.svg?url' {
  const content: string

  export default content
}

// declare module '*.svg' {
//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
//   const content: string

//   export { ReactComponent }
//   export default content
// }
