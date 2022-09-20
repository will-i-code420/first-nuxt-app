import Vuex from 'vuex'
import Cookie from 'js-cookie'

// need to add error component/state/logic now that auth is enabled

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state,posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIdx = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIdx] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      async nuxtServerInit({ commit }, context) {
        try {
          const data = await context.app.$axios.$get(`/posts.json`)
          const posts = []
          for (const key in data) {
            posts.push({ id: key, ...data[key] })
          }
          commit('setPosts', posts)
        } catch (e) {
          console.log(e)
          context.error(e)
        }
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },
      async addPost({ commit, state }, postData) {
        try {
          const data = await this.$axios.$post(`${this.$config.baseURL}/posts.json?auth=${state.token}`, postData)
          commit('addPost', {id: data.name, ...postData})
        } catch (e) {
          console.log(e)
        }
      },
      async editPost({ commit, state }, postData) {
        try {
          const res = await this.$axios.$put(`${this.$config.baseURL}/posts/${postData.id}.json?auth=${state.token}`, postData)
          commit('editPost', postData)
        } catch (e) {
          console.log(e)
        }
      },
      async login({ commit }, loginData) {
        try {
          const payload = {
            email: loginData.email,
            password: loginData.password,
            returnSecureToken: true
          }
          const data = await this.$axios.$post(this.$config.loginURL, payload)
          localStorage.setItem('token', data.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + +data.expiresIn * 1000)
          Cookie.set('jwt', data.idToken)
          Cookie.set('jwtExpiration', new Date().getTime() + +data.expiresIn * 1000)
          commit('setToken', data.idToken)
        } catch (e) {
          console.log(e.response.data.error.message)
        }
      },
      logout({ commit }) {
        Cookie.remove('jwt')
        Cookie.remove('jwtExpiration')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
        commit('clearToken')
      },
      initAuth({ commit, dispatch }, req) {
        let token
        let tokenExpiration
        if (req) {
          if (!req.headers.cookie) return
          const tokenCookie = req.headers.cookie.split(';').find(cookie => {
            cookie.trim().startsWith('jwt=')
          })
          if (!tokenCookie) return
          token = tokenCookie.split('=')[1]
          tokenExpiration = req.headers.cookie.split(';').find(cookie => {
            cookie.trim().startsWith('jwtExpiration=')
          }).split('=')[1]
        } else {
          token = localStorage.getItem('token')
          tokenExpiration = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > +tokenExpiration || !token) {
          dispatch('logout')
          return
        }
        commit('setToken', token)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuth(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
