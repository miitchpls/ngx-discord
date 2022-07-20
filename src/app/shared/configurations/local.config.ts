import { Config } from '../interfaces/config.interface';
import { protocol } from '../interfaces/protocol.interface';

const PROTOCOL: protocol = 'http';
const BACKEND_PORT: number = 8080;
const API_ALIAS: string = '/api';

const BACKEND_URL: string = `localhost:${BACKEND_PORT}`;
const BASE_URL: string = `${PROTOCOL}://${BACKEND_URL}${API_ALIAS}`;

export const localConfig: Config = {
  endpoints: {
    getMe: `${BASE_URL}/getMe`,
    getServers: `${BASE_URL}/getServers`,
  },
};
