var today = new Date().toISOString().split('T')[0];
document.getElementById("check-in").setAttribute('min', today);
document.getElementById("check-out").setAttribute('min', today);