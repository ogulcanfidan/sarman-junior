document.getElementById("motorsikletForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var kimin = document.querySelector('input[name="kimin"]').value;
    var marka = document.querySelector('input[name="marka"]').value;
    var model = document.querySelector('input[name="model"]').value;
    var yil = document.querySelector('input[name="yıl"]').value;
    var gac = document.querySelector('input[name="gac"]').value;
    
    
    var listElement = document.createElement("li");
    listElement.textContent = `Kimin: ${kimin}, Marka: ${marka}, Model: ${model}, Yıl: ${yil}, Gaç Beygir: ${gac}`;

    
    var motorsikletListesi = document.getElementById("motorsikletListesi");
    motorsikletListesi.appendChild(listElement);
    
    
    var motor = JSON.parse(localStorage.getItem("motor")) || [];
    var newMotor = { kimin: kimin, marka: marka, model: model, yil: yil, gac: gac };
    motor.push(newMotor);
    localStorage.setItem("motor", JSON.stringify(motor));
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
document.getElementById("silButton").addEventListener("click", function() {
    localStorage.removeItem("motor");
    document.getElementById("motorsikletListesi").innerHTML = "";
});
