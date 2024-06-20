// # jest.config.ts
import type { Config } from '@jest/types';
import dotenv from 'dotenv';

// use .env
dotenv.config();

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

export default config;