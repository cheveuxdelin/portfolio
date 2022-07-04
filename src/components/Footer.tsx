import personal_info from "../data/personal_info.json";

function FooterButton(props: { url: string, title: string }) {
    return <a target="blank" href={props.url}>{props.title}</a>
}

export default function Footer() {

    return <footer style={{
        "height": "100px",
        "display": "flex",
    }}>
        <FooterButton url="https://github.com/cheveuxdelin/portfolio" title="Source" />
        <FooterButton url={personal_info.spotify} title="Spotify" />
        <FooterButton url={personal_info.github} title="Github" />
        <FooterButton url={personal_info.linkedin} title="Linkedin" />
        <FooterButton url={`mailto:${personal_info.email}`} title="Email" />
        <FooterButton url={personal_info.instagram} title="Instagram" />
    </footer>
}