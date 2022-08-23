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
      },
      addPost({commit}, postData) {
          return axios.post('https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts.json', postData).then(res => {
            console.log(res)
            commit('addPost', {id: res.data.name, ...postData})
          }).catch(e => {
            console.log(e)
          })
      },
      editPost({commit}, postData) {
        return axios.put(`https://first-nuxt-app-a32f8-default-rtdb.firebaseio.com/posts/${postData.id}.json`, postData).then(res => {
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
