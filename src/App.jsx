import {Routes,Route} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {MainPage} from "./pages/MainPage/MainPage.jsx";
import {UsersPage} from "./pages/UsersPage/UsersPage.jsx";
import {UserPage} from "./pages/UserPage/UserPage.jsx";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='users' element={<UsersPage/>}/>
          <Route path='users/:id' element={<UserPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
