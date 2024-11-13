import "./ServicePage.css";
import {FC, useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import {Container,Card, Col, Row, Image} from "react-bootstrap";
import { RentService } from "../../core/api/service_getters/typing.ts";
import { getService } from "../../core/api/service_getters/index.ts";
import {ServiceList_} from "../../core/mock/RentList.ts";
import unknownImage from "/images/noimage.webp"
import {Navbar} from "../../components/Navbar/index.tsx";
import { Breadcrumbs_ } from "../../components/BreadCrumbs/index.tsx";

export const ServicePage: FC  = () => {
    const {id} = useParams();
    const [ServiceData, setServiceData] = useState<RentService | null>(null);
    useEffect(() => {
        if (id) {
            getService(id)
                .then((data) => {
                    setServiceData(data);
                })
                .catch(() => {
                    const service = ServiceList_.find(
                        (service) => service.pk === Number(id)
                    );
                    setServiceData(service || null);
                });
        }
    }, [id]);
    if (!ServiceData || !ServiceData.title) {
        return (
            <>
                <Navbar/>
            </>
        );
    }   
    return(
        <>
        <Navbar/>
        <Breadcrumbs_
        middleItems={[
            {
                name: "Каталог",
                link: "/service_catalog"
            }
        ]}
        endItem={ServiceData?.title}
        />
     <section className="service-detail">

      <div className="service-info-card">
        <img src={ServiceData.icon} alt="Описание изображения" className="service-icon-info" />
        
        <div className="service-description">
        <h2 className="tit">{ServiceData.title}</h2>
          <p>Тариф - {ServiceData.price}</p>
          <p>{ServiceData.description}</p>
        </div>
      </div>
    </section>
        </>
    )
}