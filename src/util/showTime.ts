import { getTimeFormat } from '@fortissimo/util';
import type { TimeShowProps } from '@fortissimo/component';

export function showTime(options: TimeShowProps): string {
  if (!options.value) return '';
  let format = options.format;
  if (!format) format = getTimeFormat(options.precision);
  return options.value.format(format);
}
