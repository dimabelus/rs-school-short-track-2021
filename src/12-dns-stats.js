/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objectDNS = {};
  let httpAddress;

  for (let i = 0; i < domains.length; i++) {
    httpAddress = domains[i].split('.').reverse();
    httpAddress.reduce((acc, item) => {
      acc += `.${item}`; // eslint-disable-line no-param-reassign
      if (objectDNS[acc] > 0) {
        objectDNS[acc]++;
      } else {
        objectDNS[acc] = 1;
      }
      return acc;
    }, '');
  }
  return objectDNS;
}

module.exports = getDNSStats;
