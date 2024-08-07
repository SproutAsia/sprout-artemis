import ArtemisHeader from "../../../../../../shared/ArtemisHeader"
import { TResGetCrpById } from "../_get/TResGetCrpById"

/**
 * delete crp by id
 */
export default async function deleteCrpById(args: {
  auth: {
    token: string
  },
  path: {
    customerId: string
    crpId: string
  }
}) {
  const headers = ArtemisHeader()
  headers.append("Authorization", "Bearer " + args.auth.token)
  const url = new URL(process.env.ARTEMIS_API + "/customer/" + args.path.customerId + "/crp/" + args.path.crpId)

  const result = await fetch(url.toString(), {
    headers,
    method: "DELETE"
  }).then((res) => res.json()) as Promise<TResGetCrpById>
  return result
}