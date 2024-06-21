export default function MyCoursesTable() {
  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h4 className="rbt-title-style-3">My Courses</h4>
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
                      <a href="#">Accounting</a>
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
                      <a href="#">Marketing</a>
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
                      <a href="#">Web Design</a>
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
                      <a href="#">Graphic</a>
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
              <a className="rbt-btn-link" href="#">
                Browse All Course<i className="feather-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
