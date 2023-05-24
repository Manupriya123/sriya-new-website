import React from "react";
import "./index.css";
import DoneIcon from "@mui/icons-material/Done";
const ComparePlans = () => {
  return (
    <div className="compare-outer-container">
      <div className="container_wrapper">
        <p className="compare-heading">Compare Plans</p>
        <p className="compare-sub-heading">
          Contact Sales for free trial and paid plans
        </p>
        <div className="compare-table-container">
          <table className="table-inner-container">
            <thead>
              <tr>
                <th></th>
                <th className="table-heading">Starter</th>
                <th className="table-heading1">Advance</th>
                <th className="table-heading">Professional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td className="table-desc">Just getting started with AI-Machine Learning</td>
                <td className="table-desc">
                  Seeking Flexible Feature Engineering & Prescriptions in 40+
                  Industries.
                </td>
                <td className="table-desc">
                  Score, Correlate and Improve Super Feature with MLOPS
                  Real-Time.
                </td>
              </tr>
              <tr>
                <td>Auto Data Pre-Processing</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Auto Feature Engineering</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Auto-ML</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>

                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Data Type: Number, Text or Images</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Forecasting</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Insights</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Predictions</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Sensitivity Analysis</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Detailed Report</td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Sriya-GPT Prescription</td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Flexible Feature Engineering</td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>40+ Industry Solutions</td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>MLOPS/Real-Time</td>
                <td></td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Precision-ML²</td>
                <td></td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
              <tr>
                <td>Data Type: Video and Audio</td>
                <td></td>
                <td></td>
                <td>
                  <DoneIcon />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
