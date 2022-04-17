import Header from "./components/Header";
import Home from "./routes/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default App;
