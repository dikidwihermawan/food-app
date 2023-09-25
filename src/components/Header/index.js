import { useRecoilValue } from "recoil";
import cartIcon from "./cart-icon.png";
import { sumItemState } from "../../App";

function Header() {
  const { totalItem } = useRecoilValue(sumItemState);
  return (
    <div className="header">
      <p className="app-name">Fuud App</p>
      <div className="cart">
        <img src={cartIcon} alt="cart-icon" />
        {totalItem > 0 && <p className="total-cart-item">{totalItem}</p>}
      </div>
    </div>
  );
}

export default Header;
