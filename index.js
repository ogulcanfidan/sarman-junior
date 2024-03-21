document.getElementById("motorsikletForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var kimim = document.querySelector('input[name="kimin"]').value;
    var marka = document.querySelector('input[name="marka"]').value;
    var model = document.querySelector('input[name="model"]').value;
    var yil = document.querySelector('input[name="yıl"]').value;
    var gac = document.querySelector('input[name="gac"]').value;
    
    
    var listElement = document.createElement("li");
    listElement.textContent = `Kimin: ${kimin}, Marka: ${marka}, Model: ${model}, Yıl: ${yil}, Gaç Beygir: ${gac}`;

    
    var motorcycleList = document.getElementById("motorsikletListesi");
    motorcycleList.appendChild(listElement);
    
    
    var motorcycles = JSON.parse(localStorage.getItem("motorcycles")) || [];
    var newMotorcycle = { kimin: kimin, marka: marka, model: model, yil: yil, gac: gac };
    motorcycles.push(newMotorcycle);
    localStorage.setItem("motorcycles", JSON.stringify(motorcycles));
});

window.onload = function() {
    var motorcycles = JSON.parse(localStorage.getItem("motorcycles")) || [];
    var motorcycleList = document.getElementById("motorsikletListesi");
    motorcycles.forEach(function(motorcycle) {
        var listElement = document.createElement("li");
        listElement.textContent = `Kimin: ${motorcycle.kimin}, Marka: ${motorcycle.marka}, Model: ${motorcycle.model}, Yıl: ${motorcycle.yil}, Gaç Beygir: ${motorcycle.gac}`;
        motorcycleList.appendChild(listElement);
    });
};

