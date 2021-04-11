export function renderIfTrue(component, ...conditions: boolean[]) {
  const shouldRender = conditions.every((c) => !!c);
  return shouldRender ? component : null;
}
