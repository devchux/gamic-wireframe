import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Intro from "./pages/intro";
import Login from "./pages/auth/login";
import User from "./pages/profile/user";
import Manager from "./pages/profile/manager";
import Channel from "./pages/channel";

import "./assets/scss/base.scss";

const App = () => {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="833288686891-3imrk8cdftdf5149qua7i55t5anev551.apps.googleusercontent.com">
        <Routes>
          <Route index element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
};

export default App;
