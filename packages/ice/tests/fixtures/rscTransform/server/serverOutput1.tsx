const Server = require('react-server-dom-webpack/server.node');
const registerServerReference = Server.registerServerReference;
function InnerServer() {
    return <div>inner server</div>;
};
registerServerReference(InnerServer, 'file:///Users/lzx/Documents/project/ice/packages/ice/tests/fixtures/rscTransform/server/serverInput1.tsx', null);
module.exports = InnerServer;
