import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

export const EmployeeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="_id" /> */}
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="numOfProject" />
            <TextField source="reliability" />
            <TextField source="status" />
            <EditButton basePath="/employee" />
        </Datagrid>
    </List>
);