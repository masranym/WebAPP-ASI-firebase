import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import {store} from './store'
import firebase from 'firebase'
import {firebaseConfig} from './config'


Vue.use(Vuetify)
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */

const unsubscribe = firebase
  .auth()
  .onAuthStateChanged((firebaseUser) => {
    new Vue({
      el: '#app', router, store, template: '<App/>', components: {
        App
      },
      created() {
        store.dispatch('autoSignIn', firebaseUser)
      }
    })
    new Vue({
      el: '#app1',
      data () {
        return {
          card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
        }
      }
    })
   new Vue({
    el: '#app2',
    data () {
      return {
        title: 'Your Logo'
      }
    }
  })

    unsubscribe()
  })


