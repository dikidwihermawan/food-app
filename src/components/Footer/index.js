import { useRecoilValue } from "recoil";
import currency from "../../utils/currency";
import { sumItemState } from "../../App";

function Footer() {
  const { totalPrice } = useRecoilValue(sumItemState);
  return (
    <div className="footer">
      <button className="btn-submit">
        Cart <div>{currency(totalPrice)}</div>
      </button>
    </div>
  );
}

export default Footer;
