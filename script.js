document.addEventListener('DOMContentLoaded', function() {
    var qrCode = null;
    var textInput = document.getElementById('textInput');

    qrCode = new QRCode("qrCode", {  //initial load-screen message
        text: "hello",
        width: 300,
        height: 300
    });

    textInput.addEventListener('input', function() {
        var text = textInput.value.trim();
        if (text === "") {
            // Clear the QR code container if no text is entered
            if (qrCode !== null) {
                qrCode.clear();
            }
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
        var timestamp = Date.now();
        downloadLink.href = qrCodeImage.src;
        downloadLink.download = "qrcode_" + timestamp + "." + fileFormat;
        downloadLink.click();
    });

    var copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
        if (qrCode === null) {
            alert("Please generate a QR code first.");
            return;
        }
        var qrCodeImage = document.querySelector("#qrCode img");
        var canvas = document.createElement("canvas");
        var context = canvas.getContext('2d');
        canvas.width = qrCodeImage.width;
        canvas.height = qrCodeImage.height;
        context.drawImage(qrCodeImage, 0, 0);
        canvas.toBlob(function(blob) {
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ]).then(function() {
                alert("QR code copied to clipboard!");
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }, 'image/png');
    });
});
