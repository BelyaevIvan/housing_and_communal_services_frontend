import {FC} from "react";
import {FilterProps} from "./typing.tsx";
import {Button, Card, Form} from "react-bootstrap";;

export const TableFilters : FC <FilterProps> = (props : FilterProps) =>{
    return(
        <Card className="mb-3 border-0 p-0">
        <Card.Body className="p-0">
            <Form>
                <div className="d-flex align-items-end justify-content-between">
                    <div className="flex-grow-1 pe-3">
                        <Form.Group controlId="status">
                            <Form.Label>Статус</Form.Label>
                            <Form.Select value={props.selectedStatus} onChange={props.handleStatusChange}>
                                <option value="">Все</option>
                                <option value="FORMED">Ожидает подтверждения</option>
                                <option value="COMPLETED">Завершен</option>
                                <option value="REJECTED">Отклонен</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="flex-grow-1  pe-3">
                        <Form.Group controlId="startDate">
                            <Form.Label>Дата оформления</Form.Label>
                            <Form.Control
                                type="date"
                                value={props.selectedStartDate}
                                onChange={props.handleStartDateChange}
                            />
                        </Form.Group>
                    </div>
                    <div className="flex-grow-1  pe-3">
                        <Form.Group controlId="endDate">
                            <Form.Label>Дата окончания</Form.Label>
                            <Form.Control
                                type="date"
                                value={props.selectedEndDate}
                                onChange={props.handleEndDateChange}
                            />
                        </Form.Group>
                    </div>
                    <Button className="btn change_back_button"
                    onClick={props.handleUseFilters}>
                        Применить
                    </Button>
                </div>
            </Form>
        </Card.Body>
    </Card>
    )
}