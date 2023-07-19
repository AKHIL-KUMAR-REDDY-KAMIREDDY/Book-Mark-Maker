let bottomsectionid=document.getElementById("bottomsectionid");

let sitename=document.getElementById("sitename");
let nameerr=document.getElementById("nameerr");

let siteurl=document.getElementById("siteurl");
let urlerr=document.getElementById("urlerr");

let myform=document.getElementById("myform");

sitename.addEventListener("blur",function(event){
    if(event.target.value===""){
        nameerr.textContent="Required*";
    }else{
        nameerr.textContent="";
    }
})
siteurl.addEventListener("blur",function(event){
    if(event.target.value===""){
        urlerr.textContent="Required*";
    }else{
        urlerr.textContent="";
    }
})

function adddetailestocard(){
    let namevalue=sitename.value;
    let sitevalue=siteurl.value;
    if(namevalue!=="" ||sitevalue!==""){
        let bottominnerdiv=document.createElement("div");
        bottominnerdiv.classList.add("bottominner");
        bottomsectionid.appendChild(bottominnerdiv);

        let sitenameheading=document.createElement("h1");
        sitenameheading.textContent=namevalue;
        bottominnerdiv.appendChild(sitenameheading);

        let siteurldata=document.createElement("a");
        siteurldata.textContent=sitevalue;
        siteurldata.href=sitevalue;
        siteurldata.classList.add("linkclass");
        bottominnerdiv.appendChild(siteurldata);
    }
}




myform.addEventListener("submit",function(event){
    event.preventDefault();
    adddetailestocard();
})