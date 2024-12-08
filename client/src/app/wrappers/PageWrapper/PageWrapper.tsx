import { IChildren } from '@/app/types/global'

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
      {/* <Footer /> */}
    </>
  )
}

export default PageWrapper
