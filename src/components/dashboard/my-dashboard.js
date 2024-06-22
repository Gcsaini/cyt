import DashboardSideMenu from "./side-menu";
import HeaderProfile from "./header-profile";
import { Link } from "react-router-dom";
export default function MyDashboard(props) {
  const user = props.user;
  return (
    <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <HeaderProfile user={user} />
            <div className="row g-5">
              <DashboardSideMenu user={user} />
              <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                  <div className="content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section-title">
                          <h4 className="rbt-title-style-3">My Review</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row gy-5">
                      <div className="col-lg-12">
                        <div className="rbt-dashboard-table table-responsive">
                          <table className="rbt-table table table-borderless">
                            <thead>
                              <tr>
                                <th>Course Name</th>
                                <th>Enrolled</th>
                                <th>Rating</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>
                                  <Link to="#">Accounting</Link>
                                </th>
                                <td>50</td>
                                <td>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <Link to="#">Marketing</Link>
                                </th>
                                <td>40</td>
                                <td>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <Link to="#">Web Design</Link>
                                </th>
                                <td>75</td>
                                <td>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <Link to="#">Graphic</Link>
                                </th>
                                <td>20</td>
                                <td>
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="off fas fa-star"></i>
                                    <i className="off fas fa-star"></i>
                                    <i className="off fas fa-star"></i>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="load-more-btn text-center">
                          <Link className="rbt-btn-link" to="#">
                            Browse All Course
                            <i className="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
