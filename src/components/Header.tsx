export default function Header(props: { setTab: React.Dispatch<React.SetStateAction<string>> }) {
    return <header style={{
        "height": "100px",
        "display": "flex",
    }}>
        {["HOME", "ABOUT", "PROJECTS", "GIFs"].map(k => <a href="#" key={k} onClick={() => props.setTab(k)}>{k}</a>)}
    </header>
}