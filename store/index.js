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
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIdx = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIdx] = editPost
      }
    },
    actions: {
      nuxtServerInit({commit}, context) {
        return axios.get(`${process.env.baseUrl}/posts.json`).then(res => {
          const posts = []
          for (const key in res.data) {
            posts.push({ id: key, ...res.data[key] })
          }
          commit('setPosts', posts)
        }).catch(e => context.error(e))
      },
      setPosts({commit}, posts) {
        commit('setPosts', posts)
      },
      addPost({commit}, postData) {
          return axios.post(`${process.env.baseUrl}/posts.json`, postData).then(res => {
            console.log(res)
            commit('addPost', {id: res.data.name, ...postData})
          }).catch(e => {
            console.log(e)
          })
      },
      editPost({commit}, postData) {
        return axios.put(`${process.env.baseUrl}/posts/${postData.id}.json`, postData).then(res => {
          console.log(res)
          commit('editPost', postData)
        }).catch(e => {
          console.log(e)
        })
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
