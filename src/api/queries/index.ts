import { useQuery } from 'react-query'
import { QueryFunction } from '../queryFunctions'

export const useFetchInteraction = (props: { [x: string]: any }) => {
    return useQuery(['interaction', props], () => QueryFunction.fetchInteraction(props), { keepPreviousData: true })
}
