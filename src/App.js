import { Routes, Route } from "react-router";

import NavBar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Result from "./routes/Result/Result.component";
import Sample from "./routes/sample/sample.component";
import About from "./routes/about/about.component";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App;