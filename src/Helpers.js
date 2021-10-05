// Convert To Slug
export const convertToSlug = (text) => {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
// formatOrdinals
export const formatOrdinals = (n) => {
  var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th'],
  ]);
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};
