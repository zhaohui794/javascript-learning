var http = require("http");

var serve = http.createServer(function (request, response) {
  console.log(request.url);

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  //跨域允许的请求方式
  response.setHeader(
    "Access-Control-Allow-Methods",
    "PUT,POST,GET,DELETE,OPTIONS"
  );

  let list;

  if (request.url === "/") {
    list = [
      {
        a: 123,
      },
      {
        a: 456,
      },
    ];
  } else {
    list = [
      {
        a: 456,
      },
      {
        a: 123,
      },
    ];
  }

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(JSON.stringify(list));
});

serve.listen(8080);

console.log("服务器已经在监听8080端口了！");
