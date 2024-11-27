import { FC, ReactNode } from "react"

interface ContentWrapperProps {
  children: ReactNode
}

export const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return <div>{children}</div>
}
