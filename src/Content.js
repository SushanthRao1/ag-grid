import React from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


export const Content = () => {
   const columns = [
      { headername: "ID", field: "id", checkboxSelection: true },
      { headername: "Name", field: "name" },
      { headername: "Email", field: "email" },
      { headername: "Body", field: "body" },
      {
         headername: "Status", field: "body",
         cellRendererFramework: (params) => <div><button>Got Visa</button></div>
      }
   ]

   const data = [
      { name: "Sushanth", country: "USA" },
      { name: "Vinay", country: "USA" },
      { name: "Raviteja", country: "USA" },
      { name: "Swarna", country: "USA" },
      { name: "Himaja", country: "Canada" },
   ]

   const defaultcol = {
      sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
   }

   let gridApi;
   const ExportExcel = params => {
      gridApi = params.api
   }

   const Exporttoexcel = () => {
      gridApi.exportDataAsCsv();
   }
   //const setGridApi
   const APIData = (params) => {
      console.log("Grid-is-working-fine")
      //  setGridApi(params)
      fetch("https://jsonplaceholder.typicode.com/comments").then(resp => resp.json())
         .then(resp => {
            console.log(resp)
            params.api.applyTransaction({ add: resp })
         }) //adding data of API    
      params.api.paginationGoToPage(10)
   }

   const onPaginationChange = (pagesize) => {
      gridApi.api.paginationSetPageSize(pagesize)
   }
   return (
      <div> <button onClick={() => Exporttoexcel()} >Export </button>
         <select onChange={(e) => onPaginationChange(e.target.value)}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='40'>40</option>
         </select>
         <div className="ag-theme-alpine"
            style={{
               height: '800px'
            }}>
            <AgGridReact
               //  rowData={data} 
               columnDefs={columns}
               defaultColDef={defaultcol}
               onGridReady={ExportExcel}
               onGridReady={APIData}
               // pagination={true}
               paginationPageSize={10}
               paginationAutoPageSize={true} />
         </div>
      </div>
   )

}
