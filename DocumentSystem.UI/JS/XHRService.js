export default class XHRService {
    constructor(host) {
        this.host = host;
    }

    SendRequest(url, method, body = null, onSuccess, onError = null) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, this.host + url, true);

        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onload = function () {
            if (this.status == 200) {
                var result = JSON.parse(xhr.responseText);
                if (result.Status === 1)
                    onSuccess(result.Data);
                else
                    alert(result.Message);
            } else {
                onError();
            }
        }

        if (body !== null) {
            xhr.send(body);
            return;
        }

        xhr.send();
    }
};
