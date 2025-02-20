export default function Header() {
    return (
        <header style={styles.header}>
            <h1>My Website</h1>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
    },
};
