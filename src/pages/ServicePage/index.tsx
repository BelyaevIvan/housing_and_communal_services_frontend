import "./ServicePage.css";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/index.tsx";
import { Breadcrumbs_ } from "../../components/BreadCrumbs/index.tsx";
import { RentService } from "../../core/api/service_getters/typing.ts";
import { getService } from "../../core/api/service_getters/index.ts";
import { ServiceList_ } from "../../core/mock/RentList.ts";

export const ServicePage: FC = () => {
    const { id } = useParams();
    const [serviceData, setServiceData] = useState<RentService | null>(null);
    const [endItem, setEndItem] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            getService(id)
                .then((data) => {
                    setServiceData(data);
                    setEndItem(data.title); // Устанавливаем `endItem` после загрузки
                })
                .catch(() => {
                    const service = ServiceList_.find(
                        (service) => service.pk === Number(id)
                    );
                    setServiceData(service || null);
                    setEndItem(service?.title || null); // Устанавливаем `endItem` из локального списка
                });
        }
    }, [id]);

    return (
        <>
            <Navbar />
            <Breadcrumbs_
                middleItems={[
                    {
                        name: "Каталог",
                        link: "/service_catalog",
                    },
                ]}
                endItem={endItem || "Загрузка..."} // Показ временного текста, пока `endItem` загружается
            />
            <section className="service-detail">
                {serviceData ? (
                    <div className="service-info-card">
                        <img
                            src={serviceData.icon}
                            alt="Описание изображения"
                            className="service-icon-info"
                        />
                        <div className="service-description">
                            <h2 className="tit">{serviceData.title}</h2>
                            <p>Тариф - {serviceData.price}</p>
                            <p>{serviceData.description}</p>
                        </div>
                    </div>
                ) : (
                    <p>Загрузка информации об услуге...</p>
                )}
            </section>
        </>
    );
};
