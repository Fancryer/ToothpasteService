"use strict";

let colog=(str)=>console.log(str);

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
    }
    GetManufacturerNameAndCountry(ManufacturerShort="Colgate"){return this.ManufacturersArray[ManufacturerShort]};
    GetAllManufacturers(){return Object.values(this.ManufacturersArray)};
    GetManufacturersCount(){return Object.keys(this.ManufacturersArray).length};
    GetSelectedManufacturers()
    {
        let Manufacturers=[];
        for(let i=0;i<this.GetManufacturersCount();++i)
        {
            let IteratedManufacturer=document.querySelector(`div[name="ManufacturerDiv${i}"]`);
            if(IteratedManufacturer.children[1].checked)Manufacturers.push(IteratedManufacturer.children[0].innerHTML);
        }
        //colog(Manufacturers);
        return Manufacturers;
    }
}

const MainManufacturersContainer=new ManufacturersContainer;

class DiagnosesContainer
{
    constructor()
    {
        this.DiagnosesArray=
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
            "Флюороз",                              //БЕЗ ВСЯКОГО ФТОРА!
            "Появление пигментации",                //Отбеливающая паста
            "Образование зубного камня или налета",
            "Клиновидные дефекты",
            "Некроз",                               //Паста, укрепляющая и восстанавливающая эмаль
            "Стоматит",
            "Профилактика"
        ];
    }
    GetAllDiagnoses(){return this.DiagnosesArray};
    GetDiagnosesCount(){return this.DiagnosesArray.length};
    GetDiagnosisByIndex(Index){return this.DiagnosesArray[Index]}
    GetSelectedDiagnoses()
    {
        let Diagnoses=[];
        for(let i=0;i<this.GetDiagnosesCount();++i)
        {
            let IteratedDiagnosis=document.querySelector(`div[name="DiagnosisDiv${i}"]`);
            if(IteratedDiagnosis.children[1].checked)Diagnoses.push(IteratedDiagnosis.children[0].innerHTML);
        }
        //colog(Diagnoses);
        return Diagnoses;
    }
}

const MainDiagnosesContainer=new DiagnosesContainer;

class StorageOverlord
{
    constructor()
    {
        this.BackupStorage=
        {
            FluorineChecked:
                "Indif",
            SelectedAge:
                "Для всех возрастов",
            SelectedManufacturers:
                MainManufacturersContainer.GetAllManufacturers().map(element=>[element,true]),
            SelectedDiagnoses:
                MainDiagnosesContainer.GetAllDiagnoses().map(element=>[element,true])
        }
        this.Storage=
        {
            FluorineChecked:
                localStorage.getItem("FluorineChecked")?localStorage.getItem("FluorineChecked"):"Indif",
            SelectedAge:
                localStorage.getItem("SelectedAge")?localStorage.getItem("SelectedAge"):"Для всех возрастов",
            SelectedManufacturers:
                localStorage.getItem("SelectedManufacturers")?JSON.parse(localStorage.getItem("SelectedManufacturers")):
                MainManufacturersContainer.GetAllManufacturers().map(element=>[element,true]),
            SelectedDiagnoses:
                localStorage.getItem("SelectedDiagnoses")?JSON.parse(localStorage.getItem("SelectedDiagnoses")):
                MainDiagnosesContainer.GetAllDiagnoses().map(element=>[element,true]),
            Tastes:[]
        };
    }
    //RestoreFromBackup(){this.Storage=JSON.parse(JSON.stringify(this.BackupStorage));localStorage.clear();}
}

const MainStorageOverlord=new StorageOverlord;
//MainStorageOverlord.LoadFromLocalStorage();

colog(MainStorageOverlord);





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
        "Colgate green",["Кариес","Пульпит"],"Colgate",true,"./Resources/Images/ColgateGreen.jpg","Для всех возрастов"
    ),
    new Toothpaste
    (
        "Colgate yellow",["Кариес","Пульпит"],"Colgate",false,"./Resources/Images/ColgateYellow.jpg","18+"
    )
];

