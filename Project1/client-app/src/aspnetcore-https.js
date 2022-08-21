"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var child_process = require("child_process");
var spawn = child_process.spawn;
var baseFolder = process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? "".concat(process.env.APPDATA, "/ASP.NET/https")
    : "".concat(process.env.HOME, "/.aspnet/https");
var certArg = process.argv.map(function (arg) { return arg.match('/--name=(?<value>.+)/i'); }).filter(Boolean)[0];
var certName = certArg ? (_a = certArg === null || certArg === void 0 ? void 0 : certArg.groups) === null || _a === void 0 ? void 0 : _a.value : process.env.npm_package_name;
if (!certName) {
    console.error('Invalid certificate name. Run this script in the context of an npm/yarn script or pass --name=<<app>> explicitly');
    process.exit(-1);
}
var moduleCertFilePath = path.join(baseFolder, "".concat(certName, ".pem"));
var moduleKeyFilePath = path.join(baseFolder, "".concat(certName, ".key"));
if (!fs.existsSync(moduleCertFilePath) || !fs.existsSync(moduleKeyFilePath)) {
    spawn('dotnet', [
        'dev-certs',
        'https',
        '--export-path',
        moduleCertFilePath,
        '--format',
        'Pem',
        '--no-password',
    ], { stdio: 'inherit', })
        .on('exit', function (code) { return process.exit(code); });
}
//# sourceMappingURL=aspnetcore-https.js.map