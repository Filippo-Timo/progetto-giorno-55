import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyNavbar() {
    return (
        <>
            {/* LAYOUT SM  */}
            <Navbar
                variant="dark"
                className="d-md-none py-2 px-3 mb-3"
                style={{ backgroundColor: "#323232" }}
            >
                <Container fluid className="d-flex justify-content-between align-items-center">

                    {/*     DROPDOWN */}
                    <div className="d-flex align-items-center">
                        <Nav>
                            <NavDropdown
                                id="mobile-menu"
                                menuVariant="dark"
                                title={
                                    <i className="bi bi-list fs-2 text-danger"></i>
                                }
                                className="p-0 m-0"
                            >
                                <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                                <NavDropdown.Item href="#favorites">Novità</NavDropdown.Item>
                                <NavDropdown.Item href="#radio">Radio</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>

                    {/* LOGO DELLA APPLE */}
                    <div className="d-flex align-items-center">
                        <img src="../public/logos/music.svg" type="svg" alt="Prólogo con Abuelo" className="img-fluid" />
                    </div>

                    {/* TESTO ACCEDI */}
                    <div className="d-flex align-items-center">
                        <span className="text-danger fw-semibold fs-5">
                            Accedi
                        </span>
                    </div>

                </Container>
            </Navbar>

            {/* LAYOUT DA MD IN POI */}
            <Navbar
                className="d-none d-md-flex py-3 px-4 mb-3"
                style={{ backgroundColor: "#323232" }}
            >
                <Container fluid className="d-flex justify-content-between align-items-center">

                    {/* ICONCINE PER IL PLAYER */}
                    <div className="d-flex align-items-center gap-3 text-white-50 fs-4">
                        <i className="bi bi-shuffle"></i>
                        <i className="bi bi-skip-backward-fill"></i>
                        <i className="bi bi-play-fill"></i>
                        <i className="bi bi-skip-forward-fill"></i>
                        <i className="bi bi-arrow-repeat"></i>
                    </div>

                    {/* LOGO CENTRALE DELLA APPLE */}
                    <div className="bg-secondary mx-3 py-2 rounded text-center" style={{ width: 200 }}>
                        <img src="../public/logos/apple.svg" type="svg" alt="Apple logo" className="img-fluid" />
                    </div>

                    {/* VOLUME E TASTINO ACCEDI */}
                    <div className="d-flex align-items-center gap-4">

                        {/* SLIDER PER IL VOLUME (fatto con 'IA) */}
                        <div className="d-flex align-items-center gap-2 text-white-50">
                            <i className="bi bi-volume-up-fill fs-5"></i>
                            <Form.Range style={{ width: "100px" }} />
                        </div>

                        {/* ACCEDI */}
                        <button className="btn btn-danger fw-semibold d-flex align-items-center">
                            <i className="bi bi-person-fill me-1"></i>
                            Accedi
                        </button>
                    </div>

                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;