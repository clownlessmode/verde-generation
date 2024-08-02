import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
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
  })
});
