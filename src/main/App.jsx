import Home from "./home.jsx";
import About from "./about.jsx";
import MoreInfo from "./moreinfo.jsx";
import Memberships from "./memberships.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import MemberShipPlans from "./signUp.jsx";
import { useEffect, useState } from "react";
import { supabase } from "./supabase-client.jsx";
import Payment from "./payment.jsx";
import SignIn from "./signIn.jsx";

function App() {
  let [Session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/moreinfo" element={<MoreInfo></MoreInfo>}></Route>
          <Route
            path="/memberships"
            element={<Memberships></Memberships>}
          ></Route>
          <Route
            path="/joinMembership/:plan"
            element={<MemberShipPlans role={Session}></MemberShipPlans>}
          ></Route>
          <Route
            path="/payment"
            element={<Payment role={Session}></Payment>}
          ></Route>
          <Route
            path="/signin/:plan"
            element={<SignIn role={Session}></SignIn>}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
