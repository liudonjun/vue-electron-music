import { getAction } from './manage'

export const getHome = (params) => getAction('/api/home', params)
