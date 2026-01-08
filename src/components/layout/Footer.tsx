export default function Footer() {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid var(--border-primary)',
            marginTop: '4rem',
            textAlign: 'center',
            color: 'var(--text-tertiary)',
            fontSize: '0.875rem'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Naufal Raihan S. All rights reserved.</p>
            </div>
        </footer>
    );
}
