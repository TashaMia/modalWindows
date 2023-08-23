import { useAtomValue, useSetAtom } from "jotai";
import { cvcCard } from "../atoms/atoms";

export default function useCvcCardHandler() {
  const cvcCardValue = useAtomValue(cvcCard);
  const setCvcCard = useSetAtom(cvcCard);

  function cvcCardHandler(event: React.FormEvent<HTMLInputElement>) {
    document.addEventListener("keydown", function (event) {
      if (
        document.activeElement?.id == "cvc" &&
        cvcCardValue.length == 3 &&
        event.code == "Backspace"
      ) {
        setCvcCard("");
      } else {
        return;
      }
    });

    if (cvcCardValue.length == 3) {
      return;
    }
    if (event.currentTarget.value.match(/^\d+$/)) {
      setCvcCard(event.currentTarget.value);
    }
  }
  return { cvcCardValue, cvcCardHandler };
}
