import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div>
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="en">en</option>
        <option value="fr">fr</option>
        <option value="de">de</option>
        <option value="ru">ru</option>
        <option value="ua">ua</option>
        <option value="pl">pl</option>
      </select>
    </div>
  );
}
