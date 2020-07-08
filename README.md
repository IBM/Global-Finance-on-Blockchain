[![Build Status](https://travis-ci.org/IBM/Global-Finance-on-Blockchain.svg?branch=master)](https://travis-ci.org/IBM/Global-Finance-on-Blockchain)

# Global Finance on Blockchain

> **NOTE**: This developer pattern creates a blockchain network on *IBM Blockchain Platform version **2.5*** using the *Hyperledger Fabric version **1.4***.

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
* [Node v8.x or v10.x and npm v6.x or greater](https://nodejs.org/en/download/)
* [VSCode version 1.38.0 or greater](https://code.visualstudio.com)
* [IBM Blockchain Platform Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform)


# Watch the video - Introduction and Demo

 **Note: Click on the image below to view the video on YouTube. For Google Chrome, press the Ctrl key + the left mouse button and say `Open link`.**

 [![](https://user-images.githubusercontent.com/8854447/72451022-4f609b80-3789-11ea-94f6-41218b1d1019.png)](https://www.youtube.com/watch?v=ORYuHPoCqLE)


 # Watch the video - Setup blockchain network

 **Note: Click on the image below to view the video on YouTube. For Google Chrome, press the Ctrl key + the left mouse button and say `Open link`.**

 [![](https://user-images.githubusercontent.com/8854447/72451023-4f609b80-3789-11ea-85e6-0f36aad4dc74.png)](https://www.youtube.com/watch?v=WkjSp3Ku3MQ)
 

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
  <img height="500" src="https://user-images.githubusercontent.com/8854447/86769841-c7fc3280-c01d-11ea-950a-d8346ce59412.png">
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
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add Certificate Authority +</b>.
  - Click <b>Create a Certificate Authority +</b> and click <b>Next</b>.
  - Give it a <b>CA display name</b> of `Org1 CA`, a <b>CA administrator enroll ID</b> of `admin` and a <b>CA administrator enroll secret</b> of `adminpw`, then click <b>Next</b>.
  - Review the summary and click <b>Add Certificate Authority</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85798060-cf146e00-b70a-11ea-856b-ef3264428fbc.gif">
</p>
<br>


#### Associate the peer organization CA admin identity
  - In the Nodes tab, select the <b>Org1 CA</b> once it is running (indicated by the green box in the tile).
  - Click <b>Associate identity</b> on the CA overview panel.
  - On the side panel, select the <b>Enroll ID</b> tab. 
  - Provide an <b>Enroll ID</b> of `admin` and an <b>Enroll secret</b> of `adminpw`. Use the default value of `Org1 CA Admin` for the <b>Identity display name</b>.
  - Click <b>Associate identity</b> to associate the `admin` identity with the <b>Org1 CA</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85799219-dfc5e380-b70c-11ea-80a6-afccb0e526fc.gif">
</p>
<br>


#### Use peer organization CA to register the peer and org1 admin identities
  - Select the <b>Org1 CA</b> Certificate Authority and ensure the `admin` identity that was created for the CA is visible in the table.
  - The next step is to register an admin for the organization "Org1". Click on the <b>Register User +</b> button. Give an <b>Enroll ID</b> of `org1admin` and an <b>Enroll secret</b> of `org1adminpw`. Set the <b>Type</b> for this identity as `admin`. Specify to <b>Use root affiliation</b>. Leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Skip the section to add attributes to this user and click <b>Register user</b>.
  - Repeat the process to create an identity of the peer. Click on the <b>Register User +</b> button. Give an <b>Enroll ID</b> of `peer1` and an <b>Enroll secret</b> of `peer1pw`. Set the <b>Type</b> for this identity as `peer`. Specify to <b>Use root affiliation</b>. Leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Skip the section to add attributes to this user and click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85800394-e35a6a00-b70e-11ea-967a-f37334a685a3.gif">
</p>
<br>


#### Create the peer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition +</b>.
  - Enter the <b>MSP display name</b> as `Org1MSP` and the <b>MSP ID</b> as `Org1MSP`. Click <b>Next</b>.
  - Specify `Org1 CA` as the <b>Root Certificate Authority</b>. Click <b>Next</b>.
  - Select the <b>New identity</b> tab. Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, i.e. `org1admin` and `org1adminpw` respectively. Then, give the <b>Identity name</b> as `Org1 Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and add the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Click <b>Next</b>.
  - Review all the information and click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85800904-cbcfb100-b70f-11ea-9b95-376d9ef72caa.gif">
</p>
<br>


#### Create a peer
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add peer +</b>.
  - Click <b>Create a peer +</b> and then click <b>Next</b>.
  - Give the <b>Peer display name</b> as `Peer Org1` and click <b>Next</b>.
  - On the next screen, select `Org1 CA` as the <b>Certificate Authority</b>. Then, give the <b>Peer enroll ID</b> and <b>Peer enroll secret</b> as `peer1` and `peer1pw` respectively. Select the <b>Organization MSP</b> as `Org1MSP`. Leave the <b>TLS CSR hostname</b> blank and select the highest value available in the drop-down for <b>Fabric version</b>, i.e. `2.1.1-0`. Click <b>Next</b>.
  - Provide `Org1 Admin` as the <b>Peer administrator identity</b> and click <b>Next</b>.
  - Review the summary and click <b>Add peer</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85802117-41d51780-b712-11ea-80b1-06710ec3207d.gif">
</p>
<br>


#### Create your orderer organization CA
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add Certificate Authority +</b>.
  - Click <b>Create a Certificate Authority +</b> and click <b>Next</b>.
  - Give it a <b>CA display name</b> of `Orderer CA`, a <b>CA administrator enroll ID</b> of `admin` and a <b>CA administrator enroll secret</b> of `adminpw`, then click <b>Next</b>.
  - Review the summary and click <b>Add Certificate Authority</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85802348-c4f66d80-b712-11ea-801b-9f2fbbb66593.gif">
</p>
<br>


#### Associate the orderer organization CA admin identity
  - In the Nodes tab, select the <b>Orderer CA</b> once it is running (indicated by the green box in the tile).
  - Click <b>Associate identity</b> on the CA overview panel.
  - On the side panel, select the <b>Enroll ID</b> tab. 
  - Provide an <b>Enroll ID</b> of `admin` and an <b>Enroll secret</b> of `adminpw`. Use the default value of `Orderer CA Admin` for the <b>Identity display name</b>.
  - Click <b>Associate identity</b> to associate the `admin` identity with the <b>Orderer CA</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85802898-e2780700-b713-11ea-82c7-9ffc09686f0b.gif">
</p>
<br>


#### Use orderer organization CA to register orderer and orderer admin identities
  - Select the <b>Orderer CA</b> Certificate Authority and ensure the `admin` identity that was created for the CA is visible in the table.
  - The next step is to register an admin for the organization "Orderer". Click on the <b>Register User +</b> button. Give an <b>Enroll ID</b> of `ordereradmin` and an <b>Enroll secret</b> of `ordereradminpw`. Set the <b>Type</b> for this identity as `admin`. Specify to <b>Use root affiliation</b>. Leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Skip the section to add attributes to this user and click <b>Register user</b>.
  - Repeat the process to create an identity of the orderer. Click on the <b>Register User +</b> button. Give an <b>Enroll ID</b> of `orderer` and an <b>Enroll secret</b> of `ordererpw`. Set the <b>Type</b> for this identity as `orderer`. Specify to <b>Use root affiliation</b>. Leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Skip the section to add attributes to this user and click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85803027-4995bb80-b714-11ea-81c7-b4b4cb2ec49d.gif">
</p>
<br>


#### Create the orderer organization MSP definition
  - Navigate to the <b>Organizations</b> tab in the left navigation and click <b>Create MSP definition +</b>.
  - Enter the <b>MSP display name</b> as `OrdererMSP` and the <b>MSP ID</b> as `OrdererMSP`. Click <b>Next</b>.
  - Specify `Orderer CA` as the <b>Root Certificate Authority</b>. Click <b>Next</b>.
  - Select the <b>New identity</b> tab. Give the <b>Enroll ID</b> and <b>Enroll secret</b> for your organization admin, i.e. `ordereradmin` and `ordereradminpw` respectively. Then, give the <b>Identity name</b> as `Orderer Admin`.
  - Click the <b>Generate</b> button to enroll this identity as the admin of your organization and add the identity to the wallet. Click <b>Export</b> to export the admin certificates to your file system. Click <b>Next</b>.
  - Review all the information and click <b>Create MSP definition</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85803287-caed4e00-b714-11ea-94e7-305880e6ba63.gif">
</p>
<br>



#### Create an orderer
  - Navigate to the <b>Nodes</b> tab in the left navigation and click <b>Add ordering service +</b>.
  - Click <b>Create an ordering service +</b> and then click <b>Next</b>.
  - Give the <b>Ordering service display name</b> as `Orderer` and click <b>Next</b>.
  - On the next screen, select `Orderer CA` as the <b>Certificate Authority</b>. Then, give the <b>Ordering service enroll ID</b> and <b>Ordering service enroll secret</b> as `orderer` and `ordererpw` respectively. Select the <b>Organization MSP</b> as `OrdererMSP`. Leave the <b>TLS CSR hostname</b> blank and select the highest value available in the drop-down for <b>Fabric version</b>, i.e. `2.1.1-0`. Click <b>Next</b>.
  - Provide `Orderer Admin` as the <b>Orderer administrator identity</b> and click <b>Next</b>.
  - Review the summary and click <b>Add ordering service</b>.


<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85803547-5ff04700-b715-11ea-934f-943ffe0439b0.gif">
</p>
<br>


#### Add organization as Consortium Member on the orderer to transact
  - Navigate to the <b>Nodes</b> tab, and click on the <b>Orderer</b> that was created.
  - Under <b>Consortium Members</b>, click <b>Add organization +</b>.
  - Select the <b>Existing MSP ID</b> tab. From the drop-down list, select `Org1MSP (Org1MSP)`, as this is the MSP that represents the peer's organization "Org1".
  - Click <b>Add organization</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85803823-105e4b00-b716-11ea-9ee3-28e0d30ffa95.gif">
</p>
<br>


#### Create the channel
  - Navigate to the <b>Channels</b> tab in the left navigation and click <b>Create channel +</b>.
  - Click <b>Next</b>.
  - Give the <b>Channel name</b> as `mychannel`. Select `Orderer` from the <b>Ordering service</b> drop-down list. Click <b>Next</b>.
  - Under <b>Organizations</b>, select `Org1MSP (Org1MSP)` from the drop-down list to add the organization "Org1" as a member of this channel. Click the <b>Add</b> button. Set the permissions for this member as <b>Operator</b>. Click <b>Next</b>.
  - Leave the <b>Policy</b> as the default value i.e. `1 out of 1`. Click <b>Next</b>.
  - Select the <b>Channel creator MSP</b> as `Org1MSP (Org1MSP)` and the <b>Identity</b> as `Org1 Admin`. Click <b>Next</b>.
  - Review the summary and click <b>Create channel</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85804332-5a93fc00-b717-11ea-81e7-a4b6955575ee.gif">
</p>
<br>


#### Join your peer to the channel
  - Click on the newly created channel <b>mychannel</b>.
  - In the side panel that opens, under <b>Choose from available peers</b>, select `Peer Org1`. Once the peer is selected, a check mark will be displayed next to it. Ensure that <b>Make anchor peer(s)</b> is marked as `Yes`. Click <b>Join channel</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85804533-e60d8d00-b717-11ea-8066-64d66e4b4d33.gif">
</p>
<br>


### 5. Deploy Global Finance Smart Contract on the network

#### Install a smart contract
  - Navigate to the <b>Smart contracts</b> tab in the left navigation and click <b>Install smart contract +</b>.
  - Click on <b>Add file</b>.
  - Browse to the location of the Global Finance smart contract package file (it is probably named `globalfinancing@0.0.1.cds`), which we packaged earlier using the IBM Blockchain Platform extension for Visual Studio code.
  - Once the contract is uploaded, click <b>Install smart contract</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/86772724-8f128c80-c022-11ea-85fe-29a97da2b74a.gif">
</p>
<br>


#### Instantiate smart contract
  - Under <b>Installed smart contracts</b>, find the smart contract from the list (**Note: ours is called globalfinancing**) installed on our peer and click <b>Instantiate</b> from the overflow menu on the right side of the row.
  - On the side panel that opens, select the channel, `mychannel` on which to instantiate the smart contract. Click <b>Next</b>.
  - Select `Org1MSP` as the organization member to be included in the endorsement policy. Click <b>Next</b>.
  - Skip the <b>Setup private data collection</b> step and simply click <b>Next</b>.
  - Provide the <b>Function name</b> as `instantiate` and leave the <b>Arguments</b> blank.
  - Click <b>Instantiate smart contract</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/86774713-caae5600-c024-11ea-8419-20042809dd9b.gif">
</p>
<br>


### 6. Connect application to the network

#### Connect with sdk through connection profile
  - Navigate to the <b>Organizations</b> tab in the left navigation, and click on <b>Org1MSP</b>.
  - Click on <b>Download Connection Profile</b>. 
  - In the side panel that opens up, select `Yes` as the response for <b>Include Org1 CA for user registration and enrollment?</b>. Under <b> Select peers to include</b>, select `Peer Org1`. Then click <b>Download connection profile</b>. This will download the connection json which we will use to establish a connection between the Node.js web application and the Blockchain Network.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/86624377-334bf300-bf91-11ea-9438-80da5de5cfce.gif">
</p>
<br>

  - Next, we need to obtain the information to connect to the Orderer.
  - Navigate to the <b>Organizations</b> tab in the left navigation, and click on <b>OrdererMSP</b>.
  - Click on the <b>Orderer</b> tile.
  - Go to the <b>Ordering nodes</b> tab, then click on the <b>Orderer_1<b> tile.
  - Click the <b>Export</b> button to download the `Orderer`'s details.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/86779570-bb7dd700-c029-11ea-9582-9347ae27f129.gif">
</p>
<br>



#### Create an application admin
  - Navigate to the <b>Nodes</b> tab in the left navigation, and under <b>Certificate Authorities</b>, choose <b>Org1 CA</b>.
  - Click on the <b>Register User +</b> button. Give an <b>Enroll ID</b> of `app-admin` and an <b>Enroll secret</b> of `app-adminpw`. Set the <b>Type</b> for this identity as `client`. Specify to <b>Use root affiliation</b>. Leave the <b>Maximum enrollments</b> field blank. Click <b>Next</b>.
  - Click on <b>Add attribute +</b>. Enter the <b>attribute name</b> as `hf.Registrar.Roles` and the <b>attribute value</b> as `*`. Click <b>Register user</b>.

<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/8854447/85872406-b0ab8280-b79d-11ea-80e8-632d2bd39285.gif">
</p>
<br>


#### Update application connection
  - Copy the `Orderer`'s file you downloaded into the [fabric folder](web-app/controller/restapi/features/fabric).
  - Copy the `Org1MSP` connection profile you downloaded into the [fabric folder](web-app/controller/restapi/features/fabric).
  - Update the [config.json](web-app/controller/restapi/features/fabric/config.json) file with:
    - The connection_file, which is the name of the `Org1MSP` connection profile you downloaded.
    - The orderer_file, which is the name of the `Orderer` file that you download.
    - The <b>enroll id</b> and <b>enroll secret</b> for your app admin, which was earlier provided as `app-admin` and `app-adminpw`.
    - The orgMSPID, which was provided as `Org1MSP`.
    - The caName, which can be found in the `Org1MSP` connection json file under "organization" -> "Org1MSP" -> "certificateAuthorities". This would be like an IP address and a port.
    - The peerName, which can be found in the `Org1MSP` connection json file under "organization" -> "Org1MSP" -> "peers". This would be like an IP address and a port.
    - Ensure gateway discovery is set to `{ enabled: true, asLocalhost: false }` to connect to IBM Blockchain Platform.

On completing the updates as mentioned above, the contents of your config.json file should look something like this:

```bash
{
    "channel_name": "mychannel",
    "smart_contract_name": "globalfinancing",
    "connection_file": "Org1MSP_profile.json",
    "orderer_file": "Orderer_1_orderer.json",
    "appAdmin": "app-admin",
    "appAdminSecret": "app-adminpw",
    "orgMSPID": "Org1MSP",
    "caName": "184.172.229.220:31844",
    "peerName": "184.172.229.220:30884",
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
