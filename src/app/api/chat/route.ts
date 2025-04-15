// /app/api/simpleFlow/route.ts
import { simpleFlow } from '@src/utils/genkit';
import { appRoute } from '@genkit-ai/next';

export const POST = appRoute(simpleFlow);