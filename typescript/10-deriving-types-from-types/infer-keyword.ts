function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer ReturnValue
  ? ReturnValue
  : never;

type AddFnReturnValueType = ReturnValueType<typeof add>; // 'ReturnType' inbuilt one
