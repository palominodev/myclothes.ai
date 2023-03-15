import { OutfitCard } from "./OutfitCard"

export const OutfitSection = ({title}) => {
  return (
    <section className="mb-4 last:mb-0">
        <h2 className="font-black text-2xl uppercase">{title}</h2>
        <section className="flex gap-4 overflow-x-auto">
            <OutfitCard />
            <OutfitCard />
            <OutfitCard />
            <OutfitCard />
            <OutfitCard />
        </section>
    </section>
  )
}
