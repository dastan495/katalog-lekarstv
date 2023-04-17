import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./Routes/MainRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
