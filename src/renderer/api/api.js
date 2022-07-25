import { getAction } from './manage'

export const getBannerList = (params) => getAction('/api/bannerList', params)
