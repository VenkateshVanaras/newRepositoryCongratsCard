const element = (
  <div className="greeting">
    <h1 className="mainHeading">Congratulations</h1>
    <div className="subCardName">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="imageClass"
      />
      <h1 className="headingInCard">Kiran V</h1>
      <p className="headingInCard">
        Vishnu institute of Computer Education & Technology, Hanumakonda.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="imageClass"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
