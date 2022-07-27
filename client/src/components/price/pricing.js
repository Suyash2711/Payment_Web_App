import React from "react";
import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.subscriptionComponent}>
      <h2>Choose the right plan for you</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <div class="toggle-button-cover">
                <div class="button-cover">
                  <div class="button b2" id="button-10">
                    <input type="checkbox" class="checkbox" />
                    <div class="knobs">
                      <span>Monthly</span>
                    </div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
            </th>
            <th scope="col">
              <div className="mobile">Mobile</div>
            </th>
            <th scope="col">
              <div className="basic">Basic</div>
            </th>
            <th scope="col">
              <div className="standard">Standard</div>
            </th>
            <th scope="col">
              <div className="premium">Premium</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Monthly price</th>
            <td>100</td>
            <td>200</td>
            <td>500</td>
            <td>700</td>
          </tr>
          <tr>
            <th scope="row">Video quality</th>
            <td>Good</td>
            <td>Good</td>
            <td>Better</td>
            <td>Best</td>
          </tr>
          <tr>
            <th scope="row">Resolution</th>
            <td>480p</td>
            <td>480</td>
            <td>1080p</td>
            <td>4K+HDR</td>
          </tr>
          <tr>
            <th scope="row" rowSpan={4}>
              Devices you can use to watch
            </th>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
            <td>Phone</td>
          </tr>
          <tr>
            <td rowSpan={3}>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
            <td>Tablet</td>
          </tr>
          <tr>
            <td>Computer</td>
            <td>Computer</td>
            <td>Computer</td>
          </tr>
          <tr>
            <td>TV</td>
            <td>TV</td>
            <td>TV</td>
          </tr>
        </tbody>
      </table>
      <button type="button" class="btn btn-lg btn-primary">
        Next
      </button>
    </div>
  );
};

export default Pricing;