class PageFiller
{
    AddToothpasteBox
    (
        ToothpasteName="Toothpaste name",
        Diagnoses=["Профилактика"],
        HasFluorine=false,
        ImageSRC="../Resources/Images/ColgateBlue.jpg",
        Manufacturer="Colgate, США",
        ConsumerAge="Для всех возрастов",
        NeedToBright=false
    )
    {
        let PastContainer=document.querySelector("main");
        let DiagnArr=Diagnoses.join(", ");
        //colog(Manufacturer);
        PastContainer.insertAdjacentHTML
        (
            "beforeend",
            `<div class="ToothpasteBox">
                <div class="Name">${ToothpasteName}</div>
                <div class="ToothpasteRow">
                    <div style="position:relative">
                        <img
                            class="PastImage"
                            src=${ImageSRC}
                        ></img>
                        <div style="position:absolute;bottom:5%;left:5%;color:${NeedToBright?"white":"black"}">${ConsumerAge}</div>
                    </div>
                    <div class="ToothpasteDetails">
                        <div class="Diagnosis">Диагноз${Diagnoses.length-1?"ы":""}: ${DiagnArr}</div>
                        <div class="Manufacturer">Производитель: ${Manufacturer}</div>
                        <div class="Fluorine">${HasFluorine?"Со фтором":"Без фтора"}</div>
                    </div>
                </div>
            </div>`
        );
    }

    FilterBoxes()
    {
        let ToothpasteBox=document.querySelectorAll("div.ToothpasteBox");

        //let FluorineChoice=document.querySelector("input[type=radio]:checked").id;
        localStorage.setItem
        (
            "FluorineChecked",
            MainStorageOverlord.FluorineChecked=document.querySelector("input[type=radio]:checked").id.replace("Fluorine","")
        );//Set localStorage variable and MainStorageOverlord variable
        let FluorineChecked=MainStorageOverlord.FluorineChecked=="Indif"?null:MainStorageOverlord.FluorineChecked=="True"?true:false;//Set local variable for filtering
        //colog(MainStorageOverlord.FluorineChecked);

        
        let SelectedAge=document.querySelector("input[list=AgeList]").value;//Set local variable for filtering
        localStorage.setItem("SelectedAge",MainStorageOverlord.Storage.SelectedAge=SelectedAge);//Set localStorage variable

        let SelectedManufacturers=MainManufacturersContainer.GetSelectedManufacturers();
        MainStorageOverlord.Storage.SelectedManufacturers.forEach((element,i)=>{element[1]=SelectedManufacturers.includes(element[0]);});
        localStorage.setItem("SelectedManufacturers",JSON.stringify(MainStorageOverlord.Storage.SelectedManufacturers));

        let SelectedDiagnoses=MainDiagnosesContainer.GetSelectedDiagnoses();
        MainStorageOverlord.Storage.SelectedDiagnoses.forEach((element,i)=>{element[1]=SelectedDiagnoses.includes(element[0]);});
        localStorage.setItem("SelectedDiagnoses",JSON.stringify(MainStorageOverlord.Storage.SelectedDiagnoses));

        let Counter=0;
    
        ToothpasteBox.forEach
        (
            (element,i)=>
            {
                colog(`Index: ${i} (${element.children[0].innerHTML})`);
                
                //Filter by fluorine
                let DeservedVisibility=FluorineChecked==Pastes[i].HasFluorine||FluorineChecked==null;
                console.log
                (
                    `%c${DeservedVisibility?"\tFluorine matches!":"\tFluorine doesn't match..."}`,
                    `background: #222; color: ${DeservedVisibility?"#bada55":"#ffab55"}`
                );

                //Filter by age
                DeservedVisibility&&=[Pastes[i].ConsumerAge,"","Для всех возрастов"].includes(SelectedAge);
                console.log
                (
                    `%c${DeservedVisibility?"\t\tAge matches!":"\t\tAge doesn't match or the predicate above is false..."}`,
                    `background: #222; color: ${DeservedVisibility?"#bada55":"#ffab55"}`
                );

                //Filter by manufacturer
                DeservedVisibility&&=SelectedManufacturers?SelectedManufacturers.includes(Pastes[i].Manufacturer):false;
                console.log
                (
                    `%c${DeservedVisibility?"\t\t\tManufacturer matches!":"\t\t\tManufacturer doesn't match or the predicate above is false..."}`,
                    `background: #222; color: ${DeservedVisibility?"#bada55":"#ffab55"}`
                );

                //Filter by diagnosis
                DeservedVisibility&&=SelectedDiagnoses?Pastes[i].Diagnoses.some(item=>SelectedDiagnoses.includes(item)):false;
                console.log
                (
                    `%c${DeservedVisibility?"\t\t\t\tDiagnosis matches!":"\t\t\t\tDiagnosis doesn't match or the predicate above is false..."}`,
                    `background: #222; color: ${DeservedVisibility?"#bada55":"#ffab55"}`
                );
                
                element.style.display=DeservedVisibility?"flex":"none";
                if(DeservedVisibility)++Counter;
            }
        )
        console.log
        (
            `%cAmount of boxes that was showed: ${Counter}`,
            `background: #111; color: ${Counter?"#bada55":"#ddaabb"}`
        );
        colog(localStorage);
        return false;
    }

