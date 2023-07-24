import citiesData from '../assets/Data/CountryData.json';
// ========================================= API ===============================================
export const API_URL = '/citizens';
// ======================================= CONSTANTS ===========================================
export const CITIES_COUNTRIES = citiesData,
    INIT_FORM_DATA = {
        country: null,
        city: null,
        covidInfected: false,
        healthConditions: [],
        otherConditions: ''
    },
    HEALTH_CONDITIONS = [
        {
            name: 'diabetes',
            label: 'Diabetes',
        },
        {
            name: 'cardio vascular problems',
            label: 'Cardio-Vascular problems',
        },
        {
            name: 'allergies',
            label: 'Allergies',
        },
    ],
    CONTACT_FIELDS = [{
        name: 'landline',
        label: 'Landline (optional):',
        placeholder: "050-1234-567",
        icon: 'fa-tty',
        minLength: 0,
        maxLength: 9,
        required: false,
    }, {
        name: 'cellular',
        label: 'Cellular:',
        placeholder: "050-123-4567",
        icon: 'fa-mobile',
        minLength: 10,
        maxLength: 10,
        required: true,
    }],
    NAMES = [{name: 'firstName', label: 'First Name'}, {name: 'lastName', label: 'Last Name'}],
    FORM_SUBMITTED_SUCCESSFULLY = 'Form submitted successfully!',
    HEADERS = {'Content-Type': 'application/json'},
    MSG_TYPE = {SUCCESS: 'success', ERROR: 'danger'},
    // ======================================= TABLE ===========================================
    COLUMNS = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'firstName', headerName: 'First Name', width: 130},
        {field: 'lastName', headerName: 'Last Name', width: 130},
        {field: 'dateOfBirth', headerName: 'Date of Birth', width: 130},
        {field: 'address', headerName: 'Address', width: 130},
        {field: 'city', headerName: 'City', width: 130},
        {field: 'country', headerName: 'Country', width: 130},
        {field: 'zipCode', headerName: 'Zip Code', width: 130},
        {field: 'landline', headerName: 'Landline', width: 130},
        {field: 'cellular', headerName: 'Cellular', width: 130},
        {field: 'covidInfected', headerName: 'Covid Infected', width: 130},
        {field: 'healthConditions', headerName: 'Health Conditions', width: 130},
        {field: 'otherConditions', headerName: 'Other Conditions', width: 130},
    ],
    ERROR_FETCHING_TABLE_MSG = 'Error occurred while fetching table data!';

