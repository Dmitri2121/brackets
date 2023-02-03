module.exports = function check(str, bracketsConfig) {
  let a;

  let b = bracketsConfig.flat().join('').match(/.{2}/g);

  for (let i = 0; i < b.length; i++) {
    a = str;
    str = str.replaceAll(b[i], String());
    if (a !== str) i = -1;
    if (str.length === 0) return true;
  }
  return false;
}
