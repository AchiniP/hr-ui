import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { EmployeeList } from '../src/Components/Employee/EmployeeList';
import DataFetcher from '../src/Repository/DataFetcher';
import { EmployeeEdit } from './Components/Employee/EditEmployee';
import { EmployeeCreate } from './Components/Employee/EmployeeCreate';

const dataProvider = DataFetcher('http://localhost:8000');
const App = () => (
  <Admin dataProvider={dataProvider}>
       <Resource name="employee" list={EmployeeList} create={EmployeeCreate} edit={EmployeeEdit} />
   </Admin>
)

export default App;