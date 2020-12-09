const httpRequest = { 
    host : 'localhost' , 
    port : 8080 ,
    method : 'POST' , 
    path : '/payments',
    headers : { 
         'content-type'  :  'application/json', 
         'content-length' : '51 '
    },
    body : '{"data" : "This is the body of JSON ."}'

}


const httpResponse = { 
    statuscode : 200 , 
    headers : { 
        'access-control-allow-orgin' : 'https://www.google.com' , 
        'content-type ' : 'application/json' , 
    },
    body : {}

}