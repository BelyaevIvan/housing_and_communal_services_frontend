import { FC } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RentServiceCart } from "../../components/RentServiceCart";
import { useRentServiceCatalogPage } from "./useRentServicesList";
import { Breadcrumbs_ } from "../../components/BreadCrumbs";
import { Navbar } from "../../components/Navbar"
import { RentServiceProps } from "../../components/RentServiceCart/typing";
import "./RentServisecList.css";
import { Animation } from "../../components/Animation/index.tsx";
import basketImage from "/basket.svg"
import { useSelector } from "react-redux";
import { selectUser } from "../../core/store/slices/selector";
import {HashLoader} from "react-spinners";


export const RentServiceCatalogPage: FC = () => {
    const {
        Service_name,
        ItemsInCart,
        ServiceList,
        Order_id,
        price_filter,
        handleSearchServiceClick,
        handleSearchNameChange,
        handlePriceFilterClick,
        IsActive
    } = useRentServiceCatalogPage();

    const {Is_Auth} = useSelector(selectUser)

    return (
        <>
            <Navbar />
            <Breadcrumbs_ endItem="Каталог" />
            <div>
            {Is_Auth ? 
              
            <Link to={`/order/${Order_id}/`} style={{textDecoration : "None"}} 
            className={Order_id != 0 ? "" : "disabled disable"}>

                <Button className="search-buttons ms-2">
                    <span className="ms-2">{Number(ItemsInCart)}</span>
                    {
                        Number(ItemsInCart) != 0 ? (
                            <img src={basketImage} alt="cart" />
                        ) : <div> </div>
                    }
                </Button>
            {/* корзина = {Number(ItemsInCart)} */}
            </Link>
            :
            <div> </div>
            }
            </div>
            <Container className="rent-services-page">
                {/* Search Bar */}
                <div className="search-sectionns">
                    <input
                        className="search-bars"
                        onChange={handleSearchNameChange}
                        placeholder="Поиск услуги"
                        aria-label="Поиск услуги"
                        type="text"
                        value={Service_name}
                    />
                    <Button 
                        onClick={handleSearchServiceClick} 
                        className="search-buttons ms-2">                        
                        Найти
                    </Button>
                </div>

                {/* Filter Button */}
                <div className="filter-section">
                    <Button 
                        onClick={handlePriceFilterClick}
                        className="search-buttons ms-2">
                        Сортировать
                    </Button>
                </div>

                {
                    IsActive ? <> 
                    {ServiceList && !!ServiceList.length ? (
                        <div className="servicess">
                            {ServiceList!.map((service, ind) => {
                                const props: RentServiceProps = {
                                    pk: Number(service.pk),
                                    title: service.title,
                                    icon: service.icon,
                                    price: service.price,
                                    updateCatalogPage : handleSearchServiceClick
                                };

                                return (
                                    <div key={ind} className="col">
                                        <RentServiceCart {...props} />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (<Container className="d-flex justify-content-center mt-4 mb-5">
                        <h2>Ничего не найдено</h2>
                    </Container>)}
                    </>

                    : <>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }} >
                <HashLoader size={100} />
                </div>
                      
                    </>
                }
               
            </Container>
        </>
    );
};