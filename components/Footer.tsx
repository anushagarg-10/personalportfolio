export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot">
        <p>
          © {year} Anusha Garg <span className="mono foot-v">· v2, redesigned {year}</span>
        </p>
        <div className="socs">
          <a
            className="ic"
            data-cur
            href="https://www.linkedin.com/in/anushagargg/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.2-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" />
            </svg>
          </a>
          <a
            className="ic"
            data-cur
            href="https://github.com/anushagarg-10"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0112 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
