import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Listcategories from "./components/categories/Listcategories"
import Insertarticles from "./components/articles/Insertarticles"
import Editarticle from "./components/articles/Editarticle"
import Viewarticle from "./components/articles/Viewarticle"
import Listscategories from "./components/scategories/Listscategories"
import Insertcategorie from "./components/categories/Insertcategorie"
import Editcategorie from "./components/categories/Editcategorie"
import Viewcategories from "./components/categories/Viewcategories"
import Insertscategorie from "./components/scategories/Insertscategorie"
import Editscategorie from "./components/scategories/Editscategorie"
import Viewscategorie from "./components/scategories/Viewscategorie"
import Listarticles from "./components/articles/Listarticles"
import Menu from "./components/Menu"
function App() {
  

  return (
    <>
     <Router>
      <Menu/>
      <Routes>
      <Route path="/articles" element={<Listarticles/>}/>
<Route path="/articles/add" element={<Insertarticles/>}/>
<Route path="/article/edit/:id" element={<Editarticle/>}/>
<Route path="/article/view/:id" element={<Viewarticle/>}/>
<Route path="/categories" element={<Listcategories/>}/>
<Route path="/categories/add" element={<Insertcategorie/>}/>
<Route path="/categories/edit/:id" element={<Editcategorie/>}/>
<Route path="/categories/view/:id" element={<Viewcategories/>}/>
<Route path="/scategories" element={<Listscategories/>}/>
<Route path="/scategories/add" element={<Insertscategorie/>}/>
<Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
<Route path="/scategories/view/:id" element={<Viewscategorie/>}/>


      </Routes>
     </Router>
       
    </>
  )
}

export default App
