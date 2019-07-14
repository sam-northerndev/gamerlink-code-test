import React, { Component } from "react";

class GamePost extends Component {
  constructor(props) {
    super(props);
    //The state reflects all dynamic portions of the component
    this.state = {
      inputValue: "",
      joinButtonStatus: "PrimaryButton",
      status: "Join",
      entered: 8,
      expanded: false,
      showText: "Show more",
      hiddenContent: "",
      joinMessage: ""
    };
    //Generate the tag that will be put in the input field
    this.gameID = this.props.game + " ID";
  }
  //This function will handle the user input, and storage in the state, it will hold their entered UID
  updateValue = e => {
    this.setState({ inputValue: e.target.value });
  };
  //This function will determine the current live status display
  isLive = () => {
    if (this.props.isLive === true) {
      return " Is Live!";
    } else {
      return "Offline";
    }
  };
  //This function is called when user attempts to join
  join = () => {
    //Check if they have entered a username
    if (this.state.inputValue != "") {
      //Update the state of the join button
      this.setState({
        joinButtonStatus: "SecondaryButton",
        status: "Leave",
        entered: this.state.entered + 1,
        joinMessage: (
          <p>
            Once the viewer game starts you will be notified if you are selected
          </p>
        )
      });
    }
    //Leave if they click the new "leave button"
    if (this.state.joinButtonStatus == "SecondaryButton") {
      //update the state of the join button to it's original state
      this.setState({
        entered: this.state.entered - 1,
        inputValue: "",
        joinButtonStatus: "PrimaryButton",
        status: "Join",
        joinMessage: ""
      });
    }
  };
  //This function will handle the expand and collapse of content
  expand = () => {
    if (this.state.expanded === false) {
      //update the state of the content to show the hidden message
      this.setState({
        hiddenContent: this.props.hiddenMessage,
        showText: "Show Less",
        expanded: true
      });
    } else {
      //Revert to original state
      this.setState({
        hiddenContent: "",
        showText: "Show More",
        expanded: false
      });
    }
  };
  render() {
    return (
      //This devision hold the game viewer game content
      <div className="GamePost">
        {/*This division will hold the cover of the given game*/}
        <div className="GameCover">
          <img src={this.props.imgUrl} />
        </div>
        {/*This division will hold the host and game message to their viewers*/}
        <div className="LobbyInfo">
          <span className="Username">{this.props.host}</span>
          <span className="LiveText">
            {/*This will hold the live SVG icon, I was unable to get SVG's to render as React components :() */}
            <img src={this.props.liveIcon} />
            {this.isLive()}
          </span>
          <p className="Body">{this.props.message}</p>
          {/*These tags contain the expanded content*/}
          <p className="Body">{this.state.hiddenContent}</p>
          <span className="ShowText" onClick={this.expand}>
            {this.state.showText}
          </span>
          {/*These two spans show how many users are in queue */}
          <br />
          <span className="SlotsText">{this.props.spots} slots</span>
          <br />
          <span className="EntryText">{this.state.entered} Entered</span>
        </div>
        {/*This division has the input form and join button for the user */}
        <div className="GamePostInput">
          <input
            className="TextInput"
            placeholder={this.gameID}
            value={this.state.inputValue}
            onChange={this.updateValue}
          />
          {/*When the button is clicked the join function is called, this updates the button text, styling, and confirmation message*/}
          <button className={this.state.joinButtonStatus} onClick={this.join}>
            <span className="DefaultButtonText">{this.state.status}</span>
          </button>
          <span className="ConfirmationText">{this.state.joinMessage}</span>
        </div>
        {/*This button will only appear on mobile devices*/}
        <button className="TwitchButton">
          <span className="DefaultButtonText">View Twitch Stream </span>
        </button>
      </div>
    );
  }
}

export default GamePost;
