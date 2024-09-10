import { createSafeContext } from '../utils';
import { type OverlayData } from './store';

export const [OverlayContextProvider, useOverlayContext] = createSafeContext<OverlayData>('overlay-kit/OverlayContext');

export function useCurrentOverlay() {
  return useOverlayContext().current;
}

export function useOverlayData() {
  return useOverlayContext().overlayData;
}
