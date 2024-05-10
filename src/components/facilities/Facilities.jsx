import { CgScreen } from "react-icons/cg"
import "./facilities.scss"

const Facilities = ({ facilities }) => {
    return (
        <div className="vd_facitiliesContainer">
            {facilities && facilities.map((item, i) => (
                <div key={i} className="vd_facItem">
                    <CgScreen></CgScreen>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Facilities