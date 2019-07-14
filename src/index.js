import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import GamePost from "./components/gamePost.jsx";

function App() {
  return (
    <div className="Background">
      {/* This game post component takes in the information for viewer game that the twitch user is hosting */}
      <GamePost
        game={"Fortnite"}
        host={"InVerum"}
        spots={3}
        isLive={true}
        imgUrl={
          "https://uploads.codesandbox.io/uploads/user/0ecaffa7-aefb-4442-8f99-d989d21d43cc/bxsc-cover.png"
        }
        //This could be passed to the object to be dynamic, the message to be displayed to the users
        message={
          "Going to be playing some 4P Fortnite with my viewers from 4-8 PM. I will add you as a friend and message you on twitch if selected, so make sure you add your ID when joining!"
        }
        hiddenMessage={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat enim, vehicula viverra urna eu, gravida elementum arcu. "
        }
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
