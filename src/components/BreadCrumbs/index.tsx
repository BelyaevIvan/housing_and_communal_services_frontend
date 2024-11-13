import "./Breadcrumbs.css";
import { FC } from "react";
import { Breadcrumbs } from "./typing.tsx";
import { Link } from "react-router-dom";

export const Breadcrumbs_: FC<Breadcrumbs> = (props) => {
    const { endItem } = props;

    return (
        <nav aria-label="breadcrumb" className="mt-4">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={"/"} className="text-black">Главная</Link>
                </li>
                {props.middleItems && props.middleItems.length > 0 && (
                    <>
                        {props.middleItems.map((item, index) => (
                            <li key={index} className="breadcrumb-item">
                                <Link to={item.link} className="text-black">{item.name}</Link>
                            </li>
                        ))}
                    </>
                )}
                <li className="breadcrumb-item active" aria-current="page">{endItem}</li>
            </ol>
        </nav>
    );
};
