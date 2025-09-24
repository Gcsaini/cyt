import React from "react";
import {
  GetFavriouteTherapistListUrl,
  getTherapistProfiles,
} from "../../utils/url";
import { fetchById, fetchData } from "../../utils/actions";
import ErrorPage from "../../pages/error-page";
import ProfileCardVert from "../home/profile-card-vert";
import {
  EducationList,
  ExpList,
  languageSpoken,
  profileTypeList,
  services,
} from "../../utils/static-lists";
import { getDecodedToken } from "../../utils/jwt";

export default function ViewAllTherapist() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]); // visible data
  const [allData, setAllData] = React.useState([]); // all data
  const [count, setCount] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [favrioutes, setFavrioutes] = React.useState([]);
  const timeoutRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(6); // first 6 show

  const [filter, setFilter] = React.useState({
    profile_type: "",
    services: "",
    year_of_exp: "",
    language_spoken: "",
    qualification: "",
    search: "",
    page: 1,
    pageSize: 1000, // load all at once
  });

  const handleFilterClick = () => {
    setOpen(!open);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilter((prevFilter) => ({
        ...prevFilter,
        search: value.length > 2 ? value : "",
      }));
    }, 300);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetchData(getTherapistProfiles, filter);
      if (res.status) {
        setAllData(res.data || []);
        setCount(res.totalCount || 0);
      } else {
        return <ErrorPage />;
      }
    } catch (err) {
      return <ErrorPage />;
    } finally {
      setLoading(false);
    }
  };

  const getFavrioutes = async () => {
    try {
      const res = await fetchById(GetFavriouteTherapistListUrl);
      if (res.status) {
        setFavrioutes(res.data.therapists || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData();
    const data = getDecodedToken();
    if (data && data.role !== 1) {
      getFavrioutes();
    }
  }, []);

  React.useEffect(() => {
    let filtered = allData;

    if (filter.search) {
      filtered = filtered.filter((item) => {
        const searchText = filter.search.toLowerCase();
        return (
          (item.user.name || "").toLowerCase().includes(searchText) ||
          (item.services || "").toLowerCase().includes(searchText) ||
          (item.qualification || "").toLowerCase().includes(searchText) ||
          (item.language_spoken || "").toLowerCase().includes(searchText)
        );
      });
    }

    if (filter.profile_type) {
      filtered = filtered.filter(
        (item) => item.profile_type === filter.profile_type
      );
    }

    if (filter.services) {
      filtered = filtered.filter((item) =>
        item.services?.includes(filter.services)
      );
    }

    if (filter.year_of_exp) {
      filtered = filtered.filter(
        (item) => (item.year_of_exp || "").trim() === filter.year_of_exp
      );
    }

    if (filter.language_spoken) {
      filtered = filtered.filter((item) =>
        item.language_spoken?.includes(filter.language_spoken)
      );
    }

    if (filter.qualification) {
      filtered = filtered.filter(
        (item) => item.qualification === filter.qualification
      );
    }

    setAllData(filtered);
  }, [filter]);

  // slice data based on visibleCount
  React.useEffect(() => {
    setData(allData.slice(0, visibleCount));
  }, [allData, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      {/* ==== HEADER SAME AS YOUR CODE ==== */}
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">
                      All Therapist
                    </li>
                  </ul>
                  <div className=" title-wrapper">
                    <h1 className="title mb--0"> Search Therapist</h1>
                    <a className="rbt-badge-2" href="/course-card-3#">
                      <div className="image">🎉</div> {count} Therapist
                    </a>
                  </div>
                  <p className="description">
                    Discover the right therapist for your unique needs, all in
                    one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* filter button & search bar same */}
          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item">
                      <span className="course-index">
                        Showing {data.length} of {count}
                        <span className="ms-1">results</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <form action="#" className="rbt-search-style me-0">
                        <input
                          type="text"
                          placeholder="Search Your Therapist.."
                          value={search}
                          onChange={handleSearchChange}
                        />
                        <button
                          type="submit"
                          className="rbt-search-btn rbt-round-btn"
                        >
                          <i className="feather-search"></i>
                        </button>
                      </form>
                    </div>
                    <div className="rbt-short-item">
                      <div className="view-more-btn text-start text-sm-end">
                        <button
                          onClick={handleFilterClick}
                          className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                        >
                          Filter<i className="feather-filter"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* filters remain same */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==== LIST + LOAD MORE ==== */}
      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          {loading ? (
            <div className="text-center my-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-5">
              {data &&
                data.map((item) => (
                  <div
                    key={item._id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
                    style={{ wordWrap: "break-word" }}
                    data-sal-delay="150"
                    data-sal="slide-up"
                    data-sal-duration="800"
                  >
                    <ProfileCardVert data={item} favrioutes={favrioutes} />
                  </div>
                ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < allData.length && (
            <div className="row">
              <div className="col-lg-12 text-center mt--40">
                <button onClick={handleLoadMore} className="btn-load-more">
                  Load More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inline CSS for green gradient button */}
      <style>{`
        .btn-load-more {
          background: linear-gradient(90deg, #28a745, #20c997);
          color: #fff;
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-load-more:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
