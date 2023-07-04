import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Formulario</h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          bio: "Sou desenvolvedor",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
