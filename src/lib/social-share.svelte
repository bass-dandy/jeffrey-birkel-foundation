<script lang="ts">
	import FacebookIcon from '$svg/facebook-f-brands-solid.svg?component';
	import TwitterIcon from '$svg/x-twitter-brands-solid.svg?component';
	import LinkedInIcon from '$svg/linkedin-in-brands-solid.svg?component';
	import EmailIcon from '$svg/envelope-solid.svg?component';

	const linkConfig = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/sharer/sharer.php?u=https://jeffreybirkel.com',
			Icon: FacebookIcon,
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/intent/tweet?url=https://jeffreybirkel.com',
			Icon: TwitterIcon,
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://jeffreybirkel.com',
			Icon: LinkedInIcon,
		},
		{
			name: 'Email',
			url: 'mailto:?subject=Donate%20to%20ALS%20research%20and%20help%20Jeff%20get%20to%20Boston&body=https://jeffreybirkel.com',
			Icon: EmailIcon,
		},
	];
</script>

<div>
	Spread the word:
	<ul>
		{#each linkConfig as { name, url, Icon }}
			<li>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<Icon fill="white" height="1rem" />
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		background: black;
		border-radius: 50%;
		height: 32px;
		width: 32px;
	}

	ul {
		list-style-type: none;
		display: flex;
		align-items: center;
		gap: 4px;
		margin: 8px 0 0 0;
		padding: 0;
	}
</style>
