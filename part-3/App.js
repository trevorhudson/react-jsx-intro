const person = {
  age: 18,
  name: "bob",
  hobbies: ["basketball", "coding"],
};

function App() {
  return (
    <div>
      {[0, 0, 0].map(() => (
        <Person {...person} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
