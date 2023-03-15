import { FooterNavbar } from "../Components/FooterNavbar"
import { Navbar } from "../Components/Navbar"
import { OutfitSection } from "../Components/OutfitSection"
import { TemplatesBar } from "../Components/TemplatesBar"

export const MainPage = () => {
  return (
    <TemplatesBar>
        <main className="p-4 pb-28 pt-20 pr-0">
            <OutfitSection title={'Favoritos'} />
            <OutfitSection title={'Destacados'} />
            <OutfitSection title={'Verano'} />
        </main>
    </TemplatesBar>
  )
}
