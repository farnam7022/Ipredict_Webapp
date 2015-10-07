angular.module('app.controllers.deposit_withdrawal', [])

    .controller('Deposit_withdrawal', function($scope, $state, $ionicHistory, $ionicPopup) {

        $scope.view = {
            init_test      : true,
            deposit        : false,
            withdrawal     : false,
            card_view      : false,
            deposit_view   : false,
            payment_method : false

        };

        $scope.button_color ={
            card    : true,
            deposit : true
        };

        $scope.card = {
            name   : "",
            number : "",
            date   : "",
            ccv    : ""
        };

        $scope.amount = {
            deposit_amount    : null,
            withdrawal_amount : null
        };

        $scope.portfolio=[
            {title:     "Rank", attr:     1, changeInAttr: 2   },
            {title:    "Worth", attr: 20.05, changeInAttr: 0.07},
            {title:   "Wallet", attr: 12.74, changeInAttr: 0.00},
            {title:"Portfolio", attr:  7.39, changeInAttr: 0.07}
        ];

        $scope.view_page = function(page){
            if(page === "deposit"){
                $scope.view.deposit    = true;
                $scope.view.withdrawal = false;
            }else{
                $scope.view.withdrawal = true;
                $scope.view.deposit    = false;
            }
        };

        $scope.purchase_button_press = function (amount) {
            if (amount && amount > 0){
                $scope.view.deposit        = false;
                $scope.view.withdrawal     = false;
                $scope.view.payment_method = true;
            }
        };

        $scope.withdrawal_button_press = function (amount){
            if(amount !== null) {
                console.log("Withdrawal $" + amount);
            }
        };

        $scope.payment_method = function(val){
            if(val === "credit_card"){
                $scope.view.card_view       = true;
                $scope.view.deposit_view    = false;
                $scope.button_color.card    = true;
                $scope.button_color.deposit = false;
            }else if(val === "direct_deposit"){
                $scope.view.deposit_view    = true;
                $scope.view.card_view       = false;
                $scope.button_color.deposit = true;
                $scope.button_color.card    = false;

            }
        };

        $scope.init_button = function(val){
            if(val === "deposit_page"){
                $scope.view.init_test  = false;
                $scope.view.deposit    = true;
                $scope.view.withdrawal = false;
            }else if(val === "withdrawal_page"){
                $scope.view.init_test  = false;
                $scope.view.withdrawal = true;
                $scope.view.deposit    = false;
            }
        };

        $scope.finish_transaction = function(){
            $scope.view.init_test       = true;
            $scope.view.deposit         = false;
            $scope.view.withdrawal      = false;
            $scope.view.card_view       = false;
            $scope.view.deposit_view    = false;
            $scope.view.payment_method  = false;
            $scope.button_color.card    = true;
            $scope.button_color.deposit = true;
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go("app.portfolio");
        };

        $scope.withdraw = function(){
            if ($scope.amount.withdrawal_amount && $scope.amount.withdrawal_amount > 0){

                $ionicPopup.alert({
                    title: "$" + $scope.amount.withdrawal_amount + " withdrawn successfully.",
                    buttons: [
                        {
                            text: 'OK',
                            type: 'button-calm button-clear',
                            onTap: function(){
                                $scope.finish_transaction();
                            }
                        }
                    ]
                });
            }
        };

        $scope.confirmPayment = function(){
            if ($scope.amount.deposit_amount && $scope.amount.deposit_amount > 0){

                $ionicPopup.alert({
                    title: "Transaction complete",
                    buttons: [
                        {
                            text: 'OK',
                            type: 'button-calm button-clear',
                            onTap: function(){
                                $scope.finish_transaction();
                            }
                        }
                    ]
                });
            }
        }

        $scope.back = function(){
            $scope.view.init_test       = true;
            $scope.view.deposit         = false;
            $scope.view.withdrawal      = false;
            $scope.view.card_view       = false;
            $scope.view.deposit_view    = false;
            $scope.view.payment_method  = false;
            $scope.button_color.card    = true;
            $scope.button_color.deposit = true;
        };

    });