import './assets/scss/main.scss';

import Vue from 'vue';

import App from './App.vue';
import Chakra from '@chakra-ui/vue';
import { customIcons, customTheme } from './assets/js/custom-theme.js';

Vue.use(Chakra, {
	extendTheme: customTheme,
	icons: {
		extend: {
			...customIcons,
		},
	},
});

const app = new Vue({
	render: (h) => h(App),
});

app.$mount('#app');
