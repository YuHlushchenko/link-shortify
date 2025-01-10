/* eslint-disable @next/next/no-img-element */
const NextImage = ({
  src,
  alt,
  // ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={src}
      alt={alt}
      // {...props} //! some props from Next.js Image component are not supported in vanilla <img> tag
    />
  )
}

export default NextImage
