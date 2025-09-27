

var dataset1 ={
    name:"Enzo",
    species:"Dog",
    breed:"German Shepherd",
    age:"2 years",
    color:"Black and Tan",
    temperament:"Nervous",
    entryType:"Surrender"
}
var dataset2 ={
    name:"Eve",
    species:"Cat",
    breed:"DSH",
    age:"6 months",
    color:"Black",
    temperament:"Friendly",
    entryType:"Born in Shelter"
}
var dataset3 ={
    name:"Alexander",
    species:"Cat",
    breed:"DSH",
    age:"1 year",
    color:"Silver Tabby",
    temperament:"Excitable",
    entryType:"Stray"
}
var dataset4 ={
    name:"Hazel",
    species:"Dog",
    breed:"Pitt/Husky Mix",
    age:"7 months",
    color:"Golden",
    temperament:"Playful",
    entryType:"Transfer"
}
var dataset5 = {
    name:"Phoebe",
    species:"Bird",
    breed:"Cockatiel",
    age:"1 year",
    color:"Piebald",
    temperament:"Quiet",
    entryType:"Surrender"
}

var jsonObject = [];
jsonObject.push(dataset1);
jsonObject.push(dataset2);
jsonObject.push(dataset3);
jsonObject.push(dataset4);
jsonObject.push(dataset5);


main();

function main() { 
    console.log(jsonObject);
    console.log(jsonObject.length);
    console.log(JSON.stringify(jsonObject)); 
    showTable();
}

function showTable(){ //show table
    var htmlString = "";

    for (var i = 0; i < jsonObject.length; i++){
        htmlString += "<tr>";
            htmlString += "<td>" + jsonObject[i].name + "</td>";
            htmlString += "<td>" + jsonObject[i].species + "</td>";
            htmlString += "<td>" + jsonObject[i].breed + "</td>";
            htmlString += "<td>" + jsonObject[i].age + "</td>";
            htmlString += "<td>" + jsonObject[i].color + "</td>";
            htmlString += "<td>" + jsonObject[i].temperament + "</td>";
            htmlString += "<td>" + jsonObject[i].entryType + "</td>";
        htmlString += "</tr>";
    }

    var tableBodyObj = document.getElementById("animalTable");

    tableBodyObj.innerHTML = htmlString;
}