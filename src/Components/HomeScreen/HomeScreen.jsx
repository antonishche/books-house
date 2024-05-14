import Stories from "../Stories/Stories";
import "./HomeScreen.scss";
import Genres from "../Genres/Genres";
import NavPanel from "../NavPanel/NavPanel";
import Prime from "../Prime/Prime";
import Hearing from "../Hearing/Hearing";
import Catalog from "../Catalog/Catalog";
export default function HomeScreen() {
  return (
    <div className="container">
      <div className="navigation">
        <div className="navigation__leftitem">
          <span className="navigation-time">9 : 41</span>
        </div>
        <div className="navigation__rightitem">
          <img src="../../Set.svg" alt="#" />
          <img src="../../Wifi.svg" alt="#" />
          <img src="../../Battery.svg" alt="#" />
        </div>
      </div>
      <div className="header">
        <div className="header__leftitem">
          <img src="../../good afternoon.svg" alt="#" />
        </div>
        <div className="header__rightitem">
          <img src="../../account_icon.svg" alt="#" />
        </div>
      </div>
      <div className="stories">
        <Stories />
      </div>
      <Genres />
      <Prime />
      <Catalog />
      <Hearing />
      <NavPanel />
    </div>
  );
}
