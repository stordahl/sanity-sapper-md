<script context="module" lang="ts">
	import { client } from '../../components/sanityClient'
	let posts
	export async function preload() {
		const query = "*[_type == 'post']{_id, slug, title}";
	
    return { posts } = await client.fetch(query);
	}
</script>
<script lang="ts">
	type Slug = {
		_type: string,
		current: string,
	}
	
	export let posts: { slug: Slug; title: string }[] = [];
</script>

<h1>Recent posts</h1>

	<ul>
		{#each posts as post}
			<li><a rel="prefetch" href="blog/{post.slug.current}">{post.title}</a></li>
		{/each}
	</ul>


<svelte:head>
	<title>Blog</title>
</svelte:head>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>