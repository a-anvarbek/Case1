// Libraries
import { Route, Routes } from "react-router";

// Router
import ROUTES from "./routes";

// ===== Imported pages =====
import MorningBrief from "../pages/MorningBrief";
import Pipeline from "../pages/Pipeline";
import Notes from "../pages/Notes";
import Portfolio from "../pages/Portfolio";
import Export from "../pages/Export";

const MainRouter = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path={ROUTES.HOME} element={<MorningBrief />} />
      <Route path={ROUTES.PIPELINE} element={<Pipeline />} />
      <Route path={ROUTES.NOTES} element={<Notes />} />
      <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
      <Route path={ROUTES.EXPORT} element={<Export />} />
    </Routes>
  );
};

export default MainRouter;
