import { useState } from "react"; 
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Form Handling Demo</h1>

      <button onClick={() => setUseFormik(!useFormik)}>
        Switch to {useFormik ? "Controlled Form" : "Formik Form"}
      </button>

      <hr />

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;