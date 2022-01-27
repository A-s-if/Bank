function login(){
    document.getElementById("logindiv").style.display="none";
    document.getElementById("mainbalanceinputdiv").style.display="block";
}



function deposite(){
    let inputamount=document.getElementById("enterdipositeamount").value;
    let parsintamount=parseInt(inputamount);

    let diposite=document.getElementById("dipositeamount").innerText;
    let parsintdiposite=parseInt(diposite);

    let total=parsintdiposite+parsintamount;


    document.getElementById("dipositeamount").innerText=total;


    let totalamount=document.getElementById("totalamount").value;
    let totalpursint=parseInt(totalamount);
    let totalplus=totalpursint + parsintamount;


    document.getElementById("totalamount").innerText = totalplus;

}