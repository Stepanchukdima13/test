import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Jobs from "./features/jobs/Jobs"
import SavedJobs from "./features/jobs/SavedJobs"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/jobs" >
          <Route index element={<Jobs />} />
          <Route path="saved" element={<SavedJobs/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
