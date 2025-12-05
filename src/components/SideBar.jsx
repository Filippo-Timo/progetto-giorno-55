import { ListGroup } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBar = () => {
    return (
        <div className="d-flex flex-column text-white d-none d-md-block h-100vh w-25" style={{ backgroundColor: "#2a2a2a" }}>
            <div className="d-flex align-items-center pt-3 ps-3">
                <p className="fw-bold fs-5"><i class="bi bi-apple"></i>Music</p>
            </div>
            <div className="p-3">
                <input type="search" placeholder="Cerca" className="w-100"></input>
            </div>
            <ListGroup variant="flush">
                <ListGroup.Item action href="#home" className="text-white border-0 w-100" style={{ backgroundColor: "#2a2a2a" }}>
                    <i className="bi bi-house-door text-danger"></i> Home
                </ListGroup.Item>
                <ListGroup.Item action href="#novita" className="text-white border-0 w-100" style={{ backgroundColor: "#2a2a2a" }}>
                    <i className="bi bi-music-note-list text-danger"></i> Novità
                </ListGroup.Item>
                <ListGroup.Item action href="#radio" className="text-white border-0 w-100" style={{ backgroundColor: "#2a2a2a" }}>
                    <i class="bi bi-broadcast text-danger"></i> Radio
                </ListGroup.Item>
            </ListGroup>
        </div >
    );
};

export default SideBar;