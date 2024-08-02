import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";
const es = initEdgeStore.create();
/**
 * This is the main router for the Edge Store buckets.
 */
import { EdgeStoreProvider } from "@edgestore/server/providers/edgestore";

const edgeStoreRouter = es.router({
  publicFiles: es.fileBucket(),
});
const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
  provider: EdgeStoreProvider({
    accessKey: process.env.EDGE_STORE_ACCESS_KEY!,
    secretKey: process.env.EDGE_STORE_SECRET_KEY!,
  }),
});
export { handler as GET, handler as POST };
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
