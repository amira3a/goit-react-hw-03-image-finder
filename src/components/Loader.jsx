import { Audio }  from "react-loader-spinner";
import style from "./styles/Loader.module.css";

function Loadericon() {
  return (
    <div className={style.loader}>
      <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
  />
    </div>
  );
}
export default Loadericon;