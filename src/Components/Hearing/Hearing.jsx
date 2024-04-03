import "./Hearing.scss";

export default function Hearing() {
  return (
    <div className="hearing">
      <div className="hearing__leftitem">
        <img src="../../../public/hearing_img.png" alt="#" />
        <div className="hearing__leftitem-description">
          <span className="hearing__leftitem-description-title">
            Continue Listening
          </span>
          <span className="hearing__leftitem-description-subtitle">
            Managers who want to create positive work enviroments...
          </span>
        </div>
      </div>
      <div className="hearing__rightitem">
        <div className="hearing__rightitem-img">
          <img src="../../../public/Hearing_play.svg" alt="#" />
        </div>
        <div className="hearing__rightitem-img">
          <img src="../../../public/hearing_skip.svg" alt="#" />
        </div>
      </div>
    </div>
  );
}
