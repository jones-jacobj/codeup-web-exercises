let visible = false;

$('#toggler').click(function(){
    if(visible){
        // addClass
        $('dd').addClass('invisible')
    }else{
        // removeClass
        $('dd').removeClass('invisible')
    }
    visible = !visible;
});

