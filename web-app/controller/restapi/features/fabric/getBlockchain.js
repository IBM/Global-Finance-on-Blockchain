const Fabric_Client = require('fabric-client');
const fs = require('fs');
var path = require('path');

var fabric_client = new Fabric_Client();

// capture network variables from config.json
const configDirectory = path.join(process.cwd(), 'controller/restapi/features/fabric');
const configPath = path.join(configDirectory, 'config.json');
const configJSON = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configJSON);

var peerName = config.peerName;
var ordererName = config.ordererName;
var userName = config.appAdmin;
var channelName = config.channel_name;

const ccpFile = config.connection_file;
const ccpPath = path.join(configDirectory, ccpFile);
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

// setup the fabric network
var channel = fabric_client.newChannel(channelName);
var peer = fabric_client.newPeer(ccp.peers[peerName].url, {'pem': ccp.peers[peerName].tlsCACerts.pem});
channel.addPeer(peer);
var order = fabric_client.newOrderer(ccp.orderers[ordererName].url, {'pem': ccp.orderers[ordererName].tlsCACerts.pem});
channel.addOrderer(order);

exports.getBlockchain = async function(req, res, next) {
  try {

    var returnBlockchain = [];

    // Check to see if we've already enrolled the user.
    const userExists = await wallet.exists(userName);
    if (!userExists) {
        console.log('An identity for the user ' + userName + ' does not exist in the wallet');
        console.log('Run the enrollAdmin.js before retrying');
        res.send({'error': 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first'});
    }

    blockchainInfo = await channel.queryInfo();
    height = blockchainInfo.height.low;

    for (var i = 0; i < height; i++) {

      var returnBlock = {};
      var block = await channel.queryBlock(i);

      returnBlock.number = block.header.number;
      returnBlock.data_hash = block.header.data_hash;

      var transactions = [];
      var ns_rwsets = [];
      if (block.data.data && block.data.data.length) {
        returnBlock.num_transactions = block.data.data.length;

        for (var j = 0; j < returnBlock.num_transactions; j++) {
          var transaction = {};

          transaction.id = block.data.data[j].payload.header.channel_header.tx_id;
          transaction.timestamp = block.data.data[j].payload.header.channel_header.timestamp;

          if (block.data.data[j].payload.data.actions && block.data.data[j].payload.data.actions.length) {
            var actions_length = block.data.data[j].payload.data.actions.length;
            for (var k = 0; k < actions_length; k++) {

              if (block.data.data[j].payload.data.actions[k].payload.action.proposal_response_payload.extension.results.ns_rwset && block.data.data[j].payload.data.actions[k].payload.action.proposal_response_payload.extension.results.ns_rwset.length) {
                var ns_rwset_length = block.data.data[j].payload.data.actions[k].payload.action.proposal_response_payload.extension.results.ns_rwset.length;

                for (var l = 0; l < ns_rwset_length; l++) {
                  var ns_rwset = block.data.data[j].payload.data.actions[k].payload.action.proposal_response_payload.extension.results.ns_rwset[l].rwset;
                  ns_rwsets.push(ns_rwset);
                }
              }
            }
          }

          transaction.ns_rwsets = ns_rwsets;
          transactions.push(transaction);

        }
      }

      returnBlock.transactions = transactions;
      returnBlockchain.push(returnBlock);


    }
    //console.log('returnBlockchain');
    //console.log(returnBlockchain);
    res.send({
      'result': 'Success',
      'returnBlockchain': returnBlockchain
    });

  } catch (error) {
    console.error(`Failed to get blockchain: ${error}`);
    console.log(error.stack);
    res.send({
      'error': error.message
    });
  }
}
