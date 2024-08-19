import { v } from "convex/values";
import { mutation, query } from "./_generated/server";



export const listGalleryItems = query({
  handler: async (ctx) => {
    const galleryItems = await ctx.db.query("gallery").collect();
    return galleryItems;
  },
});

// Create a gallery item
export const createGalleryItem = mutation({
  args: {
    type: v.union(v.literal("life"), v.literal("production")),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    const galleryItemId = await ctx.db.insert("gallery", args);
    return galleryItemId;
  },
});

// Update a gallery item
export const updateGalleryItem = mutation({
  args: {
    id: v.id("gallery"),
    type: v.optional(v.union(v.literal("life"), v.literal("production"))),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

// Delete a gallery item
export const deleteGalleryItem = mutation({
  args: { id: v.id("gallery") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
export const getGalleryItemById = query({
  args: { id: v.id("gallery") },
  handler: async (ctx, args) => {
    const galleryItem = await ctx.db.get(args.id);
    return galleryItem;
  },
});
