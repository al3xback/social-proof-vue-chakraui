<template>
	<c-list
		d="flex"
		gridGap="2"
		alignItems="center"
		:justifyContent="{ base: 'center' }">
		<c-list-item v-for="rating in ratings" :key="rating"
			><c-icon
				d="block"
				size="4"
				name="star"
				:color="setRatingColor(rating, value)"
		/></c-list-item>
	</c-list>
</template>

<script>
export default {
	data() {
		return {
			ratings: [1, 2, 3, 4, 5],
		};
	},
	props: ['value'],
	methods: {
		setRatingColor(rating, val) {
			const ratingColor = rating <= val ? '#EF9546' : '#bbbbbb';
			return ratingColor;
		},
	},
};
</script>
