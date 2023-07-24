import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const SearchForm = ({onSearch}) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [country, setCountry] = useState('');

    const handleSearch = () => {
        onSearch({startDate, endDate, country});
    };

    return (
        <Form onSubmit={handleSearch}>
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
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" className={'btn-md'}>
                <i className="fa fa-sm fa-search"/> Search
            </Button>
        </Form>
    );
};

export default SearchForm;
