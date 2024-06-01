export default function Subscriptions() {
  return (
    <div
      class="rbt-pricing-area bg-color-white"
      style={{ marginTop: 40, marginBottom: 50 }}
    >
      <div class="container">
        <div class="row g-5 mb--60">
          <div class="col-12" style={{ marginTop: 60 }}>
            <div class="pricing-billing-duration text-center">
              <ul>
                <li class="nav-item">
                  <button class="nav-link yearly-plan-btn active" type="button">
                    Monthly Plan
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link monthly-plan-btn" type="button">
                    Yearly Plan
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-xl-4 col-lg-6 col-md-6 col-12">
            <div class="pricing-table style-2">
              <div class="pricing-header">
                <h3 class="title color-primary">Basic Plan</h3>
                <span class="rbt-badge mb--35">Free for a Month</span>
                <div class="price-wrap">
                  <div class="yearly-pricing d-none">
                    <span class="amount color-primary">$30.99</span>
                    <span class="duration ms-1 color-primary">/yearly</span>
                  </div>
                  <div class="monthly-pricing d-block">
                    <span class="amount color-primary">$8.00</span>
                    <span class="duration ms-1 color-primary">/monthly</span>
                  </div>
                </div>
              </div>
              <div class="pricing-btn">
                <a
                  class="rbt-btn bg-primary-opacity hover-icon-reverse w-100"
                  href="/subscription#"
                >
                  <div class="icon-reverse-wrapper">
                    <span class="btn-text">Join Course Plan</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div class="pricing-body">
                <ul class="list-item">
                  <li class="">
                    <i class="feather-check"></i> Unlimited Access Courses
                  </li>
                  <li class="">
                    <i class="feather-check"></i> Certificate After Completion
                  </li>
                  <li class="off">
                    <i class="feather-x"></i> High Resolution Videos
                  </li>
                  <li class="off">
                    <i class="feather-x"></i> 24/7 Dedicated Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-12">
            <div class="pricing-table style-2 active">
              <div class="pricing-header">
                <div class="pricing-badge">
                  <span>Popular</span>
                </div>
                <h3 class="title color-secondary">Standard Plan</h3>
                <span class="rbt-badge mb--35">Most Popular</span>
                <div class="price-wrap">
                  <div class="yearly-pricing d-none">
                    <span class="amount color-secondary">$100.99</span>
                    <span class="duration ms-1 color-secondary">/yearly</span>
                  </div>
                  <div class="monthly-pricing d-block">
                    <span class="amount color-secondary">$20.00</span>
                    <span class="duration ms-1 color-secondary">/monthly</span>
                  </div>
                </div>
              </div>
              <div class="pricing-btn">
                <a
                  class="rbt-btn bg-secondary-opacity hover-icon-reverse w-100"
                  href="/subscription#"
                >
                  <div class="icon-reverse-wrapper">
                    <span class="btn-text">Join Course Plan</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div class="pricing-body">
                <ul class="list-item">
                  <li class="">
                    <i class="feather-check"></i> Unlimited Access Courses
                  </li>
                  <li class="">
                    <i class="feather-check"></i> Certificate After Completion
                  </li>
                  <li class="">
                    <i class="feather-check"></i> High Resolution Videos
                  </li>
                  <li class="">
                    <i class="feather-check"></i> 24/7 Dedicated Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6 col-md-6 col-12">
            <div class="pricing-table style-2">
              <div class="pricing-header">
                <h3 class="title color-pink">Exclusive Plan</h3>
                <span class="rbt-badge mb--35">Free for a Month</span>
                <div class="price-wrap">
                  <div class="yearly-pricing d-none">
                    <span class="amount color-pink">$99.99</span>
                    <span class="duration ms-1 color-pink">/yearly</span>
                  </div>
                  <div class="monthly-pricing d-block">
                    <span class="amount color-pink">$39.00</span>
                    <span class="duration ms-1 color-pink">/monthly</span>
                  </div>
                </div>
              </div>
              <div class="pricing-btn">
                <a
                  class="rbt-btn bg-pink-opacity hover-icon-reverse w-100"
                  href="/subscription#"
                >
                  <div class="icon-reverse-wrapper">
                    <span class="btn-text">Join Course Plan</span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                    <span class="btn-icon">
                      <i class="feather-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
              <div class="pricing-body">
                <ul class="list-item">
                  <li class="">
                    <i class="feather-check"></i> Unlimited Access Courses
                  </li>
                  <li class="">
                    <i class="feather-check"></i> Certificate After Completion
                  </li>
                  <li class="off">
                    <i class="feather-x"></i> High Resolution Videos
                  </li>
                  <li class="off">
                    <i class="feather-x"></i> 24/7 Dedicated Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
