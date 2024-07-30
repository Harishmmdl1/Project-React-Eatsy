import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { context } from "./store/Context";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { LuBadgeHelp } from "react-icons/lu";

const TopBar = () => {
  const userData1 = JSON.parse(localStorage.getItem("loggedIndetails"));
  let userData;

  const { cartNumber, setCartNumber, loggin, setLoggin } = useContext(context);

  if (loggin) {
    userData = JSON.parse(localStorage.getItem("loggedIndetails"));
  }

  return (
    <>
      {/* <section className="topBarSection">
        <ul
          id="topBarUl"
          className="list-unstyled d-flex justify-content-evenly align-items-center w-100 gap-5 fs-4 mt-4"
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "highlight text-decoration-none companyTitle custom-nav-link"
                  : "text-decoration-none companyTitle custom-nav-link"
              }
              to="/"
            >
              <img
                className="eatsy_logo"
                src="/assets/item/logo1.jpg"
                alt="Easty"
              />
            </NavLink>

          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "highlight text-decoration-none d-flex align-items-center custom-nav-link"
                  : "text-decoration-none d-flex align-items-center custom-nav-link"
              }
              to="/search"
            >
              <FiSearch /> Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "highlight text-decoration-none d-flex align-items-center custom-nav-link"
                  : "text-decoration-none d-flex align-items-center custom-nav-link"
              }
              to="/help"
            >
              <LuBadgeHelp />
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "highlight text-decoration-none custom-nav-link"
                  : "text-decoration-none custom-nav-link"
              }
              to="/cart"
            >
              <HiMiniShoppingCart /> <sup className="cartNo">{cartNumber}</sup>
            </NavLink>
          </li>
          {loggin ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "highlight text-decoration-none custom-nav-link"
                    : "text-decoration-none custom-nav-link"
                }
                to="/profile"
              >
                <CgProfile className="fs-2" />
                {userData1.name}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "highlight text-decoration-none custom-nav-link"
                    : "text-decoration-none custom-nav-link"
                }
                to="/signupLogin"
              >
                SignUp/Login
              </NavLink>
            </li>
          )}
        </ul>
      </section> */}
      {/* 
      <section className="topBar2">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <ul className="list-unstyled d-flex justify-content-evenly align-items-center w-100 gap-5 fs-4 mt-4">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "highlight text-decoration-none companyTitle navbar-brand"
                      : "text-decoration-none navbar-brand"
                  }
                  to="/"
                >
                  <img
                    className="eatsy_logo"
                    src="/assets/item/logo1.jpg"
                    alt="Easty"
                  />
                </NavLink>
              </li>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse  d-flex justify-content-evenly "
                id="navbarNavAltMarkup"
              >
                <div class="navbar-nav  d-flex justify-content-evenly">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "highlight text-decoration-none d-flex align-items-center nav-link"
                          : "text-decoration-none d-flex align-items-center nav-link"
                      }
                      to="/search"
                    >
                      <FiSearch /> Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "highlight text-decoration-none d-flex align-items-center nav-link"
                          : "text-decoration-none d-flex align-items-center nav-link"
                      }
                      to="/help"
                    >
                      <LuBadgeHelp />
                      Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "highlight text-decoration-none nav-link"
                          : "text-decoration-non nav-link"
                      }
                      to="/cart"
                    >
                      <HiMiniShoppingCart /> <sup>({cartNumber})</sup>
                    </NavLink>
                  </li>
                  {loggin ? (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "highlight text-decoration-none nav-link"
                            : "text-decoration-none nav-link"
                        }
                        to="/profile"
                      >
                        <CgProfile className="fs-2" />
                        {userData1.name}
                      </NavLink>
                    </li>
                  ) : (
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "highlight text-decoration-none nav-link"
                            : "text-decoration-none nav-link"
                        }
                        to="/signupLogin"
                      >
                        SignUp/Login
                      </NavLink>
                    </li>
                  )}
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </section> */}
      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light topBarBS">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              className="eatsy_logo"
              src="/assets/item/logo1.jpg"
              alt="Eatsy"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse align-items-center" id="navbarNav">
            <ul
              id="topBarUl"
              className="navbar-nav ms-auto d-flex align-items-center gap-5 fs-4"
            >
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "highlight text-decoration-none companyTitle custom-nav-link"
                      : "text-decoration-none companyTitle custom-nav-link"
                  }
                  to="/search"
                >
                  <FiSearch /> Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "highlight text-decoration-none d-flex align-items-center custom-nav-link"
                      : "text-decoration-none d-flex align-items-center custom-nav-link"
                  }
                  to="/help"
                >
                  <LuBadgeHelp />
                  Help
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "highlight text-decoration-none custom-nav-link"
                      : "text-decoration-none custom-nav-link"
                  }
                  to="/cart"
                >
                  <HiMiniShoppingCart />{" "}
                  <sup className="cartNo">{cartNumber}</sup>
                </NavLink>
              </li>
              {loggin ? (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "highlight text-decoration-none custom-nav-link"
                        : "text-decoration-none custom-nav-link"
                    }
                    to="/profile"
                  >
                    <CgProfile className="fs-2" />
                    {userData1.name}
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "highlight text-decoration-none custom-nav-link"
                        : "text-decoration-none custom-nav-link"
                    }
                    to="/signupLogin"
                  >
                    SignUp/Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
