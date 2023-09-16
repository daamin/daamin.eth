<script>
	import styles from '../../css/typing.css?module';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { currentpage } from '$lib/stores.js';
	let show = false;
	onMount(() => {
		currentpage.set('homepage');
		show = true;
	});
</script>

<div class="container">
	{#if show}
		<div
			class="maintext"
			transition:blur={{
				delay: 0,
				duration: 500,
				easing: quintOut
			}}
			href="/"
		>
			<span class="cmd">></span>
			<span id="typewriter" />
			<span class="blinking">_</span>
		</div>
	{/if}
</div>
