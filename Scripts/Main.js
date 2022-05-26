"Use strict";

let colog=(str)=>console.log(str);

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

class ManufacturersContainer
{
    constructor()
    {
        this.ManufacturersArray=
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
            Doramad:"Doramad R. T., Германия",
            Elmex:"Elmex, Швейцария",
            Oral_B:"Oral-B, США",
            Pepsodent:"Pepsodent, США"
        };
        this.GetManufacturerNameAndCountry=(ManufacturerShort="Colgate")=>this.ManufacturersArray[ManufacturerShort];
        this.GetAllManufacturers=()=>Object.values(this.ManufacturersArray);
    }
}

const MainManufacturersContainer=new ManufacturersContainer;

function AddToothpasteBox
(
    ToothpasteName="Toothpaste name",
    Diagnoses=["Профилактика"],
    HasFluorine=false,
    ImageSRC="../Resources/Images/ColgateBlue.jpg",
    Manufacturer="Colgate, США"
)
{
    let PastContainer=document.querySelector("main");
    let DiagnArr=Diagnoses.join(", ");
    colog(Manufacturer);
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
                    <div class="Manufacturer">Производитель: ${Manufacturer}</div>
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
        Name="Colgate blue",
        Diagnoses=["Профилактика"],
        Manufacturer="asd",//Colgate, США,
        HasFluorine=false,
        ImageSRC="./Resources/Images/ColgateBlue.jpg"
    )
    {
        this.Name=Name;
        this.Diagnoses=Diagnoses.length?Diagnoses:["Профилактика"];
        this.Manufacturer=MainManufacturersContainer.GetManufacturerNameAndCountry(Manufacturer);
        this.HasFluorine=HasFluorine;
        this.ImageSRC=ImageSRC;
    }
}

const Pastes=
[
    //(Name:string,Diagnoses:string[],Manufacturer:string,HasFluorine:boolean,ImageSRC:string)
    new Toothpaste("Colgate blue",["Флюороз","Пульпит"],"Colgate",false),
    new Toothpaste("Colgate red",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateRed.jpg"),
    new Toothpaste("Colgate green",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateGreen.jpg"),
    new Toothpaste("Colgate yellow",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateYellow.jpg"),
    new Toothpaste("Pepsodent Kids Orange",["Кариес","Пульпит"],"Pepsodent",false,"./Resources/Images/PepsodentOrange.webp"),
    new Toothpaste("Pepsodent Charcoal White",[],"Pepsodent",false,"./Resources/Images/PepsodentCharcoalWhite.jpg"),
    new Toothpaste("Doramad Xtasy",[],"Doramad",true,"./Resources/Images/DoramadXtasy.jpg"),
    new Toothpaste("Oral-B Pro-Expert",["Кариес","Пульпит"],"Oral_B",false,"./Resources/Images/Oral_BProExpert.jpeg")
];

function InitPage()
{
    let InitDiagnosesFieldset=()=>
    {
        let DiagnosesFieldset=document.querySelector("fieldset#DiagnosesFieldset");
        DiagnosesFieldset.insertAdjacentHTML
        (
            "beforeend",
            `<legend>Диагноз</legend>\n`
        );
        for(let i=0;i<DiagnosesArr.length;++i)
        {
            DiagnosesFieldset.insertAdjacentHTML
            (
                "beforeend",
                `<div name="DiagnosisDiv" style="display:flex;min-height:25px;">
                    <input name="Diagnosis" form="FilterForm" type="checkbox" id="Diagn${i}">
                    <label for="Diagn${i}">${DiagnosesArr[i]}</label>
                </div>\n`
            )
        }
    };
    InitDiagnosesFieldset();
    let InitManufacturersFieldset=()=>
    {
        let Manufacturers=MainManufacturersContainer.GetAllManufacturers();
        let ManufacturersFieldSet=document.querySelector("fieldset#ManufacturersFieldset");
        for(let i=0;i<Manufacturers.length;++i)
        {
            ManufacturersFieldSet.insertAdjacentHTML
            (
                "beforeend",
                `<div name="ManufacturerDiv" style="display:flex;min-height:20px;padding-bottom:10px">
                    <input name="Manufacturer" form="FilterForm" type="checkbox" id="Manufacturer${i}">
                    <label for="Manufacturer${i}">${Manufacturers[i]}</label>
                </div>\n`
            );
        };
    };
    InitManufacturersFieldset();
    for(let i=0;i<Pastes.length;++i)
    {
        AddToothpasteBox
        (
            Pastes[i].Name,
            Pastes[i].Diagnoses,
            Pastes[i].HasFluorine,
            Pastes[i].ImageSRC,
            Pastes[i].Manufacturer
        );
        colog(Pastes[i]);
    }
    FilterBoxes();
}

InitPage();

function FilterBoxes()
{
    function FilterFluorine()
    {
        let FluorineChecked=document.querySelector("input[type=radio]:checked").id;
        if(FluorineChecked=="FluorineTrue")FluorineChecked=true;
        else if(FluorineChecked=="FluorineFalse")FluorineChecked=false;
        else FluorineChecked=null;
        colog(FluorineChecked);
        let ToothpasteBox=document.querySelectorAll("div.ToothpasteBox");colog(ToothpasteBox.length);
        ToothpasteBox.forEach((element,i)=>{element.style.display=FluorineChecked==null||Pastes[i].HasFluorine==FluorineChecked?"flex":"none";});
        colog(ToothpasteBox.length);
    }
    FilterFluorine();
    function FilterManufacturers()
    {
        let Manufacturers=MainManufacturersContainer.GetAllManufacturers();
        let ManufacturersCheckboxes=[];
        colog(Manufacturers);
        for(let i=0;i<Manufacturers.length;++i){ManufacturersCheckboxes.push(document.querySelector(`#Manufacturer${i}`).checked);}
        colog(ManufacturersCheckboxes);
    }
    FilterManufacturers();
}