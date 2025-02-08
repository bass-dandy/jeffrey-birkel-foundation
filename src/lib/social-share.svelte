<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import FacebookIcon from '$svg/facebook-f-brands-solid.svg?component';
	import BlueskyIcon from '$svg/bluesky-brands-solid.svg?component';
	import TwitterIcon from '$svg/x-twitter-brands-solid.svg?component';
	import LinkedInIcon from '$svg/linkedin-in-brands-solid.svg?component';
	import EmailIcon from '$svg/envelope-solid.svg?component';
	import ShareIcon from '$svg/share-nodes-solid.svg?component';

	const linkConfig = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjeffreybirkel.org',
			Icon: FacebookIcon,
		},
		{
			name: 'Bluesky',
			url: 'https://bsky.app/intent/compose?text=https%3A%2F%2Fjeffreybirkel.org',
			Icon: BlueskyIcon,
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fjeffreybirkel.org',
			Icon: TwitterIcon,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fjeffreybirkel.org',
			Icon: LinkedInIcon,
		},
		{
			name: 'Email',
			url: 'mailto:?subject=Donate%20to%20ALS%20research%20and%20help%20Jeff%20get%20to%20Boston&body=https%3A%2F%2Fjeffreybirkel.org',
			Icon: EmailIcon,
		},
	];
</script>

<Dropdown>
	<div slot="button" class="share-button">
		<div class="button-icon">
			<ShareIcon fill="currentColor" height="1.2rem" />
		</div>
		Share
	</div>

	<ul slot="panel">
		{#each linkConfig as { name, url, Icon }}
			<li>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{name}
					<div class="social-icon">
						<Icon fill="currentColor" height="1rem" />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Dropdown>

<style lang="scss">
	@import '../mixins.scss';

	.share-button {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.button-icon {
		display: none;
	}

	@include breakpoint-xs {
		.button-icon {
			display: flex;
			align-items: center
		}
	}

	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: var(--spacing-xs);
	}

	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background: black;
		border-radius: 50%;
		height: 35px;
		width: 35px;
		color: var(--color-white);
	}

	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-lg);
		padding: var(--spacing-xs) var(--spacing-md);
		transition: color 0.2s ease-out;
		font-size: 1.2rem;
		color: var(--color-black);
		text-decoration: none;
		border-radius: 5px;

		&:hover, &:focus {
			background: var(--color-darken);

			.social-icon {
				color: var(--color-accent);
			}
		}
	}
</style>
