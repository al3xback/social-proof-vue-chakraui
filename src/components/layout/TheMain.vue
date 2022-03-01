<template>
	<main>
		<base-container>
			<base-card>
				<template #default>
					<h2 class="card__title">
						<base-button>Equilibrium #3429</base-button>
					</h2>
					<p class="card__desc">
						Our Equilibrium collection promotes balance and calm.
					</p>
					<div class="card__stats">
						<div class="card__stat card__stat-value">
							<i class="icon-ethereum" aria-hidden="true"></i>
							<span>0.041 ETH</span>
						</div>
						<div class="card__stat card__stat-countdown">
							<i class="icon-clock" aria-hidden="true"></i>
							<span>3 days left</span>
						</div>
					</div>
				</template>
				<template #foot>
					<div class="card__author">
						<figure class="card__author-avatar">
							<img
								width="33"
								height="33"
								src="@/assets/images/avatar.png"
								alt="Avatar" />
						</figure>
						<p class="card__author-text">
							Creation of
							<base-button>Jules Wyvern</base-button>
						</p>
					</div>
				</template>
			</base-card>
		</base-container>
	</main>
</template>

<style scoped lang="scss">
main,
main .container {
	display: flex;
	flex: auto;
}

main {
	padding: em(24) 0;
}

main .container {
	justify-content: center;
	align-items: center;
}

.card__title {
	margin-bottom: em(12, 22);
	line-height: em(28, 22);
	font-size: em(22);
	font-weight: $fw-600;
}

.card__desc {
	margin-bottom: em(16, 18);
	line-height: em(26, 18);
	font-size: em(18);
	font-weight: $fw-300;
}

.card__stats,
.card__author-text {
	font-size: em(15);
}

.card__stats {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card__stat {
	display: flex;
	align-items: center;
}

.card__stat-value {
	font-weight: $fw-600;
	color: $primary-2;
}

.card__stat i {
	margin-right: em(7.7);
}

.card__author {
	display: flex;
	align-items: center;
	font-size: em(16);
}

.card__author-avatar {
	flex-shrink: 0;
	margin-right: em(16);
}

.card__author-avatar img {
	width: em(33);
	height: auto;
	border: 1px solid $neutral-4;
	border-radius: 50%;
}

@media (min-width: 48em) {
	.card__title {
		margin-bottom: em(16, 22);
	}

	.card__desc {
		margin-bottom: em(24, 18);
	}

	.card__stats,
	.card__author-text {
		font-size: 1em;
	}
}
</style>
