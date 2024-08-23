<script lang="ts">
	import FacebookIcon from '$svg/facebook-f-brands-solid.svg?component';
	import TwitterIcon from '$svg/x-twitter-brands-solid.svg?component';
	import LinkedInIcon from '$svg/linkedin-in-brands-solid.svg?component';
	import EmailIcon from '$svg/envelope-solid.svg?component';

	const linkConfig = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjeffreybirkel.org',
			Icon: FacebookIcon,
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

<div class="share">
	<div class="share-text">Share:</div>
	<ul>
		{#each linkConfig as { name, url, Icon }}
			<li>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`share via ${name}`}
				>
					<Icon fill="currentColor" height="1.2rem" />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@import '../mixins.scss';

	.share {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.share-text {
		display: none;
	}

	@include breakpoint-xs {
		.share-text {
			display: block;
		}
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: black;
		border-radius: 50%;
		height: 40px;
		width: 40px;
		color: var(--color-white);
		transition: color 0.2s ease-out;
	}

	a:hover {
		color: var(--color-accent);
	}

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		margin: 0;
		padding: 0;
	}

	@include breakpoint-xs {
		ul {
			gap: var(--spacing-sm);
		}
	}
</style>
