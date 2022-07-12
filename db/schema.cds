namespace aicore.intentExtraction;

entity TrainData {
    key ID : Integer;
    Target : Boolean;
    Text : String;
    Status : String default ('Not Ready');
}

