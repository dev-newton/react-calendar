import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calendar from "../pages/Calendar/Calendar";

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
