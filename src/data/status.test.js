import { test, expect } from 'bun:test';
import { sectors } from './sectors';
import { locations } from './locations';
test('Unconfirmed services are not presented as active', () => {
 expect(sectors.flatMap(s => s.services).length).toBe(20);
 for (const service of sectors.flatMap(s => s.services)) expect(service.status).toBe('en developpement');
});
test('Beni, Goma and Lubumbashi remain development zones, not open agencies', () => {
 for (const city of ['Beni', 'Goma', 'Lubumbashi']) {
  const location = locations.find(l => l.city === city);
  expect(location?.status).toBe('en developpement');
  expect(location?.type).toBe('zone de développement');
  expect(location?.address).toBeNull();
 }
});
