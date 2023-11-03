import { httpRequest } from '@/lib/http-request'
import { IFetchInteraction } from '@/types/types'
import { stringify } from 'qs'

export class QueryFunction {
    public fetchInteraction = async (props: Partial<IFetchInteraction>): Promise<{ data: any; total: number }> => {
        const params = stringify(props, { skipNulls: true })
        const { data, total } = await httpRequest.get(`admin/report/chatReport2?${params}`)
        return { data, total: total[0].count }
    }

    public fetchInteractionData = async (props: { [x: string]: any }): Promise<any> => {
        const params = stringify(props, { skipNulls: true })
        return await httpRequest.get(`admin/report/getASRfeed?${params}`)
    }
}
