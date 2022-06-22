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
        ImageSRC,
        ConsumerAge="3-5"
    )
    {
        this.Name=Name;
        this.Diagnoses=Diagnoses.length?Diagnoses:["Профилактика"];
        this.Manufacturer=MainManufacturersContainer.GetManufacturerNameAndCountry(Manufacturer);
        this.HasFluorine=HasFluorine;
        this.ImageSRC=ImageSRC;
        this.ConsumerAge=ConsumerAge;
    }
}

const Pastes=
[
    //(Name:string,Diagnoses:string[],Manufacturer:string,HasFluorine:boolean,ImageSRC:string,ConsumerAge:string)
    new Toothpaste
    (
        "Colgate blue",["Флюороз","Пульпит"],"Colgate",false,"./Resources/Images/ColgateBlue.jpg","5-8"
    ),
    new Toothpaste
    (
        "Colgate red",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateRed.jpg","12-16"
    ),
    new Toothpaste
    (
        "Colgate green",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateGreen.jpg","16-18"
    ),
    new Toothpaste
    (
        "Colgate yellow",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateYellow.jpg","18+"
    ),
    new Toothpaste
    (
        "Pepsodent Kids Orange",["Кариес","Пульпит"],"Pepsodent",false,"./Resources/Images/PepsodentOrange.webp","5-8"
    ),
    new Toothpaste
    (
        "Pepsodent Charcoal White",[],"Pepsodent",false,"./Resources/Images/PepsodentCharcoalWhite.jpg","18+"
    ),
    new Toothpaste
    (
        "Doramad Xtasy",[],"Doramad",true,"./Resources/Images/DoramadXtasy.jpg","5-8"
    ),
    new Toothpaste
    (
        "Oral-B Pro-Expert",["Кариес","Пульпит"],"Oral_B",false,"./Resources/Images/Oral_BProExpert.jpeg","3-5"
    ),
    new Toothpaste
    (
        "Colgate blue",["Флюороз","Пульпит"],"Colgate",false,"./Resources/Images/ColgateBlue.jpg","3-5"
    ),
    new Toothpaste
    (
        "Colgate red",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateRed.jpg","12-16"
    ),
    new Toothpaste
    (
        "Colgate green",["Кариес","Пульпит"],"Colgate",true,"./Resources/Images/ColgateGreen.jpg","8-12"
    ),
    new Toothpaste
    (
        "Colgate yellow",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateYellow.jpg","18+"
    )
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
                    <input name="Diagnosis" form="FilterForm" type="checkbox" id="Diagn${i}" checked>
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
                    <input name="Manufacturer" form="FilterForm" type="checkbox" id="Manufacturer${i}" checked>
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
    let ToothpasteBox=document.querySelectorAll("div.ToothpasteBox");
    let FluorineChecked=document.querySelector("input[type=radio]:checked").id;
    FluorineChecked=FluorineChecked=="FluorineTrue"?true:FluorineChecked=="FluorineFalse"?false:null;

    ToothpasteBox.forEach
    (
        (element,i)=>
        {
            let DeservedVisibility=true;
            let SelectedAge=document.querySelector("input[list=AgeList]").value;
            
            colog(`Index: ${i}`);
            //Filter by fluorine
            if(!(FluorineChecked==Pastes[i].HasFluorine||FluorineChecked==null))DeservedVisibility=false;
            colog(`${DeservedVisibility?"\tFluorine matches!":"\tFluorine doesn't match..."}`);
            
            //Filter by age
            if(!(["3-5","5-8","8-12","12-16","16-18","18+","Любой"].includes(SelectedAge)||SelectedAge==""))DeservedVisibility=false;
            colog(`${DeservedVisibility?"\t\tAge matches!":"\t\tAge doesn't match..."}`);
            element.style.display=DeservedVisibility?"flex":"none";
        }
    )










    /*
    let ToothpasteBox=document.querySelectorAll("div.ToothpasteBox");
    function FilterFluorine()
    {
        let FluorineChecked=document.querySelector("input[type=radio]:checked").id;
        if(FluorineChecked=="FluorineTrue")FluorineChecked=true;
        else if(FluorineChecked=="FluorineFalse")FluorineChecked=false;
        else FluorineChecked=null;
        colog(FluorineChecked);
        colog(ToothpasteBox.length);
        ToothpasteBox.forEach((element,i)=>{element.style.display=FluorineChecked==null||Pastes[i].HasFluorine==FluorineChecked?"flex":"none";});
        colog(ToothpasteBox.length);
    }
    FilterFluorine();
    function FilterManufacturers()
    {
        let Manufacturers=MainManufacturersContainer.GetAllManufacturers();
        let ManufacturersCheckboxes=[];
        colog(Manufacturers);
        for(let i=0;i<Manufacturers.length;++i)
        {
            let checkbox=document.querySelector(`#Manufacturer${i}`).checked;
            if(checkbox)ManufacturersCheckboxes.push(Manufacturers[i]);
        }
        colog(ManufacturersCheckboxes);
        for(let i=0;i<ToothpasteBox.length;++i)
        {
            //div.ToothpasteRow->div.ToothpasteDetails->div.Manufacturer
            let CurrentManifacturer=ToothpasteBox[i].children.item(1).children.item(1).children.item(1);
            colog(CurrentManifacturer);
            let Found=false;
            for(let m=0;m<ManufacturersCheckboxes.length;++m)
            {
                if(ManufacturersCheckboxes[m]==CurrentManifacturer.innerHTML.split(": ")[1])
                {
                    CurrentManifacturer.parentElement.parentElement.parentElement.style.display="flex";
                    colog("Yes");Found=true;break;
                }
            }
            if(!Found)CurrentManifacturer.parentElement.parentElement.parentElement.style.display="none";
        }
    }
    FilterManufacturers();
    function FilterDiagnoses()
    {
        let Diagnoses=DiagnosesArr;
        let DiagnosesCheckboxes=[];
        colog(Diagnoses);
        for(let i=0;i<Diagnoses.length;++i)
        {
            let diagn=document.querySelector(`#Diagn${i}`);
            let checkbox=diagn.checked;
            if(checkbox&&diagn.style.display!="none")DiagnosesCheckboxes.push(Diagnoses[i]);
        }
        colog(DiagnosesCheckboxes);
        for(let i=0;i<ToothpasteBox.length;++i)
        {
            //div.ToothpasteRow->div.ToothpasteDetails->div.Manufacturer
            let CurrentDiagnose=ToothpasteBox[i].children.item(1).children.item(1).children.item(1);
            colog(CurrentDiagnose);
            let Found=false;
            for(let m=0;m<DiagnosesCheckboxes.length;++m)
            {
                if(DiagnosesCheckboxes[m]==CurrentDiagnose.innerHTML.split(": ")[1])
                {
                    CurrentDiagnose.parentElement.parentElement.parentElement.style.display="flex";
                    colog("Yes");Found=true;break;
                }
            }
            if(!Found)CurrentDiagnose.parentElement.parentElement.parentElement.style.display="none";
        }
    }
    FilterDiagnoses();
    */
}