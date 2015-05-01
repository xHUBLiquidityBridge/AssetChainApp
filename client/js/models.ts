﻿/**
 * Naming conventions:
 * - Classes: PascalCase
 * - Modules: PascalCase
 * - Private properties: _camelCase
 * - Everything else: camelCase
 */


/**
 * Class representing an asset (to be) registered on AssetChain.
 */
class Asset {
    id: string;
    name: string;
    category: string;
    comments: string;
    isPendingClaim: boolean = true;
    verifications: Verification[];
    securedOn: AssetSecurity;
}

class AssetSecurity {
    name: string;
    // The backend ledgers on which this asset has been secured.
    securityPegs: SecurityPeg[];
}

/**
 * Pointer to a transaction on a backend ledger where this asset was secured.
 */
class SecurityPeg {    
    /**
     * Ledger name.
     */
    name: string;
    logoImageFileName: string;
    transactionUrl: string;
    /**
     * Ledger-specific details, as an object.
     */
    details: any;

    // We use simple properties for the status instead of methods, because they work better with 
    // angular views.
    isOwned: boolean;
}

class ExpertCollection {
    name: string;
    experts: Array<Expert>;
}

class Expert {
    id: string;
    name: string;
}

/**
 * Verification of an asset by an expert.
 */
class Verification {
    id: string;
    name: string;
    address: string;
    date: string;
    comments: string;
    isPending: boolean;
    defects: string;
}

/**
 * Request for transfer of ownership of an asset.
 */
class TransferRequest {
    /**
     * AssetChain ID of the asset that the requester wants to receive.
     */
    assetID: string;

    /**
     * Address of the requester. Currently an Ethereum address.
     */
    requesterAddress: string;
}

/** BEGIN Application classes **/

class EthereumConfiguration {
    jsonRpcUrl: string;
    currentAddress: string;
}

class CoinPrismConfiguration {
    username: string;
    password: string;
}

/**
 * Configuration for the Decerver backend.
 */
class DecerverConfiguration {
    /**
     * Base URL where the decerver is reached, for example "http://localhost:3000"
     */
    baseUrl: string;

    public apiUrl(): string {
        return this.baseUrl + "/apis/assetchain";
    }
}

class Configuration {
    ethereum: EthereumConfiguration;
    coinPrism: CoinPrismConfiguration;
    decerver: DecerverConfiguration;

    constructor() {
        this.ethereum = new EthereumConfiguration();
        this.coinPrism = new CoinPrismConfiguration();
        this.decerver = new DecerverConfiguration();
    }
}

class Credentials {
    password: string;
}

class MenuItem {
    name: string;
    url: string;
    icon: string;
}

class Notification {
    title: string;
    date: string;
    details: string;
    url: string;
    icon: string;
    seen: boolean;
}

/** END Application classes **/
