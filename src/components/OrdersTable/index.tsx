import { FC } from "react";
import { TableProps } from "./typing";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";

export const OrdersTable : FC  <TableProps> = (props : TableProps) =>{
    return (
        <div>
            <Card className="mb-2">
                <Card.Body className="py-2 px-3">
                    <Row className="d-flex align-items-center">
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>№</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>Статус</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>Дата создания</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>Дата оформления</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>Дата завершения</strong></Card.Text>
                        </Col>
                        <Col xs={12} sm={2}>
                            <Card.Text><strong>Итоговая стоимость</strong></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {props.data.map((order) => (
                <Card key={order.number} className="mb-2">
                    <Card.Body className="py-2 px-3">
                        <Row className="d-flex align-items-center">
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    <Link to={"/order/" + order.number} className={order.number != 0 ? "" : "disabled disable"}>
                                        {order.number}
                                    </Link>
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    {order.status}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    {order.order_Date}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    {order.formationDate}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    {order.completitionDate}
                                </Card.Text>
                            </Col>
                            <Col xs={12} sm={2}>
                                <Card.Text>
                                    {order.total_amount}
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}