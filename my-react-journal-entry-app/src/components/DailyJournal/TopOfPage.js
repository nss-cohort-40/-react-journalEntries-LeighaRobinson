import React from "react";
import "../journal.css";

const TopOfPageIntro = () => {
  return (
    <>
      <div className="main__background">
        <div id="test-border">
          <header>
            {/* <img src={require("./Images/scroll.png")} /> */}
            {/* <!--THIS IS WHERE I GOT THE ONMOUSEOVER ONOUSEOUT INFORMATION https://www.youtube.com/watch?v=_rkMYalklOI --> */}
            <div id="test-borderOne" className="css-selector">
              <img
                src={require("../Images/me-cropped-Photo-BB-W.jpg")}
                // onmouseover={require("this.src='/Images/Me-cropped-Photo-Color.jpg'")}
                // onmouseout="this.src='/Images/me-cropped-Photo-BB-W.jpg'"
                alt="picture of Leigha Robinson"
                className="profile-image"
              />
            </div>
            <div id="h1Container" className="css-selector">
              <h1 className="replacementClass css-selector">
                {" "}
                Leigha's NSS Diary
              </h1>
            </div>
          </header>
          <div id="h1Container" className="css-selector">
            <h3 className="replacementClass css-selector">
              A record to remember everything I learned. Topics covered, details
              of daily events, and how I felt during my intense but rewarding
              time at Nashville Software School!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopOfPageIntro;
