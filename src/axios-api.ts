/**
 *
 * @author
 * @date
 */

import axios from '@/common/http/axios'

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

export async function getApiData(
  params?: ApiNameRequestParams,
): Promise<ApiNameResponseData> {
  const url = theApi
  const response = await axios.get(url)
  const parsed = parseResponseData(response.data
    .data as ApiNameRawResponseData[])
  return parsed
}
