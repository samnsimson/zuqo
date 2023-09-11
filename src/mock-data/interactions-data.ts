import { assets } from '@/config/assets'

export const interactionsData = [
    {
        agent: { avatar: assets.kiranmaiKulakarni, name: 'Kiranmai Kulakarni', email: 'kiranmai@airtel.in' },
        customer: { avatar: assets.preetham, name: 'Preetam Kulakarni', phone: '+9190987656789' },
        channel: 'email',
        type: 'INBOUND',
        campaign: { name: 'CampaignX', link: '#' },
        overallSentiment: 'Positive',
        overallCallRating: '4.0/5',
        aiConfidenceScore: '89%',
        timeStamp: new Date(),
    },
    {
        agent: { avatar: assets.kiranmaiKulakarni, name: 'Kiranmai Kulakarni', email: 'kiranmai@airtel.in' },
        customer: { avatar: assets.preetham, name: 'Keerthan G', phone: '+9190987656789' },
        channel: 'phone',
        type: 'INBOUND',
        campaign: { name: 'CampaignX', link: '#' },
        overallSentiment: 'Positive',
        overallCallRating: '4.0/5',
        aiConfidenceScore: '89%',
        timeStamp: new Date(),
    },
    {
        agent: { avatar: assets.kiranmaiKulakarni, name: 'Kiranmai Kulakarni', email: 'kiranmai@airtel.in' },
        customer: { avatar: assets.preetham, name: 'Nikhil Bejai', phone: '+9190987656789' },
        channel: 'chat',
        type: 'INBOUND',
        campaign: { name: 'CampaignX', link: '#' },
        overallSentiment: 'Negative',
        overallCallRating: '4.0/5',
        aiConfidenceScore: '89%',
        timeStamp: new Date(),
    },
]
