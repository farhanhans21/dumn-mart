import React from "react";
import { AppRouter } from "./routers/Index";
import { useAppDispatch } from "./store/store";
import { checkAsync } from "./Redux/auth/async";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(checkAsync());
  }, []);

  return <AppRouter />;
}

export default App;
