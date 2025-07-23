<script lang="ts">
	export let src = '';
	export let srcset = '';
	export let alt = '';
	export let width = '';
	export let height  = '';
</script>

<img src={src} srcset={srcset} alt={alt} width={width} height={height} />

<style lang="scss">
	@import '../mixins.scss';

	img {
		display: block;
		width: 100%;
		height: auto;
		flex-shrink: 0;
	}

	@include breakpoint-xs {
		img {
			position: relative;
			top: 50px;
			width: calc(100% - 50px);
			border: 5px solid var(--color-white);
			box-shadow: 50px -50px 0 var(--color-secondary);
			margin-left: 50px;
			left: -50px;
			box-sizing: border-box;
		}
	}
</style>
