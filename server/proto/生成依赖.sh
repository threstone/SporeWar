cd ../tools/protobuf/server
node allStep
cd ../../../
cp ./game/app/servers/logic/src/CommonProto.d.ts ./game_script
cp ./game/app/servers/logic/src/CommonProto.js ./game_script
cp ./game/app/servers/logic/src/CommonProto.d.ts $SVN_HOME/SlgDinosaur02/Design/proto
cp ./game/app/servers/logic/src/CommonProto.js $SVN_HOME/SlgDinosaur02/Design/proto
cp ./proto/*.proto $SVN_HOME/SlgDinosaur02/Design/proto
