import shawn_sheep from "../assets/shawn_sheep.jpeg";
import work from "../data/work.json";
import personal_info from "../data/personal_info.json";

export default function Projects() {
    return <div style={{
        "height": "calc(100vh - 200px)",
        "display": "flex",
    }}>
        <div style={{
            "color": "white",
            "width": "fit-content",
            "margin": "auto",
            "display": "flex",
            "alignItems": "center",
        }}>
            <img src={shawn_sheep} width="300px" height="300px" style={{ "objectFit": "cover", "marginRight": "20px", "borderRadius": "50%" }} />
            <div>
                <h1>{personal_info.first_name} {personal_info.father_lastname}</h1>
                <h2><strong>{work[0].position}</strong> @ {work[0].company_name}</h2>
                <h3>Engineering my life and being happy at the same time 🐑</h3>
            </div>
        </div>
    </div>
}