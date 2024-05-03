import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcer from "../LangSwitcher/LangSwitcher";

export default function App() {
  const lang = useSelector(state => state.locale.lang);

  return (
    <div>
      <div>
        <h1>Redux</h1>
        <Balance />
        <LangSwitcer />
        <p>Selected lang:{lang}</p>
      </div>
    </div>
  );
}
