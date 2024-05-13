import { Route, Routes } from "react-router-dom"

export default function App() {
return (
 <div>
  <Routes>
    <Route path='/' element={<h1>Hello world, home page</h1>}/>
  </Routes>
</div>
)
}