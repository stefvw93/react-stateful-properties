export default function stateful(
  target: React.Component<any, any>,
  property: string
) {
  let initialValue: any;
  const privateKey = "__stateful__" + property;
  Object.defineProperty(target, property, {
    get(this: React.Component<any, any>) {
      const isMounted = this.hasOwnProperty("render");
      return isMounted ? this.state[privateKey] : initialValue;
    },
    set(this: React.Component<any, any>, value) {
      const isMounted = this.hasOwnProperty("render");
      const state = Object.assign({}, this.state, { [privateKey]: value });
      if (isMounted) {
        this.setState(state);
      } else {
        initialValue = value;
        this.state = state;
      }
    },
  });
}
