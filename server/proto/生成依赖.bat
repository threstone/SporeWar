cd ../tools/protobuf/server
node allStep
cd ../../../
copy /y game\app\core\proto\CommonProto.d.ts game_script\
copy /y game\app\core\proto\CommonProto.js game_script\

copy /y game\app\core\proto\CommonProto.d.ts ..\client\assets\scripts\framework\proto\
copy /y game\app\core\proto\CommonProto.js ..\client\assets\scripts\framework\proto\
pause
