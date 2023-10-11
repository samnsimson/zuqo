import { httpRequest } from '@/lib/http-request'
import { IFetchInteraction } from '@/types/types'
import { stringify } from 'qs'

export const fetchInteraction = async (props: Partial<IFetchInteraction>): Promise<any[]> => {
    const params = stringify(props, { skipNulls: true })
    const { data } = await httpRequest.get(`admin/report/chatReport2?${params}`)
    return data
}
