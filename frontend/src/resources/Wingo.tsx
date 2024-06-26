//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const WingoTitle = () => {
  const record = useRecordContext();
  return <span>Wingo {record ? `"${record.GameName}"` : ''}</span>;
};

export const WingoList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="GameName" />
      <NumberField source="DrawFrequency" />
      <TextField source="ColourPrediction" />
      <TextField source="BigSmall" />
      <TextField source="BettingOptions" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const WingoEdit = () => (
  <Edit title={<WingoTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="GameName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="DrawFrequency" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ColourPrediction" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="BigSmall" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="BettingOptions" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const WingoCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="GameName" />
        </Grid>
        <Grid item xs={4}>
          <NumberInput source="DrawFrequency" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="ColourPrediction" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="BigSmall" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="BettingOptions" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
  ,
];
