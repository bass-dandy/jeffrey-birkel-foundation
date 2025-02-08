<script lang="ts">
	import Dropdown from './dropdown.svelte';
	import FacebookIcon from '$svg/facebook-f-brands-solid.svg?component';
	import InstagramIcon from '$svg/instagram-brands-solid.svg?component';
	import YouTubeIcon from '$svg/youtube-brands-solid.svg?component';
	import StravaIcon from '$svg/strava-brands-solid.svg?component';
	import FollowIcon from '$svg/user-plus-solid.svg?component';

	const linkConfig = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/jfbfound',
			Icon: FacebookIcon,
		},
		{
			name: 'Instagram',
			url :'https://www.instagram.com/jfbfound/',
			Icon: InstagramIcon,
		},
		{
			name: 'YouTube',
			url :'https://www.youtube.com/@jfbfound',
			Icon: YouTubeIcon,
		},
		{
			name: 'Strava (Matt)',
			url: 'https://www.strava.com/athletes/18893869',
			Icon: StravaIcon,
		},
		{
			name: 'Strava (Mike)',
			url: 'https://www.strava.com/athletes/26909400',
			Icon: StravaIcon,
		},
	];
</script>

<Dropdown>
	<div slot="button" class="share-button">
		<div class="button-icon">
			<FollowIcon fill="currentColor" height="1.2rem" />
		</div>
		Follow us!
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
		width: 220px;
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
