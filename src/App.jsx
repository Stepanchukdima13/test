import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Jobs from "./pages/Jobs"
import SavedJobs from "./pages/SavedJobs"
import SearchContextHook from "./contexts/ContextHook"
import Footer from "./components/Footer"
import SaveJobContext from "./contexts/SaveJobContext"
import Locations from "./pages/Locations"
import JobApplyForm from "./pages/JobApplyForm"
import ApplyJob from "./contexts/ApplyJob"
import AppliedJobs from "./pages/AppliedJobs"
import Policy from "./pages/Policy"

function App() {

  return (
    <>
      <SearchContextHook>
        <SaveJobContext>
          <ApplyJob>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />

              <Route path="/jobs" >
                <Route index element={<Jobs />} />
                <Route path="saved" element={<SavedJobs />} />
                <Route path="apply" element={<JobApplyForm />} />
                <Route path="applied" element={<AppliedJobs />} />
              </Route>
              <Route path="/locations" element={<Locations />} />
              <Route path="/policy" element={<Policy />} />
            </Routes>
          </ApplyJob>
        </SaveJobContext>
      </SearchContextHook>
      <Footer />
    </>
  )
}

export default App
