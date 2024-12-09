import { FC } from "react";
import { FilterProps } from "./typing";
import { Card, Form } from "react-bootstrap";
import "./TableFilters.css"

export const TableFilters: FC<FilterProps> = (props: FilterProps) => {
    return (
        <Card className="mb-3 border-0 p-0">
            <Card.Body className="p-0">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Статус</th>
                            <th>Дата оформления</th>
                            <th>Дата окончания</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Form.Group controlId="status">
                                    <Form.Select
                                        value={props.selectedStatus}
                                        onChange={props.handleStatusChange}
                                    >
                                        <option value="">Все</option>
                                        <option value="FORMED">Ожидает подтверждения</option>
                                        <option value="COMPLETED">Завершен</option>
                                        <option value="REJECTED">Отклонен</option>
                                    </Form.Select>
                                </Form.Group>
                            </td>
                            <td>
                                <Form.Group controlId="startDate">
                                    <Form.Control
                                        type="date"
                                        value={props.selectedStartDate}
                                        onChange={props.handleStartDateChange}
                                    />
                                </Form.Group>
                            </td>
                            <td>
                                <Form.Group controlId="endDate">
                                    <Form.Control
                                        type="date"
                                        value={props.selectedEndDate}
                                        onChange={props.handleEndDateChange}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                                    className="services-button"
                                    onClick={props.handleUseFilters}
                                >
                                    Применить
                                </button>
            </Card.Body>
        </Card>
    );
};
