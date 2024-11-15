cd ../tools/protobuf/server
node allStep
cd ../../../
copy /y game\app\servers\logic\src\CommonProto.d.ts game_script\
copy /y game\app\servers\logic\src\CommonProto.js game_script\

copy /y game\app\servers\logic\src\CommonProto.d.ts ..\client\assets\scripts\framework\proto\
copy /y game\app\servers\logic\src\CommonProto.js ..\client\assets\scripts\framework\proto\
pause
