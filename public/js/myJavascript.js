$(document).ready(function(){
    var checkbox = $('table tbody input[type="checkbox"]');
    $("#selectAll").click(function(){
        if(this.checked){
            checkbox.each(function(){
                this.checked = true;                        
            });
        } else{
            checkbox.each(function(){
                this.checked = false;                        
            });
        } 
    });
    checkbox.click(function(){
        if(!this.checked){
            $("#selectAll").prop("checked", false);
        }
    });
    $(".message-box").fadeTo(4000, 500).slideUp(500, function(){
        $(".message-box").slideUp(500).remove();
    });

    $("#remove_customer").click(function(){
        if (confirm("will you remove seleted cutomers really?")){
           $('form.selected_customer_del').submit();
         }
    });
    
    $("#remove_subuser").click(function(){
        if (confirm("will you remove seleted users really?")){
           $('form#selected_subuser_del').submit();
         }
    });
    
});

function openEditModal(id){
    $("#"+id).attr("href", "#editCustomerModal"+id);
    if($('input#ifcheckedfromDb'+id).val() == "checked"){
        $('input[type="checkbox"]#customCheck'+id).prop("checked", true);
    }
    if($('input#ifcheckedLiveReports'+id).val() == "selected"){
        $('input[type="checkbox"]#generateReportCheck'+id).prop("checked", true);
    }
}

function openSubUserEditModal(mainId){
    $("#"+mainId).attr("href", "#editSubUserModal"+mainId);
}




