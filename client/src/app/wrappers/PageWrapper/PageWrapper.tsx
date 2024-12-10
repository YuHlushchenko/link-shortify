import { IChildren } from '@/app/types/global'
// import { ErrorPage } from '@/pages/error'

// import { Footer } from '@/widgets/Footer'
import { Navbar } from '@/widgets/Navbar'

interface IProps {
  children: IChildren
}

const PageWrapper = ({ children }: Readonly<IProps>) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <ErrorPage /> */}
      {/* <Footer /> */}
    </>
  )
}

export default PageWrapper
