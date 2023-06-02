export const $apis = {
  // 本地接口
  list: {
    list: 'data/list.json', // 列表
    qa: 'data/qa.json', // 列表
  },
  weather: {
    city: 'data/city.json', // 城市列表
  },
  api: (key: string) => `https://87tetwnrqe.hk.aircode.run/${key}`, // 外部api转发接口
}
