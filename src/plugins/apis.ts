export const $apis = {
  api: 'https://api.foldgold.cn/api', // 外部api转发接口
  fakerapi: (resource: string, _quantity: number) =>
    `https://fakerapi.it/api/v1/${resource}?_locale=zh_CN&_quantity=${_quantity}&_characters=50`,
}
