import { useQuery } from 'react-query'
import { QueryFunction } from '../queryFunctions'

const queryFunctions = new QueryFunction()

export const useFetchInteraction = (props: { [x: string]: any }) => {
    return useQuery(['interaction', props], () => queryFunctions.fetchInteraction(props))
}

export const useFetchInteractionData = (props: { id: string }) => {
    return useQuery(['interactionData', props], () => queryFunctions.fetchInteractionData(props))
}
