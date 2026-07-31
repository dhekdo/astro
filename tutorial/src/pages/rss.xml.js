import rss from '@astrojs/rss';

export async function GET(context) {
	const postImportResult = import.meta.glob('./posts/*.md', { eager: true });
	const posts = Object.values(postImportResult);

	return rss({
		title: 'My Astro Learning Blog',
		description: 'A blog about my journey learning Astro',
		site: context.site,
		items: posts.map((post) => ({
			title: post.frontmatter.title,
			pubDate: post.frontmatter.pubDate,
			description: post.frontmatter.description,
			link: post.url,
		})),
	});
}
