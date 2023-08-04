import { Buffer } from 'buffer';

(window as any).global = window;
global.Buffer = Buffer;
global.process = {
  env: { DEBUG: undefined },
  version: '',
} as any;
