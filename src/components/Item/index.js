import { useState } from "react";
import currency from "../../utils/currency";
import Counter from "./Counter";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listItemState, totalItemState, totalPriceState } from "../../App";

function Item(props) {
  const [listItems, setListItems] = useRecoilState(listItemState);
  const setTotalItem = useSetRecoilState(totalItemState);
  const setTotalPrice = useSetRecoilState(totalPriceState);
  const { item } = props;
  const { name, img, price, value } = item;
  const [itemValue, setItemValue] = useState(0);

  const onRemoveItem = () => {
    setItemValue(0);
  };

  const sumItem = (itemArray) => {
    const total = itemArray.reduce((prev, current) => prev + current.value, 0);
    const price = itemArray.reduce(
      (prev, current) => prev + current.value * current.price,
      0
    );
    setTotalItem(total);
    setTotalPrice(price);
  };

  const onItemChange = (itemChange) => {
    const newArray = listItems.map((item) => {
      if (item.id === itemChange.id) {
        return itemChange;
      } else {
        return item;
      }
    });
    setListItems(newArray);
    sumItem(newArray);
  };

  const onAddItem = () => {
    setItemValue(value + 1);
    onValueChange(value + 1);
  };

  const onValueChange = (changeValue) => {
    const newArray = { ...item };
    newArray.value = changeValue;
    onItemChange(newArray);
  };

  useEffect(() => {
    setItemValue(value);
  }, [value]);

  return (
    <div className="item">
      <img src={img} alt="item-1" />
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-price">{currency(price)}</p>
        {itemValue > 0 ? (
          <Counter
            initialValue={itemValue}
            onValueChange={onValueChange}
            onRemoveItem={onRemoveItem}
          />
        ) : (
          <button className="btn-add" onClick={onAddItem}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
