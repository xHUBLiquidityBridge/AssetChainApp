var Asset = (function () {
    function Asset() {
        this.isPendingClaim = true;
    }
    return Asset;
})();
var AssetSecurity = (function () {
    function AssetSecurity() {
    }
    return AssetSecurity;
})();
var SecurityPeg = (function () {
    function SecurityPeg() {
    }
    return SecurityPeg;
})();
var ExpertCollection = (function () {
    function ExpertCollection() {
    }
    return ExpertCollection;
})();
var Expert = (function () {
    function Expert() {
    }
    return Expert;
})();
var Verification = (function () {
    function Verification() {
    }
    return Verification;
})();
var TransferRequest = (function () {
    function TransferRequest() {
    }
    return TransferRequest;
})();
var EthereumConfiguration = (function () {
    function EthereumConfiguration() {
    }
    return EthereumConfiguration;
})();
var CoinPrismConfiguration = (function () {
    function CoinPrismConfiguration() {
    }
    return CoinPrismConfiguration;
})();
var Configuration = (function () {
    function Configuration() {
        this.ethereum = new EthereumConfiguration();
        this.coinPrism = new CoinPrismConfiguration();
    }
    return Configuration;
})();
var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
})();
var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
})();
var Notification = (function () {
    function Notification() {
    }
    return Notification;
})();
//# sourceMappingURL=models.js.map