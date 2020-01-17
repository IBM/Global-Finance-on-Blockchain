[![Build Status](https://travis-ci.org/IBM/Global-Finance-on-Blockchain.svg?branch=master)](https://travis-ci.org/IBM/Global-Finance-on-Blockchain)

# Global Finance on Blockchain

In this code pattern, we will be extending the [global-financing-blockchain](https://developer.ibm.com/patterns/global-financing-use-case-for-blockchain) code pattern by deploying the smart contract on a Hyperledger Fabric Network created on IBM Blockchain Platform instead of a local instance of the Hyperledger Fabric. This use case is inspired by the [RedBook tutorial](https://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/crse0401.html?Open) by Bob Dill and uses the same application interface. It employs a Node.js smart contract and a Node.js web application.

The Global Finance use case involves various members such as the Buyer, Seller, Provider, Shipper and Finance Company which perform many actions. Some of these actions are:

* Buyer creates the order.
* Seller contacts a provider for the items in the order.
* Provider provides the items in the order.
* Shipper delivers the items in the order.
* Finance company processes payments to the seller.

The number of participants in this use case, as well as the different types of transactions that can be executed show how this is the perfect use case to demonstrate dispute resolution using the smart contracts and distributed ledgers provided by Blockchain. Blockchain also enables faster settlement of such disputes as opposed to the traditional approaches employed for such a use case.

We will start by packaging the Node.js smart contract using the IBM Blockchain Platform Extension for VS Code. Next, we will create a Hyperledger Fabric Network on IBM Blockchain Platform where we will install and instantiate the smart contract. Finally, the Node.js web application, which makes use of the Hyperledger Fabric SDK, can be used to interact with the network.

When you have completed this code pattern, you will understand how to:

* Package a blockchain smart contract using the IBM Blockchain Platform Extension for VS Code.
* Set up a Hyperledger Fabric network on IBM Blockchain Platform.
* Install and instantiate a smart contract package through IBM Blockchain Platform.
* Test the blockchain network by executing a Node.js application with the Hyperledger Fabric SDK to interact with the deployed network by issuing transactions. 


# Architecture flow

<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72450730-d5c8ad80-3788-11ea-8992-1e0e81d8967c.png">
</p>

1. The Blockchain Operator clones the GitHub repo to obtain the Global Finance on Blockchain smart contract.
2. The Blockchain Operator uses the IBM Blockchain Platform Extension for VS Code to package the smart contract.
3. The Blockchain Operator sets up and launches the IBM Blockchain Platform service.
4. The IBM Blockchain Platform enables the creation of a Hyperledger Fabric network onto a IBM Cloud Kubernetes Service, enabling installation and instantiation of the Global Finance on Blockchain smart contract on the network.
5. The Users (Buyers, Sellers, Providers, Shippers and Finance Companies) use the Node.js application which in turn uses the Fabric SDK to interact with the deployed network on IBM Blockchain Platform and issue transactions.


# Included components

*   [IBM Blockchain Platform](https://www.ibm.com/cloud/blockchain-platform) gives you total control of your blockchain network with a user interface that can simplify and accelerate your journey to deploy and manage blockchain components on the IBM Cloud Kubernetes Service.
*   [IBM Cloud Kubernetes Service](https://www.ibm.com/cloud/container-service) creates a cluster of compute hosts and deploys highly available containers. A Kubernetes cluster lets you securely manage the resources that you need to quickly deploy, update, and scale applications.
*   [IBM Blockchain Platform Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform) is designed to assist users in developing, testing, and deploying smart contracts - including connecting to Hyperledger Fabric environments.


## Featured technologies

* [Node.js](https://nodejs.org/en/) is an open source, cross-platform JavaScript run-time environment that executes server-side JavaScript code.
* [Bootstrap](https://getbootstrap.com/) is an open source toolkit for developing with HTML, CSS, and JavaScript.


## Prerequisites

* [IBM Cloud account](https://cloud.ibm.com/registration/?target=%2Fdashboard%2Fapps)
* [Node v8.x or greater and npm v5.x or greater](https://nodejs.org/en/download/)
* [VSCode version 1.26 or greater](https://code.visualstudio.com)
* [IBM Blockchain Platform Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform)


# Running the application

Follow these steps to set up and run this code pattern. The steps are described in detail below.

## Steps

1. [Clone the repo](#1-clone-the-repo)
2. [Package the smart contract](#2-package-the-smart-contract)
3. [Create IBM Cloud services](#3-create-ibm-cloud-services)
4. [Build a network](#4-build-a-network)
5. [Deploy Global Finance Smart Contract on the network](#5-deploy-global-finance-smart-contract-on-the-network)
6. [Connect application to the network](#6-connect-application-to-the-network)
7. [Run the application](#7-run-the-application)


### 1. Clone the repo

Clone this repository in a folder your choice:

```
git clone https://github.com/IBM/Global-Finance-on-Blockchain.git
```


### 2. Package the smart contract

We will use the IBM Blockchain Platform extension on VS Code to package the smart contract.

* Open Visual Studio code and open the `contract` folder from `Global-Finance-on-Blockchain` repository that was cloned earlier. 
   **It is important that you are opening the `contract` folder and not the entire `Global-Finance-on-Blockchain` directory; otherwise you will see an error that states that it doesn't understand what programming language you are using.**

* Press the `F1` key to see the different VS code options. Choose `IBM Blockchain Platform: Package Open Project`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71910509-05036d00-3140-11ea-8b15-7c8aeb403974.png">
</p>

* Click the `IBM Blockchain Platform` extension button on the left. This will show the packaged contracts on top and the blockchain connections on the bottom.

<p align="center">
  <img height="500" src="https://user-images.githubusercontent.com/8854447/72377051-0f43df00-36dd-11ea-8e54-93c1d21f1853.png">
</p>

* Next, right click on the packaged contract (in this case, select globalfinancing@0.0.1) to export it and choose `Export Package`.

* Choose a location on your machine and save the `.cds` file. We will use this packaged smart contract later to deploy on the IBM Blockchain Platform service.

Now, we will start setting up the different services required for configuring our Hyperledger Fabric network on the IBM Cloud and for running our application using this network.


### 3. Create IBM Cloud services

* Create the [IBM Cloud Kubernetes Service](https://cloud.ibm.com/kubernetes/catalog/cluster). You can find the service in the `Catalog`. For this code pattern, we can use the `Free` cluster, and give it a name. Note, that the IBM Cloud allows one instance of a free cluster which expires after 30 days. **Note: it could take 20 minutes for the Kubernetes Service setup to complete**.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71910506-046ad680-3140-11ea-9f4b-8bcb4d2a651b.gif">
</p>
<br>

* Create the [IBM Blockchain Platform](https://cloud.ibm.com/catalog/services/blockchain-platform) service on the IBM Cloud. You can find the service in the `Catalog`, and give it a name.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71910502-046ad680-3140-11ea-9853-3598b9363d91.gif">
</p>
<br>

* After your kubernetes cluster is up and running, you can deploy your IBM Blockchain Platform on the cluster. Again - wait for the Kubernetes service to indicate it was deployed. The IBM Blockchain Platform service walks through few steps and finds your cluster on the IBM Cloud to deploy the service on.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71910501-046ad680-3140-11ea-8440-9d2fef0be426.gif">
</p>
<br>

* Once the Blockchain Platform is deployed on the Kubernetes cluster, you can launch the console to start configuring your blockchain network.


### 4. Build a network

We will build a network as provided by the IBM Blockchain Platform [documentation](https://cloud.ibm.com/docs/services/blockchain/howto?topic=blockchain-ibp-console-build-network#ibp-console-build-network). This will include creating a channel with a single peer organization with its own MSP and CA (Certificate Authority), and an orderer organization with its own MSP and CA. We will create the respective identities to deploy peers and operate nodes.


#### Create your peer organization CA
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add Certificate Authority</b>.
  - Click <b>Create an IBM Cloud Certificate Authority</b> and <b>Next</b>.
  - Give it a <b>CA display name</b> of `Org1 CA` and click <b>Next</b>.
  - Specify an <b>CA Administrator Enroll ID</b> of `admin` and <b>CA Administrator Enroll Secret</b> of `adminpw`, then click <b>Next</b>.
  - Review the summary and click <b>Add Certificate Authority</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71913565-bb1d8580-3145-11ea-9eaa-1b4e8a10e985.gif">
</p>
<br>


#### Associate the peer organization CA admin identity
  - In the Nodes tab, select the <b>Org1 CA</b> once it is running (indicated by the green box in the tile).
  - Click <b>Associate identity</b> on the CA overview panel.
  - On the side panel, select <b>Enroll ID</b>. 
  - Provide an <b>Enroll ID</b> of `admin` and an <b>Enroll secret</b> of `adminpw`. Use the default value of `Org1 CA Identity` for the <b>Identity display name</b>.
  - Click <b>Associate identity</b> to add the identity into your wallet and associate the admin identity with the <b>Org1 CA</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71913744-1e0f1c80-3146-11ea-85e4-eea5280aa8e9.gif">
</p>
<br>


#### Use peer organization CA to register the peer and org1 admin identities
  - Select the <b>Org1 CA</b> Certificate Authority and ensure the `admin` identity that was created for the CA is visible in the table.
  - We will register an admin for our organization "org1". Click on the <b>Register User</b> button. Give an <b>Enroll ID</b> of `org1admin`, and <b>Enroll Secret</b> of `org1adminpw`. Set the <b>Type</b> for this identity as `client`. We can specify to <b>Use root affiliation</b> or uncheck this field and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - We will not be adding any attributes to this user. Click <b>Register user</b>.
  - We will repeat the process to create an identity of the peer. Click on the <b>Register User</b> button. Give an <b>Enroll ID</b> of `peer1`, and <b>Enroll Secret</b> of `peer1pw`. Set the <b>Type</b> for this identity as `peer`. We can specify to <b>Use root affiliation</b> or uncheck this field and select from any of the affiliated organizations from the drop-down list. Click <b>Next</b>.
  - We will not be adding any attributes to this user. Click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71913929-7c3bff80-3146-11ea-9930-a455f1e45fe2.gif">
</p>
<br>


#### Create the peer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition</b>.
  - Enter the <b>MSP Display name</b> as `Org1MSP` and an <b>MSP ID</b> of `Org1MSP`.
  - Under <b>Root Certificate Authority</b> details, specify the peer CA that we created `Org1 CA` as the root CA for the organization.
  - Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, `org1admin` and `org1adminpw`. Then, give the Identity name as `Org1 Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and export the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Finally click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914115-e5bc0e00-3146-11ea-891c-6422bc4c2c4e.gif">
</p>
<br>


#### Create a peer
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add peer</b>.
  - Click <b>Create an IBM Cloud peer</b> and then click <b>Next</b>.
  - Give the <b>Peer display name</b> as `Peer Org1` and click <b>Next</b>.
  - On the next screen, select `Org1 CA` as the <b>Certificate Authority</b>. Then, give the <b>Peer enroll ID</b> and <b>Peer enroll secret</b> for the peer identity that you created for your peer, that is, `peer1`, and `peer1pw`. Select the <b>Organization MSP</b> as `Org1MSP`, from the drop-down list. Leave the <b>TLS CSR hostname</b> blank. Click <b>Next</b>.
  - The next step is to Associate an identity with this peer to make it the admin of your peer. Select your peer admin identity `Org1 Admin` and click <b>Next</b>.
  - Review the summary and click <b>Add peer</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914297-53683a00-3147-11ea-9ecb-bace14e5e5c5.gif">
</p>
<br>


#### Create your orderer organization CA
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add Certificate Authority</b>.
  - Click <b>Create an IBM Cloud Certificate Authority</b> and <b>Next</b>.
  - Give it a <b>CA display name</b> of `Orderer CA` and click <b>Next</b>.
  - Specify an <b>CA Administrator Enroll ID</b> of `admin` and <b>CA Administrator Enroll Secret</b> of `adminpw`, then click <b>Next</b>.
  - Review the summary and click <b>Add Certificate Authority</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914392-86123280-3147-11ea-9a6f-b6eddab790b1.gif">
</p>
<br>


#### Associate the orderer organization CA admin identity
  - In the Nodes tab, select the <b>Orderer CA</b> once it is running (indicated by the green box in the tile).
  - Click <b>Associate identity</b> on the CA overview panel.
  - On the side panel, select <b>Enroll ID</b>. 
  - Provide an <b>Enroll ID</b> of `admin` and an <b>Enroll secret</b> of `adminpw`. Use the default value of `Orderer CA Identity` for the <b>Identity display name</b>.
  - Click <b>Associate identity</b> to add the identity into your wallet and associate the admin identity with the <b>Orderer CA</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914593-e73a0600-3147-11ea-8944-1c5e2bbecfba.gif">
</p>
<br>


#### Use orderer organization CA to register orderer and orderer admin identities
  - Select the <b>Orderer CA</b> Certificate Authority and ensure the `admin` identity that was created for the CA is visible in the table.
  - We will register an admin for the "orderer" organization. Click on the <b>Register User</b> button. Give an <b>Enroll ID</b> of `ordereradmin`, and <b>Enroll Secret</b> of `ordereradminpw`. Set the <b>Type</b> for this identity as `client`. We can specify to <b>Use root affiliation</b> or uncheck this field and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - We will not be adding any attributes to this user. Click <b>Register user</b>.
  - We will repeat the process to create an identity of the orderer. Click on the <b>Register User</b> button. Give an <b>Enroll ID</b> of `orderer1`, and <b>Enroll Secret</b> of `orderer1pw`. Set the <b>Type</b> for this identity as `orderer`. We can specify to <b>Use root affiliation</b> or uncheck this field and select from any of the affiliated organizations from the drop-down list. Click <b>Next</b>.
  - We will not be adding any attributes to this user. Click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914721-35e7a000-3148-11ea-8db6-2d3584fca238.gif">
</p>
<br>


#### Create the orderer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition</b>.
  - Enter the <b>MSP Display name</b> as `OrdererMSP` and an <b>MSP ID</b> of `OrdererMSP`.
  - Under <b>Root Certificate Authority</b> details, specify the peer CA that we created `Orderer CA` as the root CA for the organization.
  - Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, `ordereradmin` and `ordereradminpw`. Then, give the Identity name as `Orderer Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and export the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Finally click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71914893-95de4680-3148-11ea-8a9d-5952c26c8cdc.gif">
</p>
<br>


#### Create an orderer
  
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add ordering service</b>.
  - Click <b>Create an IBM Cloud Ordering service</b> and then click <b>Next</b>.
  - Give the <b>Ordering service display name</b> as `Orderer` and click <b>Next</b>.
  - On the next screen, select `Orderer CA` as the <b>Certificate Authority</b>. Then, give the <b>Ordering service enroll ID</b> and <b>Ordering service enroll secret</b> for the peer identity that you created for your orderer, that is, `orderer1`, and `orderer1pw`. Select the <b>Organization MSP</b> as `OrdererMSP`, from the drop-down list. Leave the <b>TLS CSR hostname</b> blank. Click <b>Next</b>.
  - The next step is to Associate an identity with this peer to make it the admin of your peer. Select your peer admin identity `Orderer Admin` and click <b>Next</b>.
  - Review the summary and click <b>Add ordering service</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71915205-42b8c380-3149-11ea-8050-5edfd461ae10.gif">
</p>
<br>


#### Add organization as Consortium Member on the orderer to transact
  - Navigate to the <b>Nodes</b> tab, and click on the <b>Orderer</b> that we created.
  - Under <b>Consortium Members</b>, click <b>Add organization</b>.
  - From the drop-down list, select `Org1MSP`, as this is the MSP that represents the peer's organization "Org1".
  - Click <b>Add organization</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71915342-88758c00-3149-11ea-98e2-2ed00dc9c8c3.gif">
</p>
<br>


#### Create the channel
  - Navigate to the <b>Channels</b> tab in the left navigation and click <b>Create channel</b>.
  - Give the <b>Channel name</b> as `mychannel`.
  - Select the orderer you created, `Orderer` from the <b>Ordering service</b> drop-down list.
  - Under <b>Organizations</b>, select `Org1MSP (Org1MSP)` from the drop-down list to add the organization "Org1" as a member of this channel. Click <b>Add</b> button. Set the permissions for this member as <b>Operator</b>.
  - Scroll down to the <b>Channel creator organization</b> section and select `Org1MSP (Org1MSP)` from the dropdown as the <b>Channel creator MSP</b> and select `Org1 Admin` from the dropdown under <b>Identity</b>.
  - Click <b>Create channel</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71915595-15b8e080-314a-11ea-9843-d7df9be30fe5.gif">
</p>
<br>


#### Join your peer to the channel
  - Click <b>Join channel</b> to add a peer to the channel.
  - Select your `Orderer` as the <b>Ordering service</b> and click <b>Next</b>.
  - Enter the name of the <b>Channel</b> as `mychannel` and click <b>Next</b>.
  - Next we need to select which peers should be added to the channel. In our case, we just want to add the peer we created under "Org1". Select `Peer Org1` .
  - Click <b>Join channel</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/71915747-67fa0180-314a-11ea-984b-80deb0877d03.gif">
</p>
<br>


### 5. Deploy Global Finance Smart Contract on the network

#### Install a smart contract
  - Navigate to the <b>Smart contracts</b> tab in the left navigation and click <b>Install smart contract</b>.
  - Browse to the location of the Global Finance smart contract package file (it is probably named `globalfinancing@0.0.1.cds`), which we packaged earlier using the IBM Blockchain Platform extension for Visual Studio code.
  - Click on <b>Add file</b> and find your packaged smart contract. 
  - Once the contract is uploaded, click <b>Install smart contract</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72450152-df9de100-3787-11ea-9c5a-88cc95ea846b.gif">
</p>
<br>


#### Instantiate smart contract
  - Under <b>Installed smart contracts</b>, find the smart contract from the list (**Note: ours is called globalfinancing**) installed on our peer and click <b>Instantiate</b> from the overflow menu on the right side of the row.
  - On the side panel that opens, select the channel, `mychannel` on which to instantiate the smart contract. Click <b>Next</b>.
  - Select the organization members to be included in the endorsement policy. In our case, we need to select `Org1MSP`. Click <b>Next</b>.
  - We can skip the <b>Setup private data collection</b> step and simply click <b>Next</b>.
  - Give the <b>Function name</b> of `instantiate` and leave <b>Arguments</b> blank. **Note: `instantiate` is the method in the `globalfinance.js` contract file that initiates the smart contracts on the peer. Some may name this `initLedger`**.
  - Click <b>Instantiate</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72450153-df9de100-3787-11ea-85c7-8948495ba251.gif">
</p>
<br>


## 6. Connect application to the network

#### Connect with sdk through connection profile
  - Scroll down to the <b>Instantiated smart contracts</b> section and find the "globalfinancing" contract in the list. Click on `Connect with SDK` from the overflow menu on the right side of the row.
  - From the dropdown for <b>MSP for connection</b> choose `Org1MSP`.
  - From the dropdown for <b>Certificate Authority</b> choose `Org1 CA`.
  - Download the connection profile by scrolling down and clicking <b>Download Connection Profile</b>. This will download the connection json which we will use to establish a connection between the Node.js web application and the Blockchain Network.
  - You can click <b>Close</b> once the download completes.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72450150-df9de100-3787-11ea-8b01-1ee5bc7ad8d1.gif">
</p>
<br>


#### Create an application admin
  - Navigate to the <b>Nodes</b> tab in the left navigation, and under <b>Certificate Authorities</b>, choose your organization CA, <b>Org1 CA</b>.
  - Click on <b>Register user</b>.
  - Give an <b>Enroll ID</b> of `app-admin` and <b>Enroll Secret</b> of `app-adminpw`. Set the <b>Type</b> for this identity as `client`. We can specify to <b>Use root affiliation</b> or uncheck this field and select from any of the affiliated organizations from the drop-down list. We will leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Under <b>Attributes</b>, click on <b>Add attribute</b>. Give attribute as `hf.Registrar.Roles` = `*`. This will allow this identity to act as a registrar and issue identities for our app. Click <b>Add attribute</b>.
  - Click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/72450922-25a77480-3789-11ea-9ce3-2319e7e11008.gif">
</p>
<br>


#### Update application connection
  - Copy the connection profile you downloaded into the [fabric folder](web-app/controller/restapi/features/fabric).
  - Update the [config.json](web-app/controller/restapi/features/fabric/config.json) file with:
    - The connection json file name you downloaded.
    - The <b>enroll id</b> and <b>enroll secret</b> for your app admin, which we earlier provided as `app-admin` and `app-adminpw`.
    - The orgMSP ID, which we provided as `Org1MSP`.
    - The caName, which can be found in your connection json file under "organization" -> "Org1MSP" -> certificateAuthorities". This would be like an IP address and a port.
    - The peerName, which can be found in your connection json file under "organization" -> "Org1MSP" -> peers". This would be like an IP address and a port.
    - The ordererName, which can be found in your connection json file under "orderers". This would be like an IP address and a port.
    - Update gateway discovery to `{ enabled: true, asLocalhost: false }` to connect to IBM Blockchain Platform.

```bash
 {
    "channel_name": "mychannel",
    "smart_contract_name": "globalfinancing",
    "connection_file": "mychannel_globalfinancing_profile.json",
    "appAdmin": "app-admin",
    "appAdminSecret": "app-adminpw",
    "orgMSPID": "Org1MSP",
    "caName": "184.172.229.220:31844",
    "peerName": "184.172.229.220:30884",
    "ordererName": "184.172.229.220:32685",
    "gatewayDiscovery": { "enabled": true, "asLocalhost": false }
 }
```


### 7. Run the application

#### In a new terminal, navigate to the [`web-app`](web-app) directory:

  ```bash
  cd Global-Finance-on-Blockchain/web-app/
  ```


#### Build the node dependencies:

  ```bash
  npm install
  ```


#### Enroll the admin and add identity to the wallet:
  
  **Note: This creates public and private key files for the app-admin in the _idwallet folder inside the [fabric folder](web-app/controller/restapi/features/fabric). If a folder named "app-admin" exists in the "_idwallet" folder, then the following command will not enroll the app-admin as it already exists in the wallet. Remove the app-admin folder and then run the following command.**
  
  ```bash
  node enrollAdmin.js
  ```


#### Run the application:

  ```bash
  npm start
  ```

Main page of application:
<div style='border: 2px solid #f00;'>
  <img width="1000" src="https://user-images.githubusercontent.com/8854447/72450728-d5c8ad80-3788-11ea-83c4-1f0cf1c8e432.png">
</div>


Unified member's view:
<div style='border: 2px solid #f00;'>
  <img width="1000" src="https://user-images.githubusercontent.com/8854447/72450727-d5c8ad80-3788-11ea-8b40-549187431d33.png">
</div>


# Extending the code pattern
This application can be extended by:
* Creating a wallet for every member and using the member's wallet to interact with the application.


# Links
* [Hyperledger Fabric Docs](http://hyperledger-fabric.readthedocs.io/en/latest/)
* [Zero to Blockchain](https://www.redbooks.ibm.com/Redbooks.nsf/RedbookAbstracts/crse0401.html?Open)
* [IBM Code Patterns for Blockchain](https://developer.ibm.com/patterns/category/blockchain/)


# License
This code pattern is licensed under the Apache Software License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
