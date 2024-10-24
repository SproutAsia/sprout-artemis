// https://api1.artemisuat.cynopsis.co/api/comment/HIT/70/COMMENT?sort=createdAt&direction=desc

import ArtemisHeader from "../../../shared/ArtemisHeader"

export default async function getComment(args: {
  auth: {
    token: string
  },
  path: {
    /**
     * objectId is child of screen result
     */
    objectId: number
    commentId: number
  }
}) {
  // handle mandatory fields
  if (!args.path.objectId) {
    throw new Error("path.objectId is required")
  }
  if (!args.path.commentId) {
    throw new Error("path.commentId is required")
  }

  const headers = ArtemisHeader()
  headers.append("Authorization", "Bearer " + args.auth.token)

  const url = new URL(process.env.ARTEMIS_API + "/comment/HIT/" + args.path.objectId + "/" + args.path.commentId)

  const result = await fetch(url.toString(), {
    headers,
    method: "DELETE"
  })
  const isSuccess = result.status === 200
  if (!isSuccess) {
    throw new Error("Failed to delete comment")
  }
  return isSuccess
}
