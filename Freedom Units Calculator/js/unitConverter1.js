function unitConverter(){
    var containerDiv = document.createElement('div');
    containerDiv.className = 'containerDiv';
    var table = document.createElement('table');
    table.id = "table";
    table.className = "table";
    var main = $('#main');

    var usersUnitsString = $('#userUnits').val();
    var userUnitsVal = parseFloat(usersUnitsString);
    var unitTypeString = $('#unitType').val();

    class freedomUnitObject{
        constructor(valInInches, innerTextVal){
            this.value = valInInches;
            this.innerTextVal = innerTextVal;
        }
    }

    //all objects value is in inches; create object and add to array
    var footbalFieldObj = new freedomUnitObject(3600, "Football Fields");
    var cokeCanObj = new freedomUnitObject(4.8, "Coke Cans");
    var statueOfLibertyObj = new freedomUnitObject(3661, "Statues of Liberty");
    var shaqObj = new freedomUnitObject(85, "Shaquille O'Neals");
    var pencilObj = new freedomUnitObject(7.5, "Number 2 Pencils");
    var dannyDevitoObj = new freedomUnitObject(58, "Danny Devitos");
    var schoolBusObj = new freedomUnitObject(540, "School Buses (Usa/Canada)");
    var baldEagleObj = new freedomUnitObject(32.4, "Bald Eagles"); //assuming 2.7 ft or 32.4 inches
    var soloCupObj = new freedomUnitObject(5.4, "Red Solo Cups");
    var basketBallHoopObj = new freedomUnitObject(156, "NBA Basketball Hoops"); //NBA rim + backboard = 13 ft- 156 inches
    var greatWhiteSharkObj = new freedomUnitObject(192, "Great White Sharks"); //assuming female great white=16 ft

    var freedomUnitArray = [footbalFieldObj, cokeCanObj, statueOfLibertyObj, shaqObj, pencilObj, dannyDevitoObj, schoolBusObj,
        baldEagleObj, soloCupObj, basketBallHoopObj, greatWhiteSharkObj];
    
    function inchesToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = (userUnitsVal / freedomUnitArray[i].value).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }

    function feetToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = (userUnitsVal * (12 / freedomUnitArray[i].value)).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }

    function milesToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = (userUnitsVal * (63360 / freedomUnitArray[i].value)).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }

    function millimetersToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = (userUnitsVal / (25.4 * freedomUnitArray[i].value)).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }

    function centimetersToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = (userUnitsVal / (2.5 * freedomUnitArray[i].value)).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }

    function metersToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = ((userUnitsVal * 39.3701) / freedomUnitArray[i].value).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }
    //xm  39.3701 in/ 1m  1ff/freedomUnitArray[i].value

    function kilometersToFreedom(){
        if($('table')){$('table').remove();}
        for(var i = 0; i < freedomUnitArray.length; i++){
            var freedomUnitNumber = ((userUnitsVal * 39370.1) / freedomUnitArray[i].value).toFixed(2);
            var stringFreedomUnitNum = freedomUnitNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            var tableRow = document.createElement('tr');
            var tableData1 = document.createElement('td');
            var tableData2 = document.createElement('td');
            tableData1.innerText = freedomUnitArray[i].innerTextVal;
            tableData2.innerText = stringFreedomUnitNum;
            tableRow.append(tableData2);
            tableRow.append(tableData1);
            table.append(tableRow);

            containerDiv.append(table);
            main.append(containerDiv);
        }
    }
    //xkm  39370.1 in/1km  1ff/freedomUnitArray[i].valuein
    
    var isANum = /^[+-]?(\d+\.?\d*|\.\d+)$/;
    if(isANum.test(usersUnitsString)){

    if(unitTypeString == "Inches" && usersUnitsString != ""){
        inchesToFreedom();
    }

    if(unitTypeString == "Feet" && usersUnitsString != ""){
        feetToFreedom();
    }

    if(unitTypeString == "Miles" && usersUnitsString != ""){
        milesToFreedom();
    }

    if(unitTypeString == "Millimeters" && usersUnitsString != ""){
        millimetersToFreedom();
    }

    if(unitTypeString == "Centimeters" && usersUnitsString != ""){
        centimetersToFreedom();
    }

    if(unitTypeString == "Meters" && usersUnitsString != ""){
        metersToFreedom();
    }

    if(unitTypeString == "Kilometers" && usersUnitsString != ""){
        kilometersToFreedom();
    }
    }
}//end UnitConverter






window.onload = function(){
    var submitBtn = $('#submit');
    submitBtn.click(unitConverter);
}