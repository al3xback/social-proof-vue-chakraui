<template>
	<footer>
		<base-container>
			<p>
				Challenge by
				<base-button
					to="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					>Frontend Mentor</base-button
				>
				. Coded by
				<base-button
					to="https://github.com/al3xback"
					rel="noopener"
					target="_blank"
					>al3xback</base-button
				>.
			</p>
		</base-container>
	</footer>
</template>

<style scoped lang="scss">
footer {
	flex: none;
	padding: em(12, 12) 0;
	font-size: em(12);
	font-weight: $fw-300;
	text-align: center;
}
</style>
