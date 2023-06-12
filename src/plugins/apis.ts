// 高德开发key
const key = '642bfc64d46e4dc4ecaf2bbe97510e74'
// 高德api前缀
const host = '//restapi.amap.com'

export const $apis = {
  api: (key: string) => `https://87tetwnrqe.hk.aircode.run/${key}`, // 外部api转发接口
  amap: {
    ip: `${host}/v3/ip?key=${key}`,
    district: `${host}/v3/config/district?key=${key}&subdistrict=2`,
    weather: (city: string) =>
      `${host}/v3/weather/weatherInfo?key=${key}&extensions=all&city=${city}`,
  },
  fakerapi: (resource: string, _quantity: number) =>
    `https://fakerapi.it/api/v1/${resource}?_locale=zh_CN&_quantity=${_quantity}&_characters=50`,
}
