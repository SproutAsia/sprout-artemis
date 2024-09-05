// https://api1.artemisuat.cynopsis.co/api/comment/HIT/70/COMMENT?sort=createdAt&direction=desc

import ArtemisHeader from "../../../shared/ArtemisHeader"

import { TResGetComment } from "./TResGetComment"

export default async function getComment(args: {
  auth: {
    token: string
  },
  path: {
    hitId?: string
  }
}): Promise<TResGetComment> {
  const headers = ArtemisHeader()
  headers.append("Authorization", "Bearer " + args.auth.token)

  const url = new URL(process.env.ARTEMIS_API + "/comment/HIT/" + args.path.hitId + "/COMMENT")
  url.searchParams.append('sort', 'createdAt')
  url.searchParams.append('direction', 'desc')

  console.log(">>> URL", url.toString())
  const result = await fetch(url.toString(), {
    headers
  }).then((res) => res.json()) as Promise<TResGetComment>
  return result
}