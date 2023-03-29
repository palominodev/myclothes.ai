import { FooterNavbar, Navbar } from "./"


export const TemplatesBar = ({children}) => {
  return (
    <>
        <Navbar />
          <main className="p-4 pb-28 pt-20 pr-0">
            {
                children
            }
          </main>
        <FooterNavbar />
    </>
  )
}
