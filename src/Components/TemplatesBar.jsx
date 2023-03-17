import { FooterNavbar, Navbar } from "./"


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
