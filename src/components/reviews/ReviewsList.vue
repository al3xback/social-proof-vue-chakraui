<template>
	<c-stack
		:mt="{ base: 8, lg: 0 }"
		:flex="{ base: 'initial', lg: '1.5' }"
		gridGap="4"
		:alignItems="{ lg: 'flex-end' }">
		<review-item
			v-for="review in reviews"
			:key="review.id"
			:review="review"></review-item>
	</c-stack>
</template>

<script>
import ReviewItem from './ReviewItem.vue';

export default {
	components: {
		ReviewItem,
	},
	data() {
		return {
			reviews: [
				{
					id: 'r1',
					category: 'Reviews',
					rating: 5,
					style: {
						marginRight: {
							base: 0,
							lg: 24,
						},
					},
				},
				{
					id: 'r2',
					category: 'Report Guru',
					rating: 5,
					style: {
						marginRight: {
							base: 0,
							lg: 12,
						},
					},
				},
				{
					id: 'r3',
					category: 'BestTech',
					rating: 5,
					style: {
						marginRight: {
							base: 0,
							lg: 0,
						},
					},
				},
			],
		};
	},
};
</script>
