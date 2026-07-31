---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'My Third Blog Post'
pubDate: 2025-07-15
description: 'I finished the Astro tutorial!'
author: 'Jungwoo'
image:
  url: 'https://docs.astro.build/assets/full-logo-light.png'
  alt: 'The full Astro logo.'
tags: ["astro", "islands", "successes"]
---

I did it! I completed the Astro tutorial and added an interactive island to my site.

## Final takeaways

1. **Dynamic routing**: Using `getStaticPaths()`, I built individual pages for each tag used across my posts.

2. **RSS feed**: I added an RSS feed so readers can follow along.

3. **Islands**: I brought in an interactive Preact component, then rebuilt a similar interaction using only vanilla JavaScript to avoid shipping extra framework code.

On to building more with Astro!
