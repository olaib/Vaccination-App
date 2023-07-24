import {useEffect, useState} from "react";
import axios from 'axios';
import {DataGrid} from '@mui/x-data-grid';
import {CSVLink} from "react-csv";
import {API_URL, COLUMNS, ERROR_FETCHING_TABLE_MSG} from '../constants';
import {Row, Spinner, Button} from "react-bootstrap";

const DataPage = () => {
    let counter = 1;
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const result = await axios(API_URL);
            setData(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const getRowId = (row) => {
        return counter++
    };

    return (
        <div className="mt-5 mx-5 min-vh-100">
            <Row className="mx-auto bg-light p-4 shadow-lg">
                <h2 className="text-center">
                    <i className={'fa fa-sm fa-table'}/> Data Table
                </h2>
                <h5 className="text-center">
                    <i className={'fa fa-sm fa-database'}/> Citizens Vaccination Data
                </h5>
                <a href={'/'}>
                    <i className={'fa fa-sm fa-arrow-left fa-lg'}/> Go Back
                </a>
                <hr className="mb-4 my-3"/>
                <Row>
                    <Button onClick={fetchData} variant="contained" className={'col-2'}>
                        Refresh <i className="fa fa-sm fa-refresh"/>
                    </Button>
                    {isError && <div>Something went wrong ...</div>}
                    {isLoading ? (
                        <div className="mx-auto">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <div className="mx-auto">
                            <div>
                                <DataGrid
                                    rows={Object.values(data)}
                                    columns={COLUMNS}
                                    disableSelectionOnClick
                                    getRowId={getRowId}
                                    pageSize={10}
                                />
                            </div>
                            <CSVLink data={Object.values(data)} filename={'citizensData.csv'}>
                                <Button>DOWNLOAD CSV FILE</Button>
                            </CSVLink>
                        </div>
                    )}
                </Row>
            </Row>
        </div>

    );
}

export default DataPage;
