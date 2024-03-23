document.getElementById("motorsikletForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var kiminInput = document.querySelector('input[name="kimin"]');
    var markaInput = document.querySelector('input[name="marka"]');
    var modelInput = document.querySelector('input[name="model"]');
    var yilInput = document.querySelector('input[name="yıl"]');
    var gacInput = document.querySelector('input[name="gac"]');
    
    var kimin = kiminInput.value;
    var marka = markaInput.value;
    var model = modelInput.value;
    var yil = yilInput.value;
    var gac = gacInput.value;
    
    var listElement = document.createElement("li");
    listElement.textContent = `Kimin: ${kimin}, Marka: ${marka}, Model: ${model}, Yıl: ${yil}, Gaç Beygir: ${gac}`;
    
    var motorsikletListesi = document.getElementById("motorsikletListesi");
    motorsikletListesi.appendChild(listElement);
    
    var motor = JSON.parse(localStorage.getItem("motor")) || [];
    var newMotor = { kimin: kimin, marka: marka, model: model, yil: yil, gac: gac };
    motor.push(newMotor);
    localStorage.setItem("motor", JSON.stringify(motor));
    
    kiminInput.value = "";
    markaInput.value = "";
    modelInput.value = "";
    yilInput.value = "";
    gacInput.value = "";
});

document.getElementById("silButton").addEventListener("click", function() {
    localStorage.removeItem("motor");
    document.getElementById("motorsikletListesi").innerHTML = "";
    document.querySelector('input[name="kimin"]').value = "";
    document.querySelector('input[name="marka"]').value = "";
    document.querySelector('input[name="model"]').value = "";
    document.querySelector('input[name="yıl"]').value = "";
    document.querySelector('input[name="gac"]').value = "";
});

window.onload = function() {
    var motor = JSON.parse(localStorage.getItem("motor")) || [];
    var motorsikletListesi = document.getElementById("motorsikletListesi");
    motor.forEach(function(motor) {
        var listElement = document.createElement("li");
        listElement.textContent = `Kimin: ${motor.kimin}, Marka: ${motor.marka}, Model: ${motor.model}, Yıl: ${motor.yil}, Gaç Beygir: ${motor.gac}`;
        motorsikletListesi.appendChild(listElement);
    });
};
