/* eslint-disable @next/next/no-img-element */
const NextImage = ({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <img src={src} alt={alt} {...props} />
}

export default NextImage
