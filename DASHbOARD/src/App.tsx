import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./router/mainRouter"
import { store } from "./global/store"
import {Provider} from "react-redux"

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={mainRoute} />
      </Provider>
    </div>
  )
}

export default App