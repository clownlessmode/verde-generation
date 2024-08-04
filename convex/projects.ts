import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export const createProject = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    mainImage: v.string(),
    subImage: v.string(),
    dates: v.optional(
      v.array(
        v.object({
          timestart: v.string(),
          timeend: v.string(),
          compnames: v.string(),
          names: v.string(),
        })
      )
    ),
    stats: v.array(
      v.object({
        title: v.string(),
        value: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert("projects", {
      title: args.title,
      description: args.description,
      mainImage: args.mainImage,
      subImage: args.subImage,
      dates: args.dates,
      stats: args.stats,
    });
    return projectId;
  },
});

export const listProjects = query({
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    return projects;
  },
});

export const getProject = query({
  args: { projectId: v.id("projects") },
  handler: async (ctx, args) => {
    const project = await ctx.db.get(args.projectId);
    return project;
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    mainImage: v.optional(v.string()),
    subImage: v.optional(v.string()),
    stats: v.optional(
      v.array(
        v.object({
          title: v.string(),
          value: v.string(),
        })
      )
    ),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const getProjectByTitle = query({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .filter((q) => q.eq(q.field("title"), args.title))
      .collect();
    return projects.length > 0 ? projects[0] : projects[0];
  },
});
