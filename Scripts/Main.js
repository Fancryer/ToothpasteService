"Use strict";

const DiagnosesArr=
[
    "Кариес",
    "Пульпит",
    "Периодонтит",
    "Гингивит",
    "Пародонтит",
    "Пародонтоз",
    "Киста зуба",
    "Абсцесс зуба",
    "Эрозия эмали",
    "Гипоплазия эмали",
    "Гиперестезия",
    "Флюороз",//БЕЗ ВСЯКОГО ФТОРА!
    "Появление пигментации",//Отбеливающая паста
    "Образование зубного камня или налета",
    "Клиновидные дефекты",
    "Некроз",//Паста, укрепляющая и восстанавливающая эмаль
    "Стоматит"
];

const ManufacturersArr=
[
    Babool="Babool, Индия",
    Binaca="Binaca, Индия",
    BlueM="BlueM, Нидерланды",
    BioMinF="BioMin F, Великобритания",
    BioMinC="BioMin C, Великобритания",
    BioMinFKids="BioMin F for Kids, Великобритания",
    Close_up="Close-up, США",
    Colgate="Colgate, США",
    Crest="Crest, США",
    Dabur="Dabur, Индия",
    Darlie="Darlie, Гонконг",
    Doramad="Doramad Radioactive Toothpaste, Германия",
    Elmex="Elmex, Швейцария",
    Oral_B="Oral-B, США",
    Pepsodent="Pepsodent, США"
];

function AddToothpasteBox
(
    ToothpasteName="Toothpaste name",
    Diagnoses=["Профилактика"],
    HasFluorine=false,
    ImageSRC="https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFON3BPbGtTWUwuX1NMMTUwMF8uanBn.jpg"
)
{
    let PastContainer=document.querySelector("main");
    let DiagnArr=Diagnoses.join(", ");
    function FindManufacturerByToothpasteName(ToothpasteName)
    {
        const MyManufacturersArr=
        {
            Babool:"Babool, Индия",
            Binaca:"Binaca, Индия",
            BlueM:"BlueM, Нидерланды",
            BioMinF:"BioMin F, Великобритания",
            BioMinC:"BioMin C, Великобритания",
            BioMinFKids:"BioMin F for Kids, Великобритания",
            Close_up:"Close-up, США",
            Colgate:"Colgate, США",
            Crest:"Crest, США",
            Dabur:"Dabur, Индия",
            Darlie:"Darlie, Гонконг",
            Doramad:"Doramad Radioactive Toothpaste, Германия",
            Elmex:"Elmex, Швейцария",
            Oral_B:"Oral-B, США",
            Pepsodent:"Pepsodent, США"
        };
        const PastesArr=
        {
            "Colgate blue":MyManufacturersArr.Colgate,
            "Colgate red":MyManufacturersArr.Colgate,
            "Colgate green":MyManufacturersArr.Colgate,
            "Colgate yellow":MyManufacturersArr.Colgate,
            "Pepsodent yellow":MyManufacturersArr.Pepsodent,
            "Doramad Xtasy":MyManufacturersArr.Doramad,
            "Oral-B Pro-Line":MyManufacturersArr.Oral_B
        };
        for(let key in PastesArr)
        {
            let val=PastesArr[key];
            if(key==ToothpasteName)return val;
        }
        return "Название пасты";
    }
    PastContainer.insertAdjacentHTML
    (
        "beforeend",
        `<div class="ToothpasteBox">
            <div class="Name">${ToothpasteName}</div>
            <div class="ToothpasteRow">
                <img
                    class="PastImage"
                    src=${ImageSRC}
                ></img>
                <div class="ToothpasteDetails">
                    <div class="Diagnosis">Диагноз${Diagnoses.length-1?"ы":""}: ${DiagnArr}</div>
                    <div class="Manufacturer">Производитель: ${FindManufacturerByToothpasteName(ToothpasteName)}</div>
                    <div class="Fluorine">${HasFluorine?"Со фтором":"Без фтора"}</div>
                </div>
            </div>
        </div>`
    );
}

class Toothpaste
{
    constructor
    (
        Name="НазваниеПасты",
        Diagnoses=["Диагноз1","Диагноз2"],
        Manufacturer="Производитель пасты, Страна",
        HasFluorine=false,
        StomaType="Зубная паста",
        Profilactic=false
    )
    {
        this.Name=Name;
        this.Diagnoses=Diagnoses.length?Diagnoses:["Профилактика"];
        this.Manufacturer=Manufacturer;
        this.HasFluorine=HasFluorine;
        this.StomaType=StomaType;
        this.Profilactic=Profilactic;
    }
}

const Pastes=
[
    new Toothpaste("Colgate blue",["Флюороз","Пульпит"],ManufacturersArr[Colgate],false,undefined,true),
    new Toothpaste("Colgate red",["Кариес","Пульпит"],ManufacturersArr[Colgate],false,undefined,true),
    new Toothpaste("Colgate green",["Кариес","Пульпит"],ManufacturersArr[Colgate],false,undefined,true),
    new Toothpaste("Colgate yellow",["Кариес","Пульпит"],ManufacturersArr[Colgate],false,undefined,true),
    new Toothpaste("Pepsodent yellow",["Кариес","Пульпит"],ManufacturersArr[Pepsodent],false,undefined,true),
    new Toothpaste("Pepsodent Turquoise",[],ManufacturersArr[Pepsodent],false,undefined,true),
    new Toothpaste("Doramad Xtasy",["Профилактика"],ManufacturersArr[Doramad],true,undefined,false),
    new Toothpaste("Oral-B Pro-Line",["Кариес","Пульпит"],ManufacturersArr[Oral_B],false,undefined,true)
];

function InitPage()
{
    let DiagnosesFieldset=document.querySelector("fieldset#DiagnosesFieldset");
    DiagnosesFieldset.insertAdjacentHTML
    (
        "beforeend",
        `<legend>Диагноз</legend>`
    );
    for(let i=0;i<DiagnosesArr.length;++i)
    {
        DiagnosesFieldset.insertAdjacentHTML
        (
            "beforeend",
            `<div name="DiagnosisDiv">
                <input name="Diagnosis" form="FilterForm" type="checkbox" id="Diagn${i}">
                <label for="Diagn${i}">${DiagnosesArr[i]}</label>
            </div>\n`
        )
    }
    for(let i=0;i<Pastes.length;++i)
    {
        AddToothpasteBox(Pastes[i].Name,Pastes[i].Diagnoses,Pastes[i].HasFluorine);
    }
}

InitPage();