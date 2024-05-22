import "../Style/App.scss";
import Account from "./Account";
import HomeScreen from "../Components/HomeScreen/HomeScreen";
import Genres from "../Components/Genres/Genres";
import NavPanel from "../Components/NavPanel/NavPanel";
import Prime from "../Components/Prime/Prime";
import Hearing from "../Components/Hearing/Hearing";
import Catalog from "../Components/Catalog/Catalog";
import Profile from "../Components/Profiledetails/Profile";
function App() {
  return (
    <>
      {/* <Account /> */}
      <Profile />
      <div className="container">
        {/* <HomeScreen />
        <Genres />
        <Prime />
        <Catalog />
        <Hearing />
        <NavPanel /> */}
      </div>
    </>
  );
}

export default App;
