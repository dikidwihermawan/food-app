import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Layout/Body";
import Container from "./components/Layout/Container";
import ListItem from "./components/ListItem";
import items from "./dummy/items.json";
import { useEffect } from "react";
import { atom, selector, useRecoilState, useSetRecoilState } from "recoil";

export const listItemState = atom({
  key: "listItemState",
  default: [],
});
export const totalItemState = atom({
  key: "totalItemState",
  default: 0,
});
export const totalPriceState = atom({
  key: "totalPriceState",
  default: 0,
});

export const sumItemState = selector({
  key: "sumItemState",
  get: ({ get }) => {
    const items = get(listItemState);
    const totalItem = items.reduce((prev, current) => prev + current.value, 0);
    const totalPrice = items.reduce(
      (prev, current) => prev + current.value * current.price,
      0
    );
    return {
      totalItem,
      totalPrice,
    };
  },
});

function App() {
  const [ListItems, setListItems] = useRecoilState(listItemState);
  const setTotalItem = useSetRecoilState(totalItemState);
  const setTotalPrice = useSetRecoilState(totalPriceState);

  useEffect(() => {
    setListItems(items);
  }, []);

  return (
    <Container>
      <Header />
      <Body>
        <ListItem items={ListItems} />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;
