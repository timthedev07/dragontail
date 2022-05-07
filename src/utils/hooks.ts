import { MutableRefObject, useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  callback: Function
) => {
  if (typeof window !== "undefined")
    useEventListener("click", (e: any) => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      callback(e);
      document;
    });
};

export const useEventListener = (
  eventType: keyof WindowEventMap,
  callback: Function,
  element: typeof window | typeof document = window
) => {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: any) => ref.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};
