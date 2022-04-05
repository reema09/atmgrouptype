import { GenericPage } from "@ncr/generic";
import React from "react";

const config = {
    id: "atm-group-type",
    resourceKey: "atm-group-type",
    title: "Atm Group Type",

    validator: (data) => {
        const errors = {};
        if (data !== undefined && !data.type) {
            errors.type = "Atm Group Type is required";
        }
        if (data !== undefined && !data.description) {
            errors.description = "Description is required";
        }
        return errors;
    },
    formatRequestBody: (data) => {
        return {
            type: data.type,
            description: data.description
        };
    },
    apiUrlResolver: {
        getAll: (data) => {
            return `/atm/grouptypes`;
        },
        update: (data, old_data) => {
            return `/atm/grouptypes?type=${old_data.type}`;
        },
        delete: (data) => {
            return `/atm/grouptypes?type=${data.type}`;
        },
    },
    table: {
        columns: [
            {
                title: "Type Name",
                dataKey: "type",
            },
            {
                title: "Description",
                dataKey: "description",
            },

        ],
    },
    modals: {
        formid: "Atm-group-type",
        viewModalTitle: "type",
        popup: true,
        sections: [
            {
                rows: [
                    {
                        elements: [
                            {
                                name: "type",
                                label: "Type Name",
                                value: "type",
                                mandatory: true,
                                type: "TextBox",
                                multi: false,
                                editable: true,
                                number: false,
                                maxAllowedChar: 50,
                                tooltips:
                                    'Minimum acceptable value is: 0',
                            },
                            {
                                name: "description",
                                label: "Description",
                                value: "description",
                                mandatory: true,
                                type: "TextBox",
                                multi: false,
                                editable: true,
                                maxAllowedChar: 200,
                                tooltips:
                                    'Max length = 200',
                            },
                        ],
                    },
                ],
            },
        ],
    },

}
const AtmGroupType = () => {

    return <GenericPage {...config} />;
};
export default AtmGroupType;
