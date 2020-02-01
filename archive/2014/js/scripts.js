/******************************************************
ELASTIC META MENU
******************************************************/

$().ready(function() {  
    $('#meta-home').kwicks({  
        max: 140,  
        spacing:  0
    });  
});

/******************************************************
EMAIL CLOAKING
******************************************************/

function email(name, domain, suffix, text)
{
   var address = name + "\u0040" + domain + "." + suffix;
   var url = "mailto:" + address;

   if( ! text )
   {
      text = address;
   }
   document.write("<a href=\"" + url + "\">" + text + "</a>");
}
