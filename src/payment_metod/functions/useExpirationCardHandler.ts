import { useAtomValue, useSetAtom } from "jotai";
import { expirationCard } from "../atoms/atoms";

export default function useExpirationCardHandler() {
  const expirationCardValue = useAtomValue(expirationCard);
  const setExpirationCard = useSetAtom(expirationCard);

  function expirationCardHandler(event: React.FormEvent<HTMLInputElement>) {
    document.addEventListener("keydown", function (event) {
      if (
        document.activeElement?.id == "exp" &&
        expirationCardValue.length == 5 &&
        event.code == "Backspace"
      ) {
        setExpirationCard(" ");
      } else {
        return;
      }
    });
    if (expirationCardValue.length == 5) {
      return;
    }

    if (event.currentTarget.value.match(/^[\d{2} \/ d{2}]+$/)) {
      setExpirationCard(event.currentTarget.value);
    }
    if (expirationCardValue.length == 2) {
      setExpirationCard(expirationCardValue.concat("/"));
    }
  }
  return { expirationCardValue, expirationCardHandler };
}
