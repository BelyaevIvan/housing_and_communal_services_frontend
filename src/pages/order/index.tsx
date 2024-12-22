import { FC } from "react";
import { Container, Button} from "react-bootstrap";
// import { RentServiceCart } from "../../components/RentServiceCart";
// import { useRentServiceCatalogPage } from "./useRentServicesList";
// import { Breadcrumbs_ } from "../../components/BreadCrumbs/index.tsx";
import { Navbar } from "../../components/Navbar"
// import { RentServiceProps } from "../../components/RentServiceCart/typing";
import "./OrderPage.css";
import logoImage from "/logo.svg";
import { Link } from "react-router-dom";
import moneyIcon from "/money_icon.svg";
import { useCargoInShippingPage } from "./useOrderPage";
import { ServiceInRequestProps } from "../../components/ServiceInOrderCart";
import { Related } from "../../core/api/Api";{}
import { ServiceInRequestCard } from "../../components/ServiceInOrderCart";
export const OrderPage: FC = () => {

    const {
        OrderData,
        id,
        Allow_Edit,
        amounts,
        total_price,
        Address,
        updAmounts,
        handleClearClick,
        handleChangeOrg,
        handleFormClick,
        hadleChangeAddrClick,
        func,
        handleMonthChange,
        monthName,
        handleMonthSubmit
    } = useCargoInShippingPage()


    
    // const {
    //     ServiceList,
    //     handleSearchClick,
    //     handleSearchNameChange,
    //     handlePriceFilterClick,
    //     Service_name
    // } = useRentServiceCatalogPage();

    return (
        <>
            <Navbar />
            {/* <Breadcrumbs_
                middleItems={[
                    {
                        name: "Каталог",
                        link: "/service_catalog",
                    },
                ]}
                endItem={endItem || "Загрузка..."} // Показ временного текста, пока `endItem` загружается
            /> */}

            <Container>
                
                <section className="address-section">
                <h2>Счет на оплату</h2>
                <div className="address">
                    <p>Адрес: </p>
                    {Allow_Edit ? 
                    <>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Адрес" 
                        value={Address}
                        onChange={handleChangeOrg}
                        className="search-bar" 
                        required
                    />
                    <Button 
                        type="submit"
                        className="search-button ms-2"
                        onClick={hadleChangeAddrClick}>
                            Обновить адрес
                    </Button>
                    </>
                    :
                    <div>{Address}</div>
                }
                    {/* <input 
                        type="text" 
                        name="address" 
                        placeholder="Адрес" 
                        value={Address}
                        onChange={handleChangeOrg}
                        className="search-bar" 
                        required
                    />
                    <Button 
                        type="submit"
                        className="search-button ms-2"
                        onClick={hadleChangeAddrClick}>
                            Обновить адрес
                    </Button> */}
                </div>
                </section>
            
                <section className="order-services">
                    <div className="flex-container">
                    <div>
                    {Allow_Edit ? 
                    <>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Адрес" 
                        value={monthName}
                        onChange={handleMonthChange}
                        className="search-barrr" 
                        required
                    />
                    <button 
                        type="submit"
                        className="search-button ms-2"
                        onClick={handleMonthSubmit}>
                            Внести месяц
                    </button>
                    </>
                    :
                    <div>{monthName}</div>
                }
                    {/* <p className="date">Дата: {{ data.order.order_date|date:"d E Y" }}</p> <!-- Выводим дату заявки --> */}
                    
                    </div>
                    <p className="date">Дата: {OrderData?.order_date.split("T")[0]}</p>
                    </div>
                    {OrderData && OrderData.services.length ? (
                        <>
                        {OrderData.services.map((service : Related, index : number) => {
                            const props : ServiceInRequestProps = {
                                id : Number(service.service.pk),
                                title : service.service.title,
                                pricePerUnit : service.service.price,
                                logoFilePath : service.service.icon,
                                lastReading : String(service.last_reading),
                                currentReading : String(service.current_reading),
                                isEditable : Allow_Edit,
                                order_id : id || "",
                                updateReading : func
                        };
                        return (
                            <ServiceInRequestCard key={index} {...props} />
      
                        )
                    })}
                    </>
                    )
                : ( <></>

                )}
            



                    <div className="del-itog">
                        {
                            Allow_Edit ? 
                            <>
                            <div className="del">
                            <Button 
                                type="submit" 
                                name="delete_order" 
                                className="del-button"
                                onClick={handleClearClick}>
                                    Удалить заявку
                            </Button>
                        </div>
                        <Button 
                            type="button" 
                            className="search-button ms-2"
                            onClick={handleFormClick}>
                                Сформировать
                        </Button>
                            </> 
                            :
                            <></>
                        }
                        
                    <div className="itog-sum">ИТОГО: {OrderData?.total_amount} ₽</div>
                    </div>
                </section>

                {/* Services Grid */}
                {/* <div className="services">
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
                </div> */}
            </Container>
        </>
    );
};

