import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Mainpages from "./pages/Mainpages";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Mainpages />
      </BrowserRouter>
    </div>
  );
}

export default App;
