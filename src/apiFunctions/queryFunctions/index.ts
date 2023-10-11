import { httpRequest } from '@/lib/http-request'
import { IFetchInteraction } from '@/types/types'
import { stringify } from 'qs'

export class QueryFunction {
    static fetchInteraction = async (props: Partial<IFetchInteraction>): Promise<any[]> => {
        const params = stringify(props, { skipNulls: true })
        const { data } = await httpRequest.get(`admin/report/chatReport2?${params}`)
        return data
    }
}
