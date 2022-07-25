const state = {
  hsaDownLoad: false,//是否展示下载按钮
  sequenceList: [],//
  playlist: [],//播放列表
  playing: false,//是否正在播放
//   playMode: PLAY_MODE.sequence,//播放模式 随机 顺序
  currentIndex: 0, //播放歌曲的下标
  fullScreen: false,//是否打开播放窗 歌词 
//   favoriteList: load('__favorite__'),
//   searchHistory: load('__search__'),
  playHistory: [],//历史播放
}

const mutations = {
  //   DECREMENT_MAIN_COUNTER(state) {
  //     state.main--
  //   },
  //   INCREMENT_MAIN_COUNTER(state) {
  //     state.main++
  //   },
}

const actions = {
  //   someAsyncTask({ commit }) {
  //     // do something async
  //     commit('INCREMENT_MAIN_COUNTER')
  //   },
}

export default {
  state,
  mutations,
  actions,
}
