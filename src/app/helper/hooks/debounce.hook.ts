export const debounceHandler = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number = 500,
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId!);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
