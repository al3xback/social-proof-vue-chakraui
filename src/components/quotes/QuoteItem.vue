<template>
	<c-box
		as="figure"
		flex="1"
		:mt="quote.style.marginTop"
		px="8"
		py="10"
		bg="magenta.400"
		rounded="lg"
		fontSize="csm"
		color="white">
		<c-flex align="center">
			<c-image
				:src="require(`@/assets/images/${authorAvatar}.jpg`)"
				w="10"
				h="10"
				rounded="full"
				alt="Colton" />
			<c-box ml="6">
				<c-heading as="h3" fontSize="csm" lineHeight="1.15">{{
					quote.author.name
				}}</c-heading>
				<c-text mt="0.15rem" color="soft-pink.400">{{
					quote.author.status
				}}</c-text>
			</c-box>
		</c-flex>
		<c-box as="blockquote" class="blockquote" mt="6">
			<c-text letterSpacing="-0.018em">
				{{ quote.author.quoteText }}
			</c-text>
		</c-box>
	</c-box>
</template>

<script>
export default {
	props: ['quote'],
	computed: {
		authorAvatar() {
			const { name } = this.quote.author;
			const firstName = name.split(' ')[0].toLowerCase();
			return firstName;
		},
	},
};
</script>

<style scoped lang="scss">
.blockquote p::before {
	content: '\201C';
}

.blockquote p::after {
	content: '\201D';
}
</style>
