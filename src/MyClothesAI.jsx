import { MyClothesProvider } from "./context/MyClothesProvider"
import { MyClothesRoutes } from "./Router/MyClothesRoutes"

export const MyClothesAI = () => {
  return (
    <MyClothesProvider>
        <MyClothesRoutes />
    </MyClothesProvider>
  )
}
