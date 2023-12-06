// project import

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  );
};

export default App;
