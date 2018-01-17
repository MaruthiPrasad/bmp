var result = [];
var lastExp;
$(document).ready(function () {
    
    $('#result_table').hide();
    $('#exp_submit').click(function(){
        saveExpressionResult();
    });

    $(document).on('click', '#export_data', function(){
        exportResult();
    });
    
    $('#exp_data').focus(function(){
        $(this).val(lastExp);
    });
});

/**
 * Appends expression to table
 */
function saveExpressionResult() {
    
    var exp = $('#exp_data').val();    
    if (validateExpression(exp)) {
        
        var expResult = parseFloat(eval(exp));
        var currentTime = getCurrentTime();
        lastExp = exp;
        $('#exp_list').prepend('<tr><td>'+ currentTime +'</td><td>'+ exp +'</td><td>'+expResult+'</td></tr>');
        var data = [currentTime, exp, expResult];
        result.unshift(data);
        $('#result_table').show();
        $('#exp_data').val('');
    } else {
        alert('Please Enter valid Expression');
        $('#exp_data').val('');
    }
}

/**
 * Validates the expression
 * @returns Boolean
 */
function validateExpression(exp) {

    try
    {
        val = parseFloat(eval(exp));
    }
    catch (err)
    {
        return false;
    }    
    return true;
}

/**
 * Exports result as csv file
 */
function exportResult() {
    
    var colHeading = ["Time", "Expression", "Result"];
    result.unshift(colHeading);
    var data = result;       
    
    if (navigator.msSaveBlob) {
        var CSV = '';
        data.forEach(function(infoArray, index){
           dataString = infoArray.join(",");
           CSV += index < data.length ? dataString+ "\n" : dataString;
        });        
        var blob = new Blob([CSV],{type: "text/csv;charset=utf-8;"});
        navigator.msSaveBlob(blob, "Expression_report.csv");        
    } else {
        var csvContent = "data:text/csv;charset=utf-8,";
        data.forEach(function(infoArray, index){
           dataString = infoArray.join(",");
           csvContent += index < data.length ? dataString+ "\n" : dataString;
        });
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Expression_report.csv");
        document.body.appendChild(link);
        link.click();
    }
}

function getCurrentTime() {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        
    return datetime;
}