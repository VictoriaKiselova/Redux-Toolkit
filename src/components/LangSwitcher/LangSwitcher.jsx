import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../../redux/localeSlice";

export default function LangSwitcer() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();
  return (
    <div>
      <select value={lang} onChange={e => dispatch(changeLang(e.target.value))}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
