using { aicore.intentExtraction as my } from '../db/schema';

 service TrainData @(requires : 'authenticated-user'){

    entity Data as projection on my.TrainData;
    entity DataUI @(restrict : [
        {grant : ['READ', 'WRITE', 'INSERT', 'DELETE', 'UPDATE'], to : ['Admin']},
        {grant : ['READ'], to : ['User']}
    ])
    as projection on my.TrainData;

    action createData(Text : String, Intent : Boolean);
}