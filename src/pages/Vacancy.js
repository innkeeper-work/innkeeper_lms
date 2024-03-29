//External import
import React from "react";

// Components
import { VacancypageHero } from "../components/Hero";
import { VacancyApplyButton } from "../components/Buttons/InnkeeperPhaseOneButtons";
import { AvailableOpenings } from "../components/AllCards/InnkeeperPhaseOneCards";
import availableopenings from "../data/availableopenings.json";

//Images
import favicon from "../assets/images/vacancy/favicon.png";

const Vacancy = () => {
  return (
    <div>
      <VacancypageHero />
      <Openings />
      {/* <Side /> */}
    </div>
  );
};

export let Openings = () => {
  return (
    <div className="container-fluid py-4 ">
      <div className="card-body">
        <h3 className="card-title text-center">Available Openings</h3>
        <div className="row justify-content-evenly mt-4 p-2">
          {availableopenings.openings.map((opening) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12
                    "
                key={opening.id}
              >
                <AvailableOpenings {...opening}></AvailableOpenings>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export let Side = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
          <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <i className="bi-bootstrap fs-1"></i>
            </a>
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                >
                  <i className="bi-house fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Dashboard"
                >
                  <i className="bi-speedometer2 fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <i className="bi-table fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <i className="bi-heart fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <i className="bi-people fs-1"></i>
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi-person-circle h2"></i>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm p-3 min-vh-100"></div>
      </div>
    </div>
  );
};

//  export class Side extends Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        clicks: 0,
//        show: true,
//      };
//    }

//    IncrementItem = () => {
//      this.setState({ clicks: this.state.clicks + 1 });
//    };
//    DecreaseItem = () => {
//      this.setState({ clicks: this.state.clicks - 1 });
//    };
//   ToggleClick = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.IncrementItem}>Click to increment by 1</button>
//         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
//         <button onClick={this.ToggleClick}>
//           {this.state.show ? "Hide number" : "Show number"}
//         </button>
//         {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
//       </div>
//     );
//   }
// }

export default Vacancy;
