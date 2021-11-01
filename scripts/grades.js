function show_grades(subjects, average)
{
    for (var i=0; i < Object.keys(subjects).length; i++)
    {
        document.getElementById("subjects").innerHTML+=Object.keys(subjects)[i];
        document.getElementById("subjects").innerHTML+="  "
        document.getElementById("subjects").innerHTML+=Object.values(subjects)[i][0];
        document.getElementById("subjects").innerHTML+="  "
        document.getElementById("subjects").innerHTML+=Object.values(subjects)[i][1];
        document.getElementById("subjects").innerHTML+="  "
        if (Object.values(subjects)[i].length == 3)
        {
            document.getElementById("subjects").innerHTML+=Object.values(subjects)[i][2];
        }
        if (Object.values(subjects)[i][0] != "/")
        {
            average += parseFloat(Object.values(subjects)[i][0]);
            len+=1
        }
        document.getElementById("subjects").innerHTML+="<br>";
    }
    console.log()
    average = average/len;
    document.getElementById("subjects").innerHTML+="Notendurchschnitt: <br>";
    document.getElementById("subjects").innerHTML+=average;
}
var grades = 
    {"Deutsch":["/", "/", "/"], 
    "Mathe":["/", "/", "/"], 
    "Englisch":["/", "/", "/"], 
    "Französisch":["/", "/", "/"], 
    "Chemie":["/", "/"], 
    "Physik":["/", "/"], 
    "Biologie":["/", "/"], 
    "Geschichte":["/", "/"], 
    "Sport":["/", "/"], 
    "Religion":["/", "/"], 
    "Informatik":["/", "/"], 
    "Politik und Wirtschaft":["/", "/"]};
    var average=0.0;
    var len=0
    show_grades(grades, average);