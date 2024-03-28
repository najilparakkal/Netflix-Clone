import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Row from "./components/rowBanners/Row";
import { orignals,action,horrer,romance,documentery,comady } from "./urls";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div>
        <NavBar />
        <Banner />
        <Row title={"Netflix Orignals"} url={orignals}/>
        <Row title={"Action Movies"} isSmall url={action}/>
        <Row title={"Horrer Movies"}  url={horrer}/>
        <Row title={"Feel Good Movies"} isSmall url={romance}/>
        <Row title={"Documentrys"}  url={documentery}/>
        <Row title={"Comady Movies"} isSmall url={comady}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
