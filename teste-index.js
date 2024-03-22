import { handler } from './index.mjs';


const EVENT = {
    "resource": "/auth",
    "path": "/auth",
    "httpMethod": "POST",
    "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Host": "87oarveouf.execute-api.us-east-1.amazonaws.com",
        "Postman-Token": "316acd3a-5cfa-4ee9-aa08-580bc0201509",
        "User-Agent": "PostmanRuntime/7.34.0",
        "X-Amzn-Trace-Id": "Root=1-6542fa36-108a0e4b2e00d0af258cee93",
        "X-Forwarded-For": "191.178.248.226",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
        "Accept": [
            "*/*"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Host": [
            "87oarveouf.execute-api.us-east-1.amazonaws.com"
        ],
        "Postman-Token": [
            "316acd3a-5cfa-4ee9-aa08-580bc0201509"
        ],
        "User-Agent": [
            "PostmanRuntime/7.34.0"
        ],
        "X-Amzn-Trace-Id": [
            "Root=1-6542fa36-108a0e4b2e00d0af258cee93"
        ],
        "X-Forwarded-For": [
            "191.178.248.226"
        ],
        "X-Forwarded-Port": [
            "443"
        ],
        "X-Forwarded-Proto": [
            "https"
        ]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
        "resourceId": "nwssx6",
        "resourcePath": "/auth",
        "httpMethod": "POST",
        "extendedRequestId": "NvwIfFKloAMEDsQ=",
        "requestTime": "02/Nov/2023:01:24:06 +0000",
        "path": "/dev/auth",
        "accountId": "038558987401",
        "protocol": "HTTP/1.1",
        "stage": "dev",
        "domainPrefix": "87oarveouf",
        "requestTimeEpoch": 1698888246056,
        "requestId": "5d10405d-9e03-4217-b7e3-ca3fc12cb2f5",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "sourceIp": "191.178.248.226",
            "principalOrgId": null,
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": "PostmanRuntime/7.34.0",
            "user": null
        },
        "domainName": "87oarveouf.execute-api.us-east-1.amazonaws.com",
        "apiId": "87oarveouf"
    },
    "body": "{\r\n    \"cpf\": \"01234567890\"\r\n}",
    "isBase64Encoded": false
}

handler(
    // event
    EVENT,
    // context
    {},
    // callback function with two arguments
    function (err, payload) {
        console.log;       console.log(payload);
    }
);
