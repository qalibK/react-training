import Balance from "./Balance";
import { useSelector } from "react-redux";
import LangSwitcher from "./LangSwitcher";

function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <>
      <h1>Redux</h1>
      <Balance />
      <hr />
      <LangSwitcher />
      <p>Selected language: {lang}</p>
    </>
  );
}

export default App;
