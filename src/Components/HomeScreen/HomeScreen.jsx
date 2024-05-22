import Stories from "../Stories/Stories";
import "./HomeScreen.scss";
import Time from "../Time/Time";
export default function HomeScreen() {
  return (
    <div className="container">
      <div className="navigation">
        <div className="navigation__leftitem">
        <Time />
        </div>
        <div className="navigation__rightitem">
          <img src="../../public/Set.svg" alt="#" />
          <img src="../../public/Wifi.svg" alt="#" />
          <img src="../../public/Battery.svg" alt="#" />
        </div>
      </div>
      <div className="header">
        <div className="header__leftitem">
          <img src="../../public/good afternoon.svg" alt="#" />
        </div>
        <div className="header__rightitem">
          <img src="../../public/account_icon.svg" alt="#" />
        </div>
      </div>
      <div className="stories">
        <Stories />
      </div>
    </div>
  );
}
