import React from "react";
import "../journal.css";

const FeelingsSort = () => {
  return (
    <>
      <div id="test_secondDivide" className="css-selector">
        <div className="plainBackground_WhiteBorder">
          <fieldset>
            <legend class="border">
              <h2 class="border">Feelings Sort button</h2>
              <h3 class="border">(unfortunately not a Sort Feelings button)</h3>
            </legend>
            <div class="radio__buttons">
              <div>
                <input type="radio" id="happy" name="mood" value="happy" />
                <label for="happy">Happy</label>
              </div>
              <div>
                <input type="radio" id="fine" name="mood" value="fine" />
                <label for="fine">Fine</label>
              </div>
              <div>
                <input type="radio" id="sad" name="mood" value="sad" />
                <label for="sad">Sad</label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default FeelingsSort;
