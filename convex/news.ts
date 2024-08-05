// news.js
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a news item
export const createNews = mutation({
  args: {
    title: v.string(),
    image: v.string(),
    main: v.string(),
  },
  handler: async (ctx, args) => {
    const newsId = await ctx.db.insert("news", {
      title: args.title,
      image: args.image,
      main: args.main,
    });
    return newsId;
  },
});

// List all news items
export const listNews = query({
  handler: async (ctx) => {
    const news = await ctx.db.query("news").collect();
    return news.map((item) => ({
      ...item,
      createdAt: item._creationTime, // включаем дату создания в возвращаемый результат
    }));
  },
});

// Get a single news item by ID
export const getNews = query({
  args: { newsId: v.id("news") },
  handler: async (ctx, args) => {
    const news = await ctx.db.get(args.newsId);
    return news;
  },
});

// Update a news item
export const updateNews = mutation({
  args: {
    id: v.id("news"),
    title: v.optional(v.string()),
    image: v.optional(v.string()),
    main: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

// Delete a news item
export const deleteNews = mutation({
  args: { id: v.id("news") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

// Get a news item by title
export const getNewsById = query({
  args: { id: v.id("news") },
  handler: async (ctx, args) => {
    const news = await ctx.db
      .query("news")
      .filter((q) => q.eq(q.field("_id"), args.id))
      .first();
    return news;
  },
});
