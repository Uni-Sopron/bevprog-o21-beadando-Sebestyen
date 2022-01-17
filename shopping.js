function containsUnit(units, input){
    for(let i = 0; i < units.length; i++){
        if(input === units[i]){
            return true
        }
    }
    return false
}

function print(){
    let product = document.getElementById("product").value
    let amount = Number(document.getElementById("amount").value)
    let unit = document.getElementById("unit").value
    let cost = Number(document.getElementById("cost").value)
    let units = ["mg","g","dkg","kg","t","cl","ml","dl","l","hl"]
   
    //detect if input is valid
    let detection = false

    if(unit === "") {
        result = "<li>" + amount + " pieces of" + " " + product + " for " + cost + " $" + "</li>"
        detection = true
    }
    else if(containsUnit(units, unit)){
        result = "<li>" + amount + " " + unit + " of" + " " + product + " for " +cost + " $" + "</li>"
        detection = true
    } else {
        result = alert("Wrong input, please use an existing unit")
    }
    
    if(detection == true){
        document.getElementById("result").innerHTML += result
    }

    fullprice()
    delete_input()
}

function fullprice() {
    let costs = Number(document.getElementById("cost").value)
    let fullcost = Number(document.getElementById("fullcost").innerHTML)
    let hufprice = Number(document.getElementById("hufprice").innerHTML)
    
    fullcost += costs

    document.getElementById("fullcost").innerHTML = fullcost

    //yearly avearage price of usd to huf 
    hufprice = fullcost*303.29

    document.getElementById("hufprice").innerHTML = hufprice

}

function delete_input(){
    document.getElementById("product").value=""
    document.getElementById("amount").value=""
    document.getElementById("unit").value=""
    document.getElementById("cost").value=""
}

