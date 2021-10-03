// Agregamos la licencia de la libreria para que no nos muestre marca de agua
window.addeventasync = function(){
    addeventatc.settings({
        license : "USER-CLIENT-ID"
    });
};

//AddEvent Settings, Activa o desactiva un calendario y le podemos cambiar el nombre
window.addeventasync = function(){
    addeventatc.settings({
        appleical  : {show:true, text:"Apple Calendar"},
        google     : {show:true, text:"Google Calendar"},
        office365  : {show:false, text:"Office 365 <em>(online)</em>"},
        outlook    : {show:false, text:"Outlook"},
        outlookcom : {show:true, text:"Outlook.com"},
        yahoo      : {show:false, text:"Yahoo <em>(online)</em>"}
    });
};

