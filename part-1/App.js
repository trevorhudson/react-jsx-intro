
function App() {
  return <div>
    < FirstComponent />
    < NamedComponent name="Trevor" />
  </div>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<App />);