    /*
    RefreshBoxes()
    {
        MainStorageOverlord.RestoreFromBackup();
        this.FilterBoxes();
    }
    */


    InitPage()
    {
        let InitFluorineRadio=()=>
        {
            let FluorineChecked=MainStorageOverlord.Storage.FluorineChecked;
            document.querySelector(`input[type=radio]#Fluorine${FluorineChecked}`).checked=true;
        }
        InitFluorineRadio();

        let InitAgeList=()=>
        {
            let SelectedAge=MainStorageOverlord.Storage.SelectedAge;
            document.querySelector("input[list=AgeList]").value=SelectedAge;
        }
        InitAgeList();

        let InitDiagnosesFieldset=()=>
        {
            let DiagnosesFieldset=document.querySelector("fieldset#DiagnosesFieldset");
            DiagnosesFieldset.insertAdjacentHTML("beforeend","<legend>Диагноз</legend>\n");
            for(let i=0;i<MainDiagnosesContainer.GetDiagnosesCount();++i)
            {
                DiagnosesFieldset.insertAdjacentHTML
                (
                    "beforeend",
                    `<div name="DiagnosisDiv${i}" style="display:flex;min-height:25px;">
                        <label>${MainDiagnosesContainer.GetDiagnosisByIndex(i)}</label>
                        <input name="Diagnosis" type="checkbox" id="Diagn${i}"${MainStorageOverlord.Storage.SelectedDiagnoses[i][1]?" checked":""}>
                    </div>\n`
                )
            }
        };
        InitDiagnosesFieldset();

        let InitManufacturersFieldset=()=>
        {
            let Manufacturers=MainManufacturersContainer.GetAllManufacturers();
            let ManufacturersFieldSet=document.querySelector("fieldset#ManufacturersFieldset");
            ManufacturersFieldSet.insertAdjacentHTML("beforeend","<legend>Производитель</legend>\n");
            for(let i=0;i<Manufacturers.length;++i)
            {
                ManufacturersFieldSet.insertAdjacentHTML
                (
                    "beforeend",
                    `<div name="ManufacturerDiv${i}" style="display:flex;min-height:20px;padding-bottom:10px">
                        <label>${Manufacturers[i]}</label>
                        <input name="Manufacturer" type="checkbox" id="Manufacturer${i}"${MainStorageOverlord.Storage.SelectedManufacturers[i][1]?" checked":""}>
                    </div>\n`
                );
            };
        };
        InitManufacturersFieldset();
        
        let InitTastesFieldset=()=>
        {
            let Manufacturers=MainManufacturersContainer.GetAllManufacturers();
            let TastesFieldSet=document.querySelector("fieldset#TastesFieldset");
            TastesFieldSet.insertAdjacentHTML("beforeend","<legend>Вкус</legend>\n");
            for(let i=0;i<Manufacturers.length;++i)
            {
                TastesFieldSet.insertAdjacentHTML
                (
                    "beforeend",
                    `<div name="TasteDiv${i}" style="display:flex;min-height:20px;padding-bottom:10px">
                        <label>${Manufacturers[i]}</label>
                        <input name="Taste" type="checkbox" id="Taste${i}"${MainStorageOverlord.Storage.SelectedManufacturers[i][1]?" checked":""}>
                    </div>\n`
                );
            };
        };
        InitTastesFieldset();


        for(let i=0;i<Pastes.length;++i)
        {
            this.AddToothpasteBox
            (
                Pastes[i].Name,
                Pastes[i].Diagnoses,
                Pastes[i].HasFluorine,
                Pastes[i].ImageSRC,
                Pastes[i].Manufacturer,
                Pastes[i].ConsumerAge,
                ["Doramad Xtasy"].includes(Pastes[i].Name)
            );
            //colog(Pastes[i]);
        }
        this.FilterBoxes();
    }
}

let MainPageFiller=new PageFiller;
MainPageFiller.InitPage();