import { test, expect } from 'bun:test';
import { sectors } from './sectors';
import { locations } from './locations';
const active = {
 "Gardiennage — LWA.GO.KAS SECURITY": ['Butembo'],
 'Pharmacie New Hope in Life': ['Goma'],
 "Laboratoire d'analyses biomédicales": ['Goma'],
 "Service d'ambulance": ['Butembo'],
 'Transport médical': ['Butembo'],
 'Formation professionnelle et emploi': undefined,
 'Salon de coiffure': undefined,
 'Secrétariat public': undefined,
};
test('Only company-confirmed services are active, in their confirmed cities', () => {
 for (const service of sectors.flatMap(s => s.services)) {
  if (service.name in active) { expect(service.status).toBe('actif'); expect(service.cities).toEqual(active[service.name]); }
  else expect(service.status).toBe('en developpement');
 }
 expect(sectors.flatMap(s => s.services).filter(s => s.status === 'actif').length).toBe(8);
});
test('Health vouchers are listed but not yet active', () => {
 expect(sectors.flatMap(s => s.services).find(s => s.name === 'Bons de soins')?.status).toBe('en developpement');
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
