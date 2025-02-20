export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© {new Date().getFullYear()} My Website</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: "0",
        width: "100%",
    },
};
