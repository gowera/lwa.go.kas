import { test, expect } from 'bun:test';
import { getLocation } from './locations';

test('Butembo includes the new Katarasi site at Vutsundo', () => {
 expect(getLocation('butembo')?.sites.find(s => s.name === 'KATARASI')).toEqual({ name: 'KATARASI', address: 'Vutsundo', status: 'actif' });
});
test('Beni includes the new Mangote site without an invented address', () => {
 expect(getLocation('beni')?.sites.find(s => s.name === 'MANGOTE')).toEqual({ name: 'MANGOTE', address: null, status: 'actif' });
});
test('Withdrawal hours Monday to Friday are 09:00 to 15:30', () => {
 for (const city of ['butembo', 'beni']) expect(getLocation(city)?.withdrawalHours.find(h => h.days === 'weekdays')).toEqual({ days: 'weekdays', open: '09:00', close: '15:30' });
});
test('Butembo Saturday withdrawal hours are 09:00 to 12:00', () => {
 expect(getLocation('butembo')?.withdrawalHours.find(h => h.days === 'saturday')).toEqual({ days: 'saturday', open: '09:00', close: '12:00' });
});
test('Beni salongo exception is 10:00 to 13:00, interpreted as Saturday', () => {
 expect(getLocation('beni')?.withdrawalHours.find(h => h.days === 'saturday')).toEqual({ days: 'saturday', open: '10:00', close: '13:00', note: 'Suite au salongo de Beni' });
});
test('Goma address is Karisimbi, Mabanga Nord, Osso 2, number 153', () => {
 expect(getLocation('goma')?.address).toBe('Karisimbi, Mabanga Nord, Osso 2, N° 153');
});
test('Goma is open 08:00 to 19:00 seven days a week', () => {
 expect(getLocation('goma')?.hours).toBe('08h00–19h00 · 7 jours sur 7');
});
test('Goma contact number is the supplied number', () => {
 expect(getLocation('goma')?.phone).toBe('+243 978 292 674');
});
test('Lubumbashi supplied address is retained without inventing hours', () => {
 expect(getLocation('lubumbashi')?.address).toBe('Commune Rwashi, quartier du Congo');
 expect(getLocation('lubumbashi')?.hours).toBeNull();
});