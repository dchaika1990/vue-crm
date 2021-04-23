import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from "./router"
import store from './store'
import dateFilter from "./filters/data.filter"
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);


firebase.initializeApp({
	apiKey: "AIzaSyCjsiCksz80q1Eyl-libLNU1t2jNv654nM",
	authDomain: "js-vue-crm.firebaseapp.com",
	projectId: "js-vue-crm",
	storageBucket: "js-vue-crm.appspot.com",
	messagingSenderId: "677113620098",
	appId: "1:677113620098:web:ceeda7161f6ebfe3e1769b"
});

let app;

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}
})
