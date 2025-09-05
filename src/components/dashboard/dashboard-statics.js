export default function DashboardStatics({ data }) {
    return <div className="row">
        <div className="col-lg-4 col-md-3 col-md-3 col-sm-12">
            <div class="rbt-performance-feature-list">
                <div class="rbt-performance-feature">
                    <span class="rbt-feature-score">{(data && data.bookings) || '00'}</span>
                    <div class="rbt-separator"></div>
                    <span class="rbt-feature-text">Therapists</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-3 col-md-3 col-sm-12">
            <div class="rbt-performance-feature-list">
                <div class="rbt-performance-feature">
                    <span class="rbt-feature-score">{(data && data.events) || '00'}</span>
                    <div class="rbt-separator"></div>
                    <span class="rbt-feature-text">Events</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-3 col-md-3 col-sm-12">
            <div class="rbt-performance-feature-list">
                <div class="rbt-performance-feature">
                    <span class="rbt-feature-score">{(data && data.appointments) || '00'}</span>
                    <div class="rbt-separator"></div>
                    <span class="rbt-feature-text">Appointments</span>
                </div>
            </div>
        </div>
    </div>
}

