<template>
	<c-theme-provider>
		<c-reset />

		<the-header></the-header>
		<the-main></the-main>
		<the-footer></the-footer>
	</c-theme-provider>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheMain from './components/layout/TheMain.vue';
import TheFooter from './components/layout/TheFooter.vue';

export default {
	components: {
		TheHeader,
		TheMain,
		TheFooter,
	},
	name: 'App',
};
</script>

<style scoped>
#__chakra-app {
	display: flex;
	flex-direction: column;
	flex: auto;
}
</style>
