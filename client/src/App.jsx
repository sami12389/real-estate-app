import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Profile,
  Signin,
  About,
  Signup,
  CreateListing,
  UpdateListing,
  Listing,
  Search,
} from "./pages/index";
import { Header, PrivateRoute } from "./components/index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/listing/:listingId" element={<Listing />} />
          <Route path="/search" element={<Search />} />

          {/* Private Route */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route
              path="/updateListing/:listingId"
              element={<UpdateListing />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
