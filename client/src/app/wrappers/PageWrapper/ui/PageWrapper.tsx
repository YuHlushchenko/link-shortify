import { IChildren } from '@/app/types/global'

import { Navbar } from '@/widgets/Navbar'

interface IProps {
  children: IChildren
}

const PageWrapper = ({ children }: Readonly<IProps>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default PageWrapper
