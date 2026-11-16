/* Educational, dimensionless model. These are NOT NASA telemetry values.
 * Time advances only after a visitor chooses a command. No reaction-time penalty.
 * Dust blocks solar light; the radio budget degrades because energy is scarce,
 * not because dust is an opaque wall to radio waves.
 */
export const ACTIONS = Object.freeze(['instruments', 'economy', 'transmit', 'conserve', 'emergency']);
export function createSimulation() {
  return { turn: 0, energy: 78, visibility: 84, link: 90, temperature: -24,
    instruments: 'active', economy: false, reserve: false, emergency: false,
    packets: 0, history: [], ended: false };
}
export function canAct(s, action) {
  if (s.ended || !ACTIONS.includes(action)) return false;
  if (action === 'instruments') return s.instruments === 'active' && s.energy > 0;
  if (action === 'economy') return !s.economy && !s.emergency && s.energy > 0;
  if (action === 'emergency') return !s.emergency && s.energy >= 3;
  return true;
}
export function decide(previous, action) {
  if (!canAct(previous, action)) return previous;
  const s = { ...previous, history: [...previous.history] };
  s.turn++;
  let cost = 0, outcome = action;
  if (action === 'instruments') s.instruments = 'standby';
  if (action === 'economy') s.economy = true;
  if (action === 'conserve') s.reserve = true;
  if (action === 'emergency') {
    s.emergency = true; s.economy = true; s.instruments = 'safe'; cost = 3;
  }
  if (action === 'transmit') {
    cost = 12;
    if (s.energy >= 24 && s.link >= 25 && !s.emergency) {
      s.packets++; outcome = 'transmitted';
    } else outcome = 'unanswered';
  }
  const load = (s.emergency ? 2 : 6) + (s.instruments === 'active' ? 5 : 0) + (s.economy ? 0 : 3);
  const solar = [0, 5, 3, 1, 0, 0][s.turn];
  // A conservation command lowers this interval's housekeeping load.
  const saving = action === 'conserve' ? 3 : 0;
  s.energy = Math.max(0, s.energy - Math.max(1, load - solar - saving) - cost);
  if (s.energy === 0) s.instruments = 'offline';
  s.visibility = [84, 62, 38, 18, 6, 1][s.turn];
  const supply = Math.min(1, s.energy / 35);
  s.link = Math.max(0, Math.round(90 * supply - s.turn * 4 - (s.emergency ? 35 : 0)));
  // Fictional internal temperature proxy; not a Mars weather prediction.
  s.temperature = Math.round(-24 - s.turn * 1.5 - (s.economy ? 3 : 0) - (s.energy < 25 ? 5 : 0));
  s.ended = s.turn >= 5;
  s.history.push({ turn: s.turn, action, outcome, energy: s.energy, packets: s.packets });
  return s;
}
