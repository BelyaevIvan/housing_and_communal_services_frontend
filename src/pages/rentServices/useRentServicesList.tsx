import { useState, useEffect } from 'react';
import { ChangeEvent } from "../../App.typing.tsx"

import { RentService } from '../../core/mock/RentList';
import { ServiceList_ } from '../../core/mock/RentList';
import { getServiceList } from '../../core/api/service_getters';


export const useRentServiceCatalogPage = () =>
{
    const [ServiceList, setServiceList] = useState<RentService[]>([])
    const [ServiceName, setServiceName] = useState("")


    const handleSearchClick = () => {
        getServiceList(ServiceName)
        .then((data) =>{
        setServiceList(data.services)
    })
        .catch(() =>
        {
            const filteredservices = ServiceList_.filter((service) => {
                service.title.toLocaleLowerCase().startsWith(ServiceName.toLocaleLowerCase())
            })
            setServiceList(filteredservices)
        })
    }

    const handleSearchNameChange = (e: ChangeEvent) => {
        setServiceName(e.target.value)
    }

    useEffect(() =>{
        getServiceList()
        .then((data) => {
            setServiceList(data.services)
        })
        .catch(() => {
            setServiceList(ServiceList_)
        })

        setServiceList(ServiceList_)
    }, [])


    return {
        ServiceList,
        handleSearchClick,
        handleSearchNameChange
    }
}