function isFalsy(v) {
  console.log(!v);
}

function isTruthy(v) {
  console.log(!!v);
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);