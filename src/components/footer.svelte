<script>
	import { assets } from '$app/paths';
	import { Tooltip } from 'flowbite-svelte';
	import { currentpage } from '$lib/stores.js';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

{#if show}
	<footer
		transition:fade={{
			delay: 0,
			duration: 1000,
			easing: quintOut
		}}
	>
		{#if $currentpage == 'about'}
			<a id="homepage" href="./"><img src="{assets}/homepage.svg" alt="Homepage" /></a>
			<Tooltip triggeredBy="#homepage">Homepage</Tooltip>
		{:else}
			<a id="about" href="./about"><img src="{assets}/profile.svg" alt="About Me" /></a>
			<Tooltip triggeredBy="#about">About Me</Tooltip>
		{/if}
		<a id="discord" href="https://discord.com/users/446113075209306122" target="_blank"
			><img src="{assets}/discord.svg" alt="Discord" /></a
		>
		<Tooltip triggeredBy="#discord">Discord</Tooltip>
		<a id="ens" href="https://app.ens.domains/daamin.eth" target="_blank"
			><img src="{assets}/ens.svg" alt="ENS" /></a
		>
		<Tooltip triggeredBy="#ens">ENS</Tooltip>
		<a id="twitter" href="https://twitter.com/daamin_eth" target="_blank"
			><img src="{assets}/twitter.svg" alt="Twitter" /></a
		>
		<Tooltip triggeredBy="#twitter">Twitter</Tooltip>
	</footer>
{/if}
