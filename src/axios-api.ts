/**
 *
 * @author
 * @date
 */

import { axios, API_PREFIX } from 'src/http'

const theApi = `${API_PREFIX}/path/of/api`

export interface ApiNameRequestParams {
  // TODO
}

interface ApiNameRawResponseData {
  // TODO
}

export interface ApiNameResponseData {
  // TODO
}

function parseResponseData(data: ApiNameRawResponseData): ApiNameResponseData {
  // TODO
}

async function getApiData(
  params?: ApiNameRequestParams,
): Promise<ApiNameResponseData> {
  const url = theApi
  const repsonse = await axios.get(url)
  const parsed = parseResponseData(repsonse.data
    .data as ApiNameRawResponseData[])
  return parsed
}

export { getApiData }
