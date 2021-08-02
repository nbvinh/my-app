function useState(initialValue) {
  var _val = initialValue;
  // no state() function
  function setState(newVal) {
    _val = newVal;
  }
  return [_val, setState]; // directly exposing _val
}
export default useState;
