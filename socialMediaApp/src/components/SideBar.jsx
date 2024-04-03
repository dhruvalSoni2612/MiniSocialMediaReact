const SideBar = ({ display, setDisplay }) => {
  return (
    <>
      <div className="flex-shrink-0 p-3 bg-body-tertiary">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Navbar</span>
        </a>
        <hr />
        <ul
          className="nav nav-pills mb-auto"
          style={{ justifyContent: "center" }}
        >
          <li className="nav-item" onClick={() => setDisplay("Home")}>
            <a
              href="#"
              className={`nav-link ${display === "Home" && "active"}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li onClick={() => setDisplay("Create Post")}>
            <a
              href="#"
              className={`nav-link ${display === "Create Post" && "active"}`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SideBar;
