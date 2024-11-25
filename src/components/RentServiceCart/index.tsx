import { FC } from "react";
import "./cart_elem.css"
import { Link } from "react-router-dom";

import { RentServiceProps } from "./typing";

export const RentServiceCart: FC <RentServiceProps> = (service : RentServiceProps) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg'; // Устанавливаем моковую картинку
        event.currentTarget.alt = "Моковая картинка"; // Обновляем alt для изображения
      };
    return (
        <div className="service-card">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="service-icon"
            onError={handleImageError} 
          />
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

