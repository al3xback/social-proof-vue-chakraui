<template>
	<c-box
		as="main"
		d="flex"
		flex="auto"
		justifyContent="center"
		alignItems="center"
		px="6"
		py="12">
		<c-box :maxW="{ base: '420px', lg: '1110px' }" mx="auto">
			<c-flex
				:flexDir="{ base: 'column', lg: 'row' }"
				:alignItems="{ base: 'initial', lg: 'center' }"
				:textAlign="{ base: 'center', lg: 'left' }">
				<c-box :flex="{ base: 'initial', lg: '1' }">
					<c-heading
						:fontSize="{ base: '2rem', lg: '5xl' }"
						color="magenta.400"
						lineHeight="1"
						letterSpacing="-1.6px"
						>{{ title }}</c-heading
					>
					<c-text
						:mt="{ base: '4', lg: '5' }"
						fontWeight="medium"
						letterSpacing="-0.034em">
						{{ subtitle }}
					</c-text>
				</c-box>

				<reviews-list></reviews-list>
			</c-flex>

			<quotes-list></quotes-list>
		</c-box>
	</c-box>
</template>

<script>
import ReviewsList from '../reviews/ReviewsList.vue';
import QuotesList from '../quotes/QuotesList.vue';

export default {
	components: {
		ReviewsList,
		QuotesList,
	},
	data() {
		return {
			title: '10,000+ of our users love our products.',
			subtitle: `We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.`,
		};
	},
};
</script>
