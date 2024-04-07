document.addEventListener('DOMContentLoaded', function() {
    var qrCode = null;

    var generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', function() {
        var text = document.getElementById('textInput').value.trim();
        if (text === "") {
            alert("Please enter some text.");
            return;
        }
        if (qrCode === null) {
            qrCode = new QRCode("qrCode", {
                text: text,
                width: 300,
                height: 300
            });
        } else {
            qrCode.makeCode(text);
        }
    });

    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        if (qrCode === null) {
            alert("Please generate a QR code first.");
            return;
        }
        var fileFormat = document.getElementById("fileFormat").value;
        var qrCodeImage = document.querySelector("#qrCode img");
        var downloadLink = document.createElement("a");
        downloadLink.href = qrCodeImage.src;
        downloadLink.download = "qrcode." + fileFormat;
        downloadLink.click();
    });
});
