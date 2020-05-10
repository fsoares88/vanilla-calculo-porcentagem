function calcular() {
    var v1 = parseInt(document.getElementById('v1').value);
    var v2 = parseInt(document.getElementById('v2').value);
    var valor3 = (v1 * v2) / 100;
    var valor4 = v1 - valor3;
    document.getElementById('pct').innerHTML = valor4;
} 