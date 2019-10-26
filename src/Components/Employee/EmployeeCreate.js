import React from 'react';
import { Create, SimpleForm, DisabledInput, SelectInput, 
    TextInput, DateInput, NumberInput, SelectArrayInput } from 'react-admin';

export const EmployeeCreate = props => (
    <Create  {...props}>
        <SimpleForm>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <SelectInput source="status" choices={[
            { id: 'ALLOCATED', name: 'Allocated' },
            { id: 'FREE', name: 'Non Allocated' },
            ]} /> 
            <SelectArrayInput label="Skills" source="skills" choices={[
                { id: 'node', name: 'Node JS' },
                { id: 'java', name: 'Java' },
                { id: 'python', name: 'Python' },
                { id: 'react', name: 'React JS' },
            ]} />
            <NumberInput source="numOfProject" step={0}/>
            <NumberInput source="reliability" />
            <SelectInput source="role" choices={[
            { id: 'GM', name: 'Project Manager' },
            { id: 'EMPLOYEE', name: 'Employee' },
            { id: 'ADMIN', name: 'Admin' },
            ]} />            
            <TextInput source="address" />
            <TextInput source="city" />
            <TextInput source="country" />
            <TextInput source="postalCode" />
            <TextInput source="email" />
            <DateInput source="createdAt" defaultValue={new Date()}/>
            <DisabledInput source="id" />
        </SimpleForm>
    </Create>
);
