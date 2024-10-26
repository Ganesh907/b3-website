import { useRoutes } from "react-router-dom";
import AppRoutes from './routes/Router'
import { Suspense } from "react";
import ThemeProvider from "./components/common/ThemeProvider";
import Spinner from "./components/common/Spinner";

function App() {

  const routing = useRoutes(AppRoutes);

  return (
    <ThemeProvider>
      <div className="bg-blue-50 dark:bg-transparent">

        <Suspense fallback={<Spinner />}>
          {routing}
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;



