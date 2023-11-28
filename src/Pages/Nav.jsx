import React from 'react'

export default function Nav() {
  return (
    <>
     <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top "
          id="vf"
          style={{ backgroundColor: "#00342E" }}
        >
          <div id="navmargin" className="container ">
            <img
              id="logoHeader"
              src="assets/logo.png"
              className="img-fluid"
              alt=""
            ></img>
            <span style={{ fontFamily: "Glamsy" }} className="company-name">
              Happy Group
            </span>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul
                style={{ fontfamily: "Gilroy" }}
                className="navbar-nav ml-auto"
              >
                <li style={{ fontfamily: "Gilroy" }} className="nav-item">
                  <span
                    className="linkSpan"
                    // onClick={() => {
                    //   aboutus("aboutus");
                    // }}
                  >
                    {/* <AccountCircleOutlined
                      style={{ color: "#D9A851", marginTop: "-.6vh" }}
                    />{" "} */}
                    About us
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    className="linkSpan"
                    // onClick={() => {
                    //   aboutus("ourteam");
                    // }}
                  >
                    {" "}
                    {/* <BusinessCenterOutlined
                      style={{ color: "#D9A851", marginTop: "-.6vh" }}
                    />{" "} */}
                    Our Team
                  </span>

                  {/* <Link className="nav-link" padding={1} underline="none">
                      <span className="linkSpan"></span>
                    </Link> */}
                </li>
                <li className="nav-item">
                  <span
                    className="linkSpan"
                    // onClick={() => {
                    //   aboutus("ourbusiness");
                    // }}
                  >
                    {/* <InfoOutlined
                      style={{ color: "#D9A851", marginTop: "-.6vh" }}
                    />{" "} */}
                    Our business
                  </span>

                  {/* <Link className="nav-link" padding={1} underline="none">
                      <span className="linkSpan">Products</span>
                    </Link> */}
                </li>
                <li className="nav-item" 
                // onClick={handlePopupOpen}
                >
                  {/* <Link to='/addproducts'> */}
                  <span className="linkSpan">
                    {/* <LogoutOutlined
                      style={{ color: "#D9A851", marginTop: "-.6vh" }}
                    />{" "} */}
                    <span style={{ color: "white" }}>Login</span>
                  </span>
                  {/* </Link> */}

                  {/* <Link className="nav-link" padding={1} underline="none">
                      <span className="linkSpan">Order</span>
                    </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
    </>
  )
}
