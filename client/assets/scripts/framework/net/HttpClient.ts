export class HttpClient {
    public static Request(url: string, body: any, method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS', repType: XMLHttpRequestResponseType = 'json'): Promise<any> {
        let request!: Promise<any>;
        switch (method) {
            case 'GET':
                request = HttpClient.httpGet(url, body, repType);
                break;
            case 'POST':
                request = HttpClient.httpPost(url, body, repType);
                break;
            default:
                break;
        }
        return request;
    }

    public static httpGet(url: string, body: any, rspType: XMLHttpRequestResponseType = 'json'): Promise<any> {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            if (body) {
                let str = "?";
                for (let k in body) {
                    if (str != "?") {
                        str += "&";
                    }
                    str += `${k}=${body[k]}`;
                }
                url = url + str;
            }
            req.open('GET', url, true);
            req.onreadystatechange = () => {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        if (rspType == 'text') {
                            resolve(req.responseText)
                        } else if (rspType == 'json') {
                            if (typeof req.response == "string") {
                                resolve(JSON.parse(req.response));
                            } else {
                                resolve(req.response)
                            }
                        } else {
                            resolve(req.response);
                        }
                    } else {
                        reject({ code: req.status, msg: req.statusText, data: {} });
                    }
                }
            }
            switch (rspType) {
                case 'json':
                    req.setRequestHeader('content-type', 'application/json')
                    break;
                case 'text':
                    req.setRequestHeader('content-type', 'text/plain')
                    break
            }
            // set reponse type ，如果是二进制，则最好是arraybuffer或者blob
            if (rspType == 'blob' || rspType == 'arraybuffer' || rspType == 'text') {
                req.responseType = rspType
            }
            req.ontimeout = () => {
                reject({ code: -1, msg: "网络异常，消息发送超时", data: {} });
            }
            req.onerror = () => {
                reject({ code: -1, msg: "网络异常，消息发送超时", data: {} });
            }
            req.send();
        });

    }
    static _EncodeFormData(data) {
        var pairs = [];
        var regexp = /%20/g;

        for (var name in data) {
            var value = data[name];
            var pair =
                encodeURIComponent(name).replace(regexp, "+")
                + "=" +
                encodeURIComponent(value).replace(regexp, "+");
            pairs.push(pair);
        }
        return pairs.join("&");
    }


    public static httpPost(url: string, body: any, rspType: XMLHttpRequestResponseType = 'json'): Promise<any> {
        return new Promise((resolve, reject) => {
            let req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.onreadystatechange = () => {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        if (rspType == 'text') {
                            resolve(req.responseText)
                        } else if (rspType == 'json') {
                            if (typeof req.response == "string") {
                                resolve(JSON.parse(req.response));
                            } else {
                                resolve(req.response)
                            }
                        } else {
                            resolve(req.response);
                        }
                    } else {
                        reject({ code: req.status, msg: req.statusText, data: {} });
                    }
                }
            }
            req.setRequestHeader('content-type', "application/x-www-form-urlencoded");
            if (cc.sys.isNative)
                req.setRequestHeader("Accept-Encoding", "gzip,deflate");
            // switch (rspType) {
            //     case 'json':
            //         req.setRequestHeader('content-type', 'application/json')
            //         break;
            //     case 'text':
            //         req.setRequestHeader('content-type', 'text/plain')
            //     case 'urlenco':
            //         req.setRequestHeader('content-type', "application/x-www-form-urlencoded")
            //         break;
            // }
            // set reponse type ，如果是二进制，则最好是arraybuffer或者blob
            if (rspType == 'blob' || rspType == 'arraybuffer' || rspType == 'text') {
                req.responseType = rspType
            }
            let p;
            if (body) p = HttpClient._EncodeFormData(body);
            req.ontimeout = () => {
                reject({ code: -1, msg: 'timeout', data: {} });
            }
            req.onerror = (a) => {
                reject({ code: -1, msg: 'onerror', data: a });
            }
            req.send(p);
        });
    }
}