import { FC } from "react";
import { Container, Button} from "react-bootstrap";
import { RentServiceCart } from "../../components/RentServiceCart";
import { useRentServiceCatalogPage } from "./useRentServicesList";
import { Breadcrumbs_ } from "../../components/BreadCrumbs";
import { Navbar } from "../../components/Navbar"
import { RentServiceProps } from "../../components/RentServiceCart/typing";
import "./RentServisecList.css";

export const RentServiceCatalogPage: FC = () => {
    const {
        ServiceList,
        handleSearchClick,
        handleSearchNameChange,
        handlePriceFilterClick,
        Service_name,
        price_filter
    } = useRentServiceCatalogPage();

    return (
        <>
            <Navbar />
            <Breadcrumbs_ endItem="Каталог" />

            <Container className="rent-services-page">
                {/* Search Bar */}
                <div className="search-section">
                    <input
                        className="search-bar"
                        onChange={handleSearchNameChange}
                        placeholder="Поиск услуги"
                        aria-label="Поиск услуги"
                        type="text"
                        value={Service_name}
                    />
                    <Button 
                        onClick={handleSearchClick} 
                        className="search-button ms-2">                        
                        Найти
                    </Button>
                </div>

                {/* Filter Button */}
                <div className="filter-section">
                    <Button 
                        onClick={handlePriceFilterClick}
                        className="search-button ms-2">
                        Фильтровать по цене
                    </Button>
                </div>

                {/* Services Grid */}
                <div className="services">
                    {ServiceList.map((service, ind) => {
                        const props: RentServiceProps = {
                            pk: service.pk,
                            title: service.title,
                            icon: service.icon,
                            price: service.price,
                        };

                        return (
                            <div key={ind} className="col">
                                <RentServiceCart {...props} />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </>
    );
};