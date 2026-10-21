// Runs before first paint: if this session already saw the intro curtain,
// hide it immediately so repeat loads never flash it.
export default function LoaderScript() {
  const code = `(function(){try{if(sessionStorage.getItem('ag-loaded'))document.documentElement.setAttribute('data-loader','skip');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
