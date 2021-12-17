function write_dates(subjects, date)
{
    for(var i=0; i < Object.keys(subjects).length; i++)
    {
        if (Object.values(subjects)[i][0] != "/")
        {
            if (Object.values(subjects)[i][1].split(" ") != date)
            {
                document.getElementById("subjects").innerHTML+=Object.keys(subjects)[i];
                document.getElementById("subjects").innerHTML+=":     ";
                document.getElementById("subjects").innerHTML+=Object.values(subjects)[i][0];
                if (Object.values(subjects)[i][1].split(" ")[1] == date[1])
                {
                    document.getElementById("subjects").innerHTML+=" in ";
                    var difference = parseInt(Object.values(subjects)[i][1].split(" ")[2])-parseInt(date[2]);
                    document.getElementById("subjects").innerHTML+= difference;
                    if (difference == 1)
                    {
                        document.getElementById("subjects").innerHTML+=" day";
                    }
                    else
                    {
                        document.getElementById("subjects").innerHTML+=" days";
                    }
                }
                document.getElementById("subjects").innerHTML+="<br><br>";
            }
        }
    }
}
var date = new Date().toDateString().split(" ");
console.log(date);
var subjects = {"Französisch": ["20.12.2021 (Montag)", "Mon Dec 20 2021"],
                "Deutsch": ["21.12.2021 (Dienstag)", "Di Dec 21 2021"]}   
write_dates(subjects, date)
