export default function noExp(params) {
  const num:number = params[0];

  let s =  num.toExponential(100);
  const matches = s.match(/e-(\d*)/);
  if (!matches) {
    return num;
  }

  const e = Number.parseInt(matches[1]);

  s = s.replace(/e-\d*/, '');
  s = s.replace(/\./, '');
  s = s.replace(/0*$/, '');

  for (let i = 0; i < e; i++) {
    s = '0' + s;
  }
  s = '0.' + s;
  return s.substring(0, 15);
}
