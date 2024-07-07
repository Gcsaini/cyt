export default function ReviewsSidebar() {
  return (
    <>
      <div class="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div class="content">
          <div class="section-title">
            <h4 class="rbt-title-style-3">All Reviews</h4>
          </div>
          <div class="advance-tab-button mb--30">
            <ul
              class="nav nav-tabs tab-button-style-2 justify-content-start"
              id="reviewTab-4"
              role="tablist"
            >
              <li role="presentation">
                <a
                  class="tab-button active"
                  id="received-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#received"
                  role="tab"
                  aria-controls="received"
                  aria-selected="true"
                  href="/instructor/instructor-reviews#"
                >
                  <span class="title">Received</span>
                </a>
              </li>
              <li role="presentation">
                <a
                  class="tab-button"
                  id="given-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#given"
                  role="tab"
                  aria-controls="given"
                  aria-selected="false"
                  href="/instructor/instructor-reviews#"
                >
                  <span class="title">Given</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane fade active show"
              id="received"
              role="tabpanel"
              aria-labelledby="received-tab"
            >
              <div class="rbt-dashboard-table table-responsive mobile-table-750">
                <table class="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Client ID</th>
                      <th>Date</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>CYT12456</th>
                      <td>January 30, 2021</td>
                      <td>
                        <span class="b3">
                          Session:{" "}
                          <a href="/instructor/instructor-reviews#">
                           Individual Counselling 
                          </a>
                        </span>
                        <div class="rbt-review">
                          <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <span class="rating-count"> (9 Reviews)</span>
                        </div>
                        <p class="b2">Good</p>
                      </td>
                    </tr>
                    <tr>
                      <th>CYT12456</th>
                      <td>June 30, 2022</td>
                      <td>
                        <span class="b3">
                          Session:{" "}
                          <a href="/instructor/instructor-reviews#">
                            Couple Counselling
                          </a>
                        </span>
                        <div class="rbt-review">
                          <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                          <span class="rating-count"> (5 Reviews)</span>
                        </div>
                        <p class="b3">Awesome</p>
                      </td>
                    </tr>
                   
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
