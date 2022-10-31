/**
 * @function String.replaceAll()
 * sometimes not working in mobile devices,
 * so instead can try this way.
 */

const replaceAll = (text, replaceFrom, replaceAfter) => {
  const regex = new RegExp(replaceFrom, "g");
  const results = text?.replace(regex, replaceAfter);

  return results;
};
const toRupiah = (int) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimunFractionDigits: 0,
  }).format(int);
};
