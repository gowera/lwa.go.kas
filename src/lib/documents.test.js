import { test, expect } from 'bun:test';
import { file } from 'bun';
import { fetchDocuments, wordpressEnabled } from './wordpress';

test('No document is invented while WordPress is not configured', async () => {
  expect(wordpressEnabled).toBe(false);
  expect(await fetchDocuments()).toEqual([]);
});

test('No PDF link is hardcoded in the site', async () => {
  for (const name of ['../pages/PortalPages.tsx', '../pages/Home.tsx', '../components/DocumentsPanel.tsx', '../data/company.ts']) {
    expect(await file(`${import.meta.dir}/${name}`).text()).not.toContain('.pdf');
  }
});
