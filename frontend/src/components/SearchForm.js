import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ onSearch }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch({ startDate, endDate, city });
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label>Date of Birth (Start Date)</Form.Label>
                <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date of Birth (End Date)</Form.Label>
                <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch} className={'btn-md'}>
                <i className="fa fa-sm fa-search"/> Search
            </Button>
        </Form>
    );
};

export default SearchForm;
