<template>
	<c-stack
		:mt="{ base: 12, lg: 18 }"
		:flexDir="{ lg: 'row' }"
		alignItems="flex-start"
		:gridGap="{ base: 4, lg: 7 }"
		spacing="0">
		<quote-item
			v-for="quote in quotes"
			:key="quote.id"
			:quote="quote"></quote-item>
	</c-stack>
</template>

<script>
import QuoteItem from './QuoteItem.vue';

export default {
	components: {
		QuoteItem,
	},
	data() {
		return {
			quotes: [
				{
					id: 'q1',
					author: {
						name: 'Colton Smith',
						status: 'Verified Buyer',
						quoteText:
							'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
					},
					style: {
						marginTop: {
							base: 0,
							lg: 0,
						},
					},
				},
				{
					id: 'q2',
					author: {
						name: 'Irene Roberts',
						status: 'Verified Buyer',
						quoteText:
							'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
					},
					style: {
						marginTop: {
							base: 0,
							lg: 4,
						},
					},
				},
				{
					id: 'q3',
					author: {
						name: 'Anne Wallace',
						status: 'Verified Buyer',
						quoteText:
							'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
					},
					style: {
						marginTop: {
							base: 0,
							lg: 8,
						},
					},
				},
			],
		};
	},
};
</script>
