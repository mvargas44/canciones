import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logoReact.png"

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="*">
                  Compositores
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Canciones
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/cancre">
                      Registrar canción
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/canlis">
                      Listar canciones
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/canadmin">
                      Administrar canciones
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/acer">
                  Acerca de
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
