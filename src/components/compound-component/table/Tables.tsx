import styled from "@emotion/styled";
import {DataTable} from "primereact/datatable";

const Tables = styled<any>(DataTable)(({}) => ({
    "& tr:has(> tr.p-datatable-row-expansion)": {
        backgroundColor: "#22890f !important",
    },
    "& .p-datatable-row-expansion > td": {
        borderBottom: "1px solid #22890f !important",
        borderLeft: "1px solid #22890f !important",
        borderRight: "1px solid #22890f !important",
    },
}));

export default Tables;
