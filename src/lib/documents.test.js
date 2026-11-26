import { test, expect } from 'bun:test';
import { file } from 'bun';
import { fetchDocuments, isDocumentPost, mapPost, wordpressEnabled } from './wordpress';

test('No document is invented while WordPress is not configured', async () => {
  expect(wordpressEnabled).toBe(false);
  expect(await fetchDocuments()).toEqual([]);
});

test('Only posts in the Documents, rapports category are documents', () => {
  expect(isDocumentPost({ categories: ['Documents, rapports'] })).toBe(true);
  expect(isDocumentPost({ categories: ['Non classé'] })).toBe(false);
  expect(isDocumentPost({ categories: ['Documents'] })).toBe(false);
});

test('Featured image uses the WordPress media source URL', () => {
  const post = mapPost({
    id: 1,
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://lwagokas.com/wp-content/uploads/featured.webp' }],
    },
  });

  expect(post.featuredImage).toBe('https://lwagokas.com/wp-content/uploads/featured.webp');
});

test('No PDF link is hardcoded in the site', async () => {
  for (const name of ['../pages/PortalPages.tsx', '../pages/Home.tsx', '../components/DocumentsPanel.tsx', '../data/company.ts']) {
    expect(await file(`${import.meta.dir}/${name}`).text()).not.toContain('.pdf');
  }
});
