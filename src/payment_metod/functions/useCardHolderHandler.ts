import { useAtomValue, useSetAtom } from "jotai";
import { cardHolder } from "../atoms/atoms";

export default function useCardHolderHandler() {
  const cardHolderValue = useAtomValue(cardHolder);
  const setCardHolder = useSetAtom(cardHolder);

  function cardHolderHandler(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.value.match(/^[\s\ a-z]+$/)) {
      setCardHolder(event.currentTarget.value);
    }
  }
  document.addEventListener("keydown", function (event) {
    if (
      document.activeElement?.id == "holder" &&
      cardHolderValue.length == 1 &&
      event.code == "Backspace"
    ) {
      setCardHolder("");
    } else {
      return;
    }
  });

  return { cardHolderValue, cardHolderHandler };
}
