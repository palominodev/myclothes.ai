import { FooterNavbar } from "./FooterNavbar"
import { Navbar } from "./Navbar"

export const TemplatesBar = ({children}) => {
  return (
    <>
        <Navbar />
        {
            children
        }
        <FooterNavbar />
    </>
  )
}
