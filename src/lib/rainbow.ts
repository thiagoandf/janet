export const RAINBOW_GRADIENT = `linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet, red)`;

export const RAINBOW_BACKGROUND_SIZE = '1200% 1200%';

export const DEFAULT_BACKGROUND_POSITION = '0% 20%';

export const RAINBOW_LOOP_POSITIONS = [
  '0% 20%',
  '40% 60%',
  '60% 80%',
  '100% 100%',
  '60% 80%',
  '40% 60%',
  '0% 20%',
];

export interface ProfileLocationState {
  backgroundPosition: string;
}

export function isProfileLocationState(
  state: unknown,
): state is ProfileLocationState {
  return (
    typeof state === 'object' &&
    state !== null &&
    typeof (state as ProfileLocationState).backgroundPosition === 'string'
  );
}
