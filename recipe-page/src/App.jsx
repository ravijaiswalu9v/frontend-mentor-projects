import Image from "./components/Image"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutrition from "./components/Nutrition"
import Preparation from "./components/Preparation"

function App() {

  return (
    <>
     <div className="bg-amber-50 w-full min-h-screen p-8">
        <div className="p-6 rounded-2xl bg-white lg:max-w-4xl lg:mx-auto">
          <Image />
          <Preparation />
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
     </div>
    </>
  )
}

export default App
