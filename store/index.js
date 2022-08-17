import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state,posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit({commit}, context) {
        return axios.get('https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts.json').then(res => {
          const posts = []
          for (const key in res.data) {
            posts.push({ id: key, ...res.data[key] })
          }
          commit('setPosts', posts)
        }).catch(e => context.error(e))
      },
      setPosts({commit}, posts) {
        commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
