function doMagic() {
    console.log('calling payment server api...');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:9000/');

    xhr.onload = function () {
        console.log(this.response);
    }

    xhr.send(null);
}

function processPayment() {

    console.log('process payment..');
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:9000');

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log('request finished!');
            console.log(this.response);
            // Request finished. Do processing here.
        }
    }

    xhr.send("foo=bar&lorem=ipsum");

}