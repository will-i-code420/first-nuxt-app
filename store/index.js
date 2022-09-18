import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      user: {}
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
      login(state, user) {
        state.user = user
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
          const data = await this.$axios.$post(`${process.env.baseURL}/posts.json?auth=${state.user.idToken}`, postData)
          commit('addPost', {id: data.name, ...postData})
        } catch (e) {
          console.log(e)
        }
      },
      async editPost({ commit, state }, postData) {
        try {
          const res = await this.$axios.$put(`${process.env.baseURL}/posts/${postData.id}.json?auth=${state.user.idToken}`, postData)
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
          const res = await this.$axios.post(process.env.loginURL, payload)
          commit('login', res.data)
        } catch (e) {
          console.log(e.response.data.error.message)
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isLoggedIn(state) {
        return !state.user ? false : true
      }
    }
  })
}

export default createStore
