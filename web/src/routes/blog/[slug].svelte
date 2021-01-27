<script context="module" lang="ts">
	import { client } from '../../components/sanityClient'
	let post
	export async function preload({ params }) {
		const { slug } = params
		const query = `*[slug.current == "${slug}"]`;
		
		const res = await client.fetch(query).then(data => {
            post = data[0];
        });
    return { post };
	}
</script>

<script lang="ts">
	import snarkdown from 'snarkdown';
	export let post: { slug: string; title: string, body: string };
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html snarkdown(post.body)}
</div>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>