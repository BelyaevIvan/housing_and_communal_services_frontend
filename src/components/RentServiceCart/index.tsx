import { FC } from "react";
import "./cart_elem.css"
import { Link } from "react-router-dom";

import { RentServiceProps } from "./typing";
import { Form } from "react-bootstrap";

export const RentServiceCart: FC <RentServiceProps> = (service : RentServiceProps) => {
    return (
        <div className="service-card">
        <img src={service.icon} alt={service.title} className="service-icon" />
          <h3>{service.title}</h3>
          <div className="card-bottom">
            <Link
            to={`/services/` + service.pk}
            id={service.title}
            state={{from : service.title}}
            className="services-button"
            >
                Подробнее
            </Link>
            {/* id = {service.pk} */}
            <p>
                {service.price}
            </p>
          </div>
        </div>
      );
}

