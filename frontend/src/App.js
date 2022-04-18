import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
