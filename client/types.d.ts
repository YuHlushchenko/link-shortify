// Allows importing *.svg files as React components (via @svgr/webpack / Turbopack SVGR rule)
declare module '*.svg' {
  import type { FC, SVGProps } from 'react'
  const ReactComponent: FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}
