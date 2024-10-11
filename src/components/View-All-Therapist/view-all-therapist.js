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
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [favrioutes, setFavrioutes] = React.useState([]);
  const [filter, setFilter] = React.useState({
    profile_type: "",
    services: "",
    year_of_exp: "",
    language_spoken: "",
    qualification: "",
    search: "",
    page: currentPage,
  });

  const handleFilterClick = () => {
    setOpen(!open);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (search.length > 2) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        search: value,
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        search: "", // Reset the search key if the input has 3 or fewer words
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <a href="#!" onClick={() => handlePageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  const getData = async () => {
    try {
      const res = await fetchData(getTherapistProfiles, filter);
      if (res.status) {
        setData(res.data);
        setCount(res.totalCount);
        setTotalPages(Math.ceil(res.totalCount / 10));
      } else {
        return <ErrorPage />;
      }
    } catch (err) {
      return <ErrorPage />;
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
    if (data) {
      if (data.role !== 1) {
        getFavrioutes();
      }
    }
  }, []);

  return (
    <>
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
                  Discover the right therapist for your unique needs, all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                <div
                  className={
                    open === true
                      ? "default-exp-wrapper"
                      : "default-exp-wrapper  d-none"
                  }
                >
                  <div className="filter-inner">
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Profile Type
                        </span>
                        <select
                          value={filter.profile_type}
                          name="profile_type"
                          onChange={handleChange}
                        >
                          <option value={""}>Default</option>
                          {profileTypeList.map((item) => {
                            return (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Services
                        </span>
                        <select
                          value={filter.services}
                          name="services"
                          onChange={handleChange}
                        >
                          <option value={""}>Default</option>
                          {services.map((item) => {
                            return (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Experience
                        </span>
                        <select
                          value={filter.year_of_exp}
                          name="year_of_exp"
                          onChange={handleChange}
                        >
                          <option value={""}>Default</option>
                          {ExpList.map((item) => {
                            if (item !== "Select") {
                              return (
                                <option value={item} key={item}>
                                  {item}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Language
                        </span>
                        <select
                          value={filter.language_spoken}
                          name="language_spoken"
                          onChange={handleChange}
                        >
                          <option value={""}>Default</option>
                          {languageSpoken.map((item) => {
                            return (
                              <option value={item.value} key={item.value}>
                                {item.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="filter-select-option">
                      <div className="filter-select rbt-modern-select">
                        <span className="select-label d-block">
                          Short By Qualifications
                        </span>
                        <select
                          value={filter.qualification}
                          onChange={handleChange}
                          name="qualification"
                        >
                          <option value={""}>Default</option>
                          {EducationList.map((item) => {
                            if (item !== "Select") {
                              return (
                                <option value={item} key={item}>
                                  {item}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            {data &&
              data.map((item) => {
                return (
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
                );
              })}
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60">
              <nav>
                <div className="nav-links">
                  <ul className="rbt-pagination">
                    <li className={currentPage === 1 ? "disabled" : ""}>
                      <a
                        aria-label="Previous"
                        href="#!"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <i className="feather-chevron-left"></i>
                      </a>
                    </li>
                    {renderPageNumbers()}
                    <li
                      className={currentPage === totalPages ? "disabled" : ""}
                    >
                      <a
                        aria-label="Next"
                        href="#!"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <i className="feather-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
