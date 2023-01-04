<script lang="ts">
	let email = 'info@marmista.co';
	let phone = '+201229994355';
	let phLink = `tel:${phone}`;
	let emLink = `mailto:${email}`;
</script>

<div class="help">
	<div class="help_section">
		<h3 class="help_title">call us:</h3>
		<a href={phLink} class="help_link">+20 122 999 4355</a>
	</div>
	<div class="help_section">
		<h3 class="help_title">inquiries:</h3>
		<a href={emLink} class="help_link">contact@marmista.co</a>
	</div>
</div>

<style lang="scss">
	.help {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		&_section {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 8px;
			font-family: Arial, Helvetica, sans-serif;
		}
		&_title {
			font-size: 18px;
			font-weight: 600;
			text-transform: capitalize;
			color:var(--text-3)
		}
		&_link {
			font-size: 18px;
			text-transform: lowercase;
			color:var(--text-1)
		}
	}
	@media screen and (min-width: 768px) {
		.help{
			flex-direction: row;
			gap: 80px;
			&_section{
			}
			&_title{
				font-size:24px;
			}
			&_link{
				font-size: 20px;
				&:hover{
					cursor: pointer;
					text-decoration: underline;
					color: var(--accent);
				}
			}
		}
	}
</style>
