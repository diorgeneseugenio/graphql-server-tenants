import Tenant from '@/entities/Tenant'

const allTenants = ():Array<Tenant>  => {
    return [
        {
            id: '1A',
            name: 'Client A'
        },
        {
            id: '2B',
            name: 'Client B'
        },        
        {
            id: '3C',
            name: 'Client C'
        },            
    ]
}

export default allTenants