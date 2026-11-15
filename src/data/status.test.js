import { test, expect } from 'bun:test';
import { sectors } from './sectors';
import { locations } from './locations';
test('Unconfirmed services are not presented as active', () => {
 expect(sectors.flatMap(s => s.services).length).toBe(20);
 for (const service of sectors.flatMap(s => s.services)) expect(service.status).toBe('en developpement');
});
test('Confirmed Beni and Goma locations are active, without activating unconfirmed services', () => {
 for (const city of ['Beni', 'Goma']) {
  const location = locations.find(l => l.city === city);
  expect(location?.status).toBe('actif');
  expect(location?.type).toBe('agence active');
  expect(location?.services).toEqual([]);
 }
 expect(locations.find(l => l.city === 'Lubumbashi')?.status).toBe('en developpement');
});
