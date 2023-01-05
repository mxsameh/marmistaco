<script lang="ts">
	import ContactSocials from "$lib/components/contact-page/ContactSocials.svelte";

	const phones = ['+20 111 730 6241', '+20 122 999 4355', '+20 11 2222 8444'];
	const emails = ['info@marmista.co', 'contact@marmista.co'];
	// let phLink = `tel:${phone}`;
</script>

<div class="contact">
	<h1 class="contact_title">hi there</h1>
	<p class="contact_text">
		We are always happy to help you get the best quality marble in egypt to add that luxurious touch
		to your place
	</p>

	<div class="card">
		<h2 class="card_title">call us</h2>
		{#each phones as phone}
			<a href={`tel:${phone.replace(' ', '')}`} class="card_link">
				<svg class="card_icon" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M15.4467 25.1767C18.8067 31.78 24.22 37.17 30.8233 40.5533L35.9567 35.42C36.5867 34.79 37.52 34.58 38.3367 34.86C40.95 35.7233 43.7733 36.19 46.6667 36.19C47.95 36.19 49 37.24 49 38.5233V46.6667C49 47.95 47.95 49 46.6667 49C24.7567 49 7 31.2433 7 9.33333C7 8.05 8.05 7 9.33333 7H17.5C18.7833 7 19.8333 8.05 19.8333 9.33333C19.8333 12.25 20.3 15.05 21.1633 17.6633C21.42 18.48 21.2333 19.39 20.58 20.0433L15.4467 25.1767Z"
					/>
				</svg>
				<span class="card_text">{phone}</span>
			</a>
		{/each}
	</div>
	<div class="card">
		<h2 class="card_title">email us</h2>
		{#each emails as email}
			<a href={`mailto:${email}`} class="card_link">
				<svg class="card_icon" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M51.3333 14.0002C51.3333 11.4335 49.2333 9.3335 46.6666 9.3335H9.33329C6.76663 9.3335 4.66663 11.4335 4.66663 14.0002V42.0002C4.66663 44.5668 6.76663 46.6668 9.33329 46.6668H46.6666C49.2333 46.6668 51.3333 44.5668 51.3333 42.0002V14.0002ZM46.6666 14.0002L28 25.6668L9.33329 14.0002H46.6666ZM46.6666 42.0002H9.33329V18.6668L28 30.3335L46.6666 18.6668V42.0002Z"
					/>
				</svg>
				<span class="card_text">{email}</span>
			</a>
		{/each}
	</div>

  <div class="card">
    <h1 class="card_title">follow us</h1>
    <ContactSocials />
  </div>
</div>

<style lang="scss">
	.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
		&_title {
			text-transform: uppercase;
			font-size: clamp(40px, 8vw, 80px);
			color: var(--text-1);
		}
		&_text {
			font-size: 18px;
			color: var(--text-2);
			margin-top: 24px;
      text-align: center;
      max-width: 850px;
      margin-bottom: 24px;
		}
	}

	.card {
		background-color: var(--background-1);
		padding: 24px 16px;
    margin-top: 40px;
		border-radius: 24px;
    width: clamp(0px ,100% ,600px);
		&_title {
			color: var(--text-3);
			text-transform: uppercase;
			font-size: 32px;
			text-align: center;
		}
		&_link {
			display: flex;
			gap: 8px;
			margin: 16px auto 0;
			width: fit-content;
			&:first-of-type {
				margin: 24px auto 0;
			}
		}
		&_icon {
			width: 28px;
			fill: var(--text-3);
		}
		&_text {
			font-size: 20px;
			font-family: Arial, Helvetica, sans-serif;
			color: var(--text-1);
		}
	}

  @media screen and (min-width: 1024px){
    .contact{
      &_text{
        font-size: 24px;
      }
    }
  }
</style>
