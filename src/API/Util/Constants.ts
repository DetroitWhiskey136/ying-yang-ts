import { resolve } from 'path';

export const DATA_DIRECTORY = resolve(process.cwd(), 'src', 'Dashboard');

export const TEMPLATE_DIRECTORY = resolve(process.cwd(), DATA_DIRECTORY, 'templates');
