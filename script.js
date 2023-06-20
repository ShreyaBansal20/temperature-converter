const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    
    const FahTocel = (fehr) => {
        let celcius = Math.round((fehr - 32) * 5/9);
        return celcius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `= ${result}fahrenheit`;

    }
    else{
        result = FahTocel(numberTemp);
        document.getElementById('result').innerHTML = `= ${result}Celsius`;

    }
}
