import { FC } from "react";
import "./cart_elem.css"
import { Link } from "react-router-dom";

import { RentServiceProps } from "./typing";
import { api } from "../../core/api";
import { useSelector } from "react-redux";
import { selectUser } from "../../core/store/slices/selector";

export const RentServiceCart: FC <RentServiceProps> = (service : RentServiceProps) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg'; // Устанавливаем моковую картинку
        event.currentTarget.alt = "Моковая картинка"; // Обновляем alt для изображения
      };

      const {Is_Auth} = useSelector(selectUser)


      const clickAddCargo = () => {
          api.rentServices.rentServicesAddToDraftCreate(service.pk.toString())
          .then((data) =>{
              console.log(data)
              service.updateCatalogPage()
  
          })
          .catch(() => {
              console.log('error')})
      }
    return (
        <div className="service-card1">
          <img 
            src={service.icon} 
            alt={service.title} 
            className="service-icon1"
            onError={handleImageError} 
          />
          <h3>{service.title}</h3>
          <div className="card-bottom1">
              <Link
              to={`/services/` + service.pk}
              id={service.title}
              state={{from : service.title}}
              className="services-button1"
              >
                  Подробнее
              </Link>

              {Is_Auth ?
              <button onClick={clickAddCargo}>{service.price}</button> 
              :
              <div>{service.price}</div>
              }
              {/* id = {service.pk} */}

          </div>
        </div>
      );
}

