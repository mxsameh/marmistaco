<script lang="ts">
	import FooterHelp from './FooterHelp.svelte';
	import FooterSocial from './FooterSocial.svelte';
</script>

<div class="footer">
	<h2 class="footer_title">marmista</h2>
	<nav class="footer_nav">
		<a class="footer_link" href="/products">products</a>
		<a class="footer_link" href="/gallery">gallery</a>
		<a class="footer_link" href="/cotact">contact</a>
	</nav>

	<div class="section">
		<h3 class="section_title">need help ?</h3>
		<FooterHelp />
	</div>

	<div class="section">
		<h3 class="section_title">connect with us</h3>
		<FooterSocial />
	</div>
</div>

<style lang="scss">
	:root {
		--footer-height: 524px;
	}
	.footer {
		padding: 32px 16px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		&_title {
			font-size: 48px;
			font-weight: 500;
			text-transform: capitalize;
			color: var(--text-1);
		}
		&_nav {
			margin-top: 32px;
			display: flex;
			gap: 32px;
			flex-wrap: wrap;
		}
		&_link {
			font-size: 24px;
			font-weight: 400;
			text-transform: capitalize;
			color: var(--text-2);
		}
	}
	.section {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		&_title {
			font-size: 24px;
			font-weight: 500;
			text-transform: uppercase;
			color: var(--text-1);
		}
	}

	@media screen and (min-width: 768px) {
		:root {
			--footer-height: 529px;
		}
		.footer {
			&_title {
				font-size: 64px;
			}
			&_nav {
				gap: 80px;
			}
			&_link{
				&:hover{
					color: var(--accent);
					text-decoration: line-through;
				}
			}
		}
		.section {
			margin-top: 48px;
		}
	}
</style>
