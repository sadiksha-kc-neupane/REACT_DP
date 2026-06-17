// function App() {
//   let name = "diksha";
//   let caste = "K.C.";
//   let games = ["pokemon", "freefire"];
//   let information = {
//     name: "diksha",
//     class: 12,
//     roll_no: 21,
//   };
//   return (
//     <>
//       <h1>
//         Hello {name} {caste}
//       </h1>
//       <h2>i love {games[0]}</h2>
//       <h2>i study in class {information.class} </h2>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>This is home page</h1>} />
        <Route path="/about" element={<h2>this is about page</h2>} />
        <Route path="/contact" element={<h3>this is contact page</h3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
