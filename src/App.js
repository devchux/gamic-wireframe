import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";

import "./assets/scss/base.scss";
import Login from "./pages/auth/login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="833288686891-3imrk8cdftdf5149qua7i55t5anev551.apps.googleusercontent.com">
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
