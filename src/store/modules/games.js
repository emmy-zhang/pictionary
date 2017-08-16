import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  games: []
}

const getters = {
  games: state => state.games
}

const actions = {
  getGames({ commit, rootState }) {
    return Vue.axios.get('/games')
      .then(res => {
        return commit(types.SET_GAMES, res.data)
      })
      .catch((err) => {
        throw err
      })
  },
  createGame({ commit, rootState }, { game, users }) {
    return Vue.axios.post('/game/add', { game, users })
      .then((res) => {
        commit(types.ADD_GAME, res.data)
        return res.data
      })
      .catch((err) => {
        throw err
      })
  },
  addGame({ commit, rootState }, { game }) {
    commit(types.ADD_GAME, game)
  },
  removeGame({ commit, rootState }, { game }) {
    commit(types.REMOVE_GAME, game)
    return Vue.axios.post(`/games/remove`, { game })
      .then(res => true)
      .catch((err) => {
        throw err
      })
  },
  addGameUsers({ commit }, { game, users }) {
    commit(types.ADD_GAME_USERS, { game, users })
    return Vue.axios.post(`/games/users/add`, { game, users })
      .then(res => true)
      .catch((err) => {
        throw err
      })
  },
  removeGameUser({ commit }, { game, user }) {
    commit(types.REMOVE_GAME_USER, { game, user })
    return Vue.axios.post(`/games/users/remove`, { game, user })
      .then(res => true)
      .catch((err) => {
        throw err
      })
  }
}

const mutations = {
  [types.SET_GAMES](state, games) {
    state.games = games
  },
  [types.ADD_GAME](state, game) {
    state.games.push(game)
  },
  [types.REMOVE_GAME](state, game) {
    state.games = state.games.filter(g => g.id !== game.id)
  },
  [types.ADD_GAME_USERS](state, { game, users }) {
    const index = state.games.findIndex(g => g.id === game.id)
    state.games[index].users = state.games[index].users.concat(users)
  },
  [types.REMOVE_GAME_USER](state, { game, user }) {
    const index = state.games.findIndex(g => g.id === game.id)
    const users = state.games[index].users.filter(u => u.id !== user.id)
    Vue.set(state.games[index], 'users', users)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
