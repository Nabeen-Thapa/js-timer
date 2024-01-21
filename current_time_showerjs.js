
function formatDate() {
    day = new Date();
    str_op = day.getFullYear() + ' ' + day.toLocaleString('default', { month: 'long' }) + ' ' + day.getMonth() + '   ' + day.toLocaleTimeString() + '   ' + day.toLocaleDateString('en-US', { weekday: 'long' });
    setTimeout(formatDate, 1000);
    document.getElementById('idFormat2').innerHTML = str_op;
}
console.log(formatDate());
document.getElementById('idFormat2').style.fontSize = "55px";

document.getElementById('idFormat2').style.height = "150px";
document.getElementById('idFormat2').style.width = "1000px";
document.getElementById('idFormat2').style.color = 'yellow';
document.getElementById('idFormat2').style.textAlign = "center";
document.getElementById('idFormat2').style.border = '2px solid blue';
document.getElementById('idFormat2').style.borderRadius = "20px";
document.getElementById('idFormat2').style.margin = "150px";
document.getElementById('idFormat2').style.backgroundImage = "url('timer1.jpg')";
document.getElementById('idFormat2').style.padding = "10px 0px 0px 0px";
