// https://api1.artemisuat.cynopsis.co/api/comment/HIT/70/COMMENT?sort=createdAt&direction=desc

import ArtemisHeader from "../../../shared/ArtemisHeader"

import { TResPostComment } from "./TResPostComment"

export default async function getComment(args: {
  auth: {
    token: string
  },
  body: {
    /**
     * objectId is child of screen result
     */
    objectId: number
    content: string
  }
}): Promise<TResPostComment> {
  // handle mandatory fields
  if (!args.body.objectId) {
    throw new Error("body.objectId is required")
  }
  if (!args.body.content) {
    throw new Error("body.content is required")
  }

  const headers = ArtemisHeader()
  headers.append("Authorization", "Bearer " + args.auth.token)

  const url = new URL(process.env.ARTEMIS_API + "/comment/HIT")

  const result = await fetch(url.toString(), {
    headers,
    method: "POST",
    body: JSON.stringify([
      {
        objectId: args.body.objectId,
        content: args.body.content
      }
    ])
  }).then((res) => res.json()) as Promise<TResPostComment>
  return result
}