import ArtemisHeader from "../../../../../../shared/ArtemisHeader"

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

  const response = await fetch(url.toString(), {
    headers,
    method: "DELETE"
  });
  if (response.ok) {
    return true
  } else {
    const error = await response.text()
    throw new Error(`Request failed with status ${response.status} and error ${error}`)
  }
}