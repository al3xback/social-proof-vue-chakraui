<template>
	<c-stack
		:flexDir="{ lg: 'row' }"
		alignItems="center"
		:gridGap="{ base: 3, lg: 8 }"
		w="full"
		:maxW="{ lg: '26rem' }"
		:px="{ base: 5, lg: 8 }"
		py="4"
		:mr="review.style.marginRight"
		bg="gray.300"
		rounded="lg">
		<review-rating :value="review.rating"></review-rating>
		<c-text
			fontSize="csm"
			fontWeight="bold"
			color="magenta.400"
			lineHeight="1.15"
			>Rated {{ review.rating }} Stars in {{ review.category }}</c-text
		></c-stack
	>
</template>

<script>
import ReviewRating from './ReviewRating.vue';

export default {
	components: {
		ReviewRating,
	},
	props: ['review'],
};
</script>
