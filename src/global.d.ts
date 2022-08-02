import { _axios } from './plugins/axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: typeof _axios,
    $apis: any
  }
}
