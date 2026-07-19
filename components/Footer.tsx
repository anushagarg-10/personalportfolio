export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot">
        <p>© {year} Anusha Garg · Designed &amp; built in Canberra.</p>
        <div className="socs">
          <a
            className="ic"
            data-cur
            href="https://www.linkedin.com/in/anusha-garg-67a214205/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.2-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
