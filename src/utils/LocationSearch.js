/**
 * 传参编码
 * @param {Object} query query参数对象
 * @return {String} location.search
 */
export function encodeQuery(query = {}) {
  let queryStr = '';
  let keys = Object.keys(query);
  keys.forEach((item, index) => {
    queryStr = index
      ? `${queryStr}&${item}=${query[item]}`
      : `${queryStr}${item}=${query[item]}`;
  });
  return queryStr;
}

/**
 * 接收解码
 * @param {String} queryStr location.search
 * @return {Object} query参数对象
 */
export function decodeQuery(queryStr = '') {
  if (!queryStr.length) return {};
  let query = {};
  // 中文需解码
  queryStr = decodeURI(queryStr.replace('?', ''));
  let queryArr = queryStr.split('&');
  queryArr.forEach((item) => {
    let keyAndValue = item.split('=');
    query[keyAndValue[0]] = keyAndValue[1];
  });
  return query;
}
