using TrainData as service from '../../srv/TrainData-service';

annotate service.DataUI with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Target',
            Value : Target,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Text',
            Value : Text,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : Status,
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'TrainData.EntityContainer/createData',
            Label : 'Create',
        }
    ]
);
annotate service.DataUI with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Target',
                Value : Target,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Text',
                Value : Text,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : Status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
