body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: black;
}

.container {
    background-color: black;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px white; /* shadow */
    text-align: center;
}

.input-container {
    margin-bottom: 20px;
}

.text-input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    border-radius: 4px;
    resize: vertical;
    box-shadow: 0 0 10px white; /* shadow */
}

.generate-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.generate-button:hover {
    background-color: #0056b3;
}

.qr-code {
    width: 300px;
    height: 300px;
    background-color: burlywood;
    margin: 20px auto;
    border: 2px solid beige;;
    /*border-radius: 15px;*/
    box-shadow: 0 0 10px white; /* shadow */
    overflow: hidden; /* Ensure the map stays within bounds */
}

.download-button {
    padding: 10px 20px;
    background-color: black;
    color: #fff;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.download-button:hover {
    background-color: #218838;
}

.copy-button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    margin-right: 10px;
}

.copy-button:hover {
    background-color: #218838;
}

.file-format {
    padding: 9px 1px;
    border-radius: 4px;
    border: 1px solid white;
    background-color: black;
    color: white;
}

/* For smaller screens */
@media screen and (max-width: 600px) {
    .container {
      width: 85%;
      height: calc(155vw);
    }
  }
