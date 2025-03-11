type sleepHookT = (action: Function, delay?: number) => Promise<any>;

export const sleepHook: sleepHookT = (action = () => {}, delay = 3000) => {
  return new Promise(resolve => {
    action();
    setTimeout(resolve, delay);
  });
};
