import { DataGrid } from "@mui/x-data-grid";
import {format} from 'date-fns'; 

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "dateOfCreation", headerName: "DATE OF CREATION", width: 130, // Added date type for sorting
  valueFormatter: (params) => {
    const dateObject = new Date(params.value);
    console.log("1",dateObject)
    return format(dateObject, 'dd/MM/yyyy');
  }, 
},
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {field: "countryCode", headerName: "COUNTRY CODE",type: "number",width: 80},
  { field: "phoneNumber", headerName: "Contact Number", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function DataTable({ allFilteredContacts }) {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={allFilteredContacts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[2,4,6,8,10]}
        checkboxSelection
      />
    </div>
  );
}
