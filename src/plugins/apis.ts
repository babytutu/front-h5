export const $apis = {
  api: (key: string) => `https://87tetwnrqe.hk.aircode.run/${key}`, // 外部api转发接口
  fakerapi: (resource: string, _quantity: number) =>
    `https://fakerapi.it/api/v1/${resource}?_locale=zh_CN&_quantity=${_quantity}&_characters=50`,
}
