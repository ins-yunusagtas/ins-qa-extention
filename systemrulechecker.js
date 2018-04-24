window.onload = (function() {
	
    self.run = function()
    {
		
        if (location.href.indexOf('sociaplus.com') == -1 && location.href.indexOf('inone.useinsider.com') == -1 && typeof spApi != 'undefined')
        {
			console.log("SYSTEM CHECKER START WORKING");
					
            console.log("checking page_rules");
            self.page_rules();
        }
    }

	// isOnPage
	self.isOnPage = function() {
		console.groupCollapsed('%c' + "# isOnPage()", 'color:gray')
		if (spApi.isOnMainPage())
            console.log('%cisOnMainPage():         ' + '%c' + spApi.isOnMainPage(), 'color:blue', 'color:#27CA00; font-weight:bold;')
        else 
            console.log('%cisOnMainPage():         ' + '%c' + spApi.isOnMainPage(), 'color:blue', 'color:black; font-weight:bold;')
		
		
        if (spApi.isOnCategoryPage()) 
            console.log('%cisOnCategoryPage():     ' + '%c' + spApi.isOnCategoryPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%cisOnCategoryPage():     ' + '%c' + spApi.isOnCategoryPage(), 'color:blue', 'color:black; font-weight: bold;')
        
		
        if (spApi.isOnProductPage()) 
            console.log('%cisOnProductPage():      ' + '%c' + spApi.isOnProductPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%cisOnProductPage():      ' + '%c' + spApi.isOnProductPage(), 'color:blue', 'color:black; font-weight: bold;')
		
		
        if (spApi.isOnCartPage())
            console.log('%cisOnCartPage():         ' + '%c' + spApi.isOnCartPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%cisOnCartPage():         ' + '%c' + spApi.isOnCartPage(), 'color:blue', 'color:black; font-weight: bold; ')
		
		
        if (spApi.isOnCouponPage())
            console.log('%cisOnCouponPage():       ' + '%c' + spApi.isOnCouponPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%cisOnCouponPage():       ' + '%c' + spApi.isOnCouponPage(), 'color:blue', 'color:black; font-weight: bold;')
		
		
        if (spApi.isOnAfterPaymentPage())
            console.log('%cisOnAfterPaymentPage(): ' + '%c' + spApi.isOnAfterPaymentPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%cisOnAfterPaymentPage(): ' + '%c' + spApi.isOnAfterPaymentPage(), 'color:blue', 'color:black; font-weight: bold;')

		if(spApi.isOnRegSuccessPage())
			console.log('%cisOnRegSuccessPage():   ' + '%c' + spApi.isOnRegSuccessPage(), 'color:blue', 'color:#27CA00; font-weight: bold;')		
		else
            console.log('%cisOnRegSuccessPage():   ' + '%c' + spApi.isOnRegSuccessPage(), 'color:blue', 'color:black; font-weight: bold;')

		
		console.groupEnd()
		console.log('\n');
	}
	
	// getCurrentProduct
	self.getCurrentProduct = function() {
		console.groupCollapsed('%c' + "# getCurrentProduct()", 'color:gray');
		var dict = spApi.getCurrentProduct();
		var key_arr = Object.keys(dict);
		
		for(var i = 0;i < key_arr.length;i++)
		{
			console.log('%c' + key_arr[i] + ": " + '%c' + dict[key_arr[i]], 'color:brown; font-weight:bold', 'color:black');	
			
			if(key_arr[i] == "url") 
				console.log("  ", window.location == dict[key_arr[i]]);
			
			if(key_arr[i] == "cats") {
				arr = dict[key_arr[i]];
				if(typeof(arr)==typeof(new Array())){
					for(var j = 0;j < arr.length;j++)
						console.log("	" + arr[j]);
				}
			}
		}
		console.groupEnd()
		console.log('\n');
	}
	
	// getVersusProductDetail
	self.getVersusProductDetail = function() {
		console.groupCollapsed('%c' + "# getVersusProductDetail()", 'color:gray');
		var dict = spApi.getVersusProductDetail();
		var key_arr = Object.keys(dict);
		
		for(var i = 0;i < key_arr.length;i++)
		{
			console.log('%c' + key_arr[i] + ": " + '%c' + dict[key_arr[i]], 'color:brown; font-weight:bold', 'color:black');	
			
			if(key_arr[i] == "url") 
				console.log("  ", window.location == dict[key_arr[i]]);
			
			if(key_arr[i] == "category") {
				arr = dict[key_arr[i]];
				for(var j = 0;j < arr.length;j++)
					console.log("		" + arr[j]);
			}
			
			if(key_arr[i] == "img") {
				arr = dict[key_arr[i]];
				if(typeof(arr)==typeof(new Array())){
				for(var j = 0;j < arr.length;j++)
					console.log("	" + '%c' + (j+1) + ": " + '%c' + arr[j], 'color:brown; font-weight:bold', 'color:black');
				}
			}
		}
		console.groupEnd();
		console.log('\n');
	}
	
	// spAddToCart
	self.spAddToCart = function() {
		console.groupCollapsed('%c' + "# spAddToCart", 'color:gray');
		var func = spApi.spAddToCart;
		var func_string = func.toString();
		if(func_string.includes("sQuery")){
			var disp_start = func_string.indexOf("sQuery");
			var disp_end = func_string.indexOf(')', disp_start);
				
			var index_first = func_string.indexOf("sQuery");
			var index_start = func_string.indexOf("(", index_first);
			var index_end = func_string.indexOf(')', index_start);
			
			var disp_str = func_string.substring(disp_start, disp_end + 1);
			var disp_final = disp_str.replace(/\\/g,'');
			
			var substr = func_string.substring(index_start + 3, index_end - 1);
			var str_final = substr.replace(/\\/g, '');
			
			console.log('%c  spAddToCart: ' + '%c' + disp_final, 'color:brown; font-weight:bold;', 'color:black');
			var idk = sQuery(str_final);
			console.log("	", idk);
		}
		else
			console.log("No Button");
		console.groupEnd();
		console.log('\n');
	}
	
	// getPaidProducts
	self.getPaidProducts = function() {
		console.groupCollapsed('%c' + "# getPaidProducts()", 'color:gray');	
		var arr = spApi.getPaidProducts();
		for (var i = 0;i < arr.length;i++){
			console.group('%c' + "Item " + (i+1), 'color:gray');		
			var dict = arr[i];
			var arr_keys = Object.keys(dict);
			
			
			
			for(var j = 0;j < arr_keys.length;j++){
				if(arr_keys[i] === 'img') {
					var product = JSON.parse(JSON.parse(spApi.localStorageGet('ins-cart-product-list')).data).productList[i];
					if(dict.img.indexOf(product.img) === -1) {
						console.log('error',dict.img,product.img);
					}
					else{
						console.log('true',dict.img,product.img);
						
					}
					
				}
				
				console.log("	" + '%c' + arr_keys[j] + ': %c' + dict[arr_keys[j]], 'color:brown; font-weight:bold', 'color:black');
			}
			console.groupEnd();
			if(i < arr.length - 1)
				console.log('\n');
		}
	
		console.groupEnd();
		console.log('\n');
	}
	
	// getCategories
	self.getCategories = function() {
		var arr_cat = spApi.getCategories();
		console.log('%c  getCategories(): ' + '%c     ' + arr_cat, 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
		
		if(typeof(arr_cat) == typeof(new Array())){
			for(var i = 0;i < arr_cat.length;i++)
				console.log("				" , arr_cat[i]);
		}
	}
	
	// getProductCategories
	self.getProductCategories = function() {
		console.groupCollapsed('%c' + "# getProductCategories()", 'color:gray');
		var arr_cat = spApi.getProductCategories();
		console.log('%c  getProductCategories(): ' + '%c     ' + arr_cat, 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
		
		if(typeof(arr_cat) == typeof(new Array())){
			for(var i = 0;i < arr_cat.length;i++)
				console.log("				" , arr_cat[i]);
		}
		console.groupEnd();
		console.log('\n');
	}
	
	// useCouponButton
	self.useCouponButton = function() {
		console.groupCollapsed('%c' + "# useCouponButton()", 'color:gray')
		var dict = spApi.useCouponButton();
		var arr_keys = Object.keys(dict);
		console.log('%c  useCouponButton():', 'color:brown; font-weight:bold;');
		
		for(var i = 0;i < arr_keys.length;i++){
			console.log("	" + '%c' + arr_keys[i] + ': %c' + dict[arr_keys[i]], 'color:brown; font-weight:bold', 'color:black');
			
			if(arr_keys[i] == "button"){
				var str = '%csQuery("' + dict[arr_keys[i]] + '")'
				console.log("		%cQuery: " + str, 'color:chocolate; font-weight:bold', 'color:black');
			}
			if(arr_keys[i] == "couponInput"){
				var str = 'sQuery("' + dict[arr_keys[i]] + 	'")'
				console.log("		%cQuery: " + '%c' + str, 'color:chocolate; font-weight:bold', 'color:black');
			}
		}
		console.groupEnd();
		console.log('\n');
	}
	
	// checkLogs
	self.checkLogs = function() {
		if (typeof spApi.errLogs !== 'undefined')
            console.log('%c  errLogs:              ' + '%c' + spApi.errLogs, 'color:brown; font-weight:bold;', 'color:red; font-weight: bold;')
    	else 
            console.log('%c  errLogs:              ' + '%c' + spApi.errLogs, 'color:brown; font-weight:bold;', 'color:black; font-weight: bold;')
	}
	
	// isCouponCodeApplied
	self.isCouponCodeApplied = function() {
		//console.log('%c  isCouponCodeApplied(): ' + '%c' + spApi.isCouponCodeApplied(), 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
	}
	
	// userLogin
	self.userLogin = function() {
		if (spApi.isUserLoggedIn()) 
            console.log('%c  isUserLoggedIn():     ' + '%c' + spApi.isUserLoggedIn(), 'color:brown; font-weight:bold;', 'color:#27CA00; font-weight: bold;')
        else 
            console.log('%c  isUserLoggedIn():     ' + '%c' + spApi.isUserLoggedIn(), 'color:brown; font-weight:bold;', 'color:black; font-weight: bold;')
	}
	
	// getLang
	self.getLang = function() {
		console.log('%c  getLang():            ' + '%c' + spApi.getLang(), 'color:brown; font-weight:bold;', 'color:black; font-weight: bold;');
	}
	
	// getCurrency
	self.getCurrency = function() {
		console.log('%c  getCurrency():        ' + '%c' + spApi.getCurrency(), 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
	}

	// getCartCount
	self.getCartCount = function() {
		console.log('%c  getCartCount():       ' + '%c' + spApi.getCartCount(), 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
	}
	
	// getTotalCartAmount
	self.getTotalCartAmount = function() {
		console.log('%c  getTotalCartAmount(): ' + '%c' + spApi.getTotalCartAmount(), 'color:brown; font-weight:bold;', 'color:black; font-weight:bold;');
	}
	
	// getOrderId
	self.getOrderId = function() {
		console.log('%c  getOrderId(): ' + '%c' + spApi.getOrderId(), 'color:brown; font-weight:bold;', 'color:green; font-weight:bold')
	}
	
	// setEmailToCookie
	self.setEmailToCookie = function() {
		var retval = sQuery.cookie("insUserData");
		console.log('%c  insUserData: 			' + '%c' + retval, 'color:brown; font-weight:bold;', 'font-weight:bold')
	}
	
	// ins-cart-product-list
	self.insCartProductList = function() {
		var insCartInfo = spApi.storageData('ins-cart-product-list');
		var index_find = insCartInfo.indexOf("totalQuantity");
		var index_start = index_find + ("totalQuantity").length + 2;
		var index_end = index_start + 1;
		var quantity = insCartInfo.substring(index_start, index_end);
		console.log('%c  ins-cart-product-list: ' + '%c' + quantity, 'color:brown; font-weight:bold;', 'font-weight:bold')	
		console.log("		%cSayfa yenilenmezse ins-cart-product-list degeri yenilenmez!", 'color:red');
	}
	
	
	//----------------------------------------MAIN--------------------------------------------------
    self.page_rules = function()
    {
    	// Main Page
        if (spApi.isOnMainPage()) {
			console.log('%c-------MainPageControls-------', 'color:red; font-weight:bold;');
			self.isOnPage();
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
			
			self.setEmailToCookie();
			console.log('%c------------------------------', 'color:red; font-weight:bold;');
        }

	   	// Category Page
        else if (spApi.isOnCategoryPage()) {
			console.log('%c-----CategoryPageControls-----', 'color:red; font-weight:bold;');
            self.isOnPage();
			self.getCategories();
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
			
			console.log('%c------------------------------', 'color:red; font-weight:bold;');
        }

    	// Product Page
        else if (spApi.isOnProductPage()) {
			console.log('%c-----ProductPageControls------', 'color:red; font-weight:bold;');
			self.isOnPage();
			self.getCurrentProduct();
			self.getVersusProductDetail();
			self.getProductCategories();
			self.spAddToCart();
			console.groupEnd();
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
			console.log('%c------------------------------', 'color:red; font-weight:bold;');
        }
 
        // Cart Page
        else if (spApi.isOnCartPage()) {
			console.log('%c-------CartPageControls-------', 'color:red; font-weight:bold;');
			self.isOnPage();
			self.getPaidProducts();
			if(spApi.isOnCouponPage()){
				self.useCouponButton();
				//self.isCouponCodeApplied();
			}
			self.getTotalCartAmount();	
			console.log('\n');
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
			
			self.insCartProductList();
			console.log('%c------------------------------', 'color:red; font-weight:bold;');
        }
 
        // Coupon Page
        else if (spApi.isOnCouponPage()) {
			if(!spApi.isOnCartPage()){
				self.isOnPage();
				self.useCouponButton();
				//self.isCouponCodeApplied();
			}
			console.log('%c------------------------------', 'color:red; font-weight:bold;');
        } 

        // AfterPayment Page
        else if (spApi.isOnAfterPaymentPage()) {
			self.isOnPage();
			self.getOrderId();
			console.log('\n');
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
        }

		// RegSuccess Page
		else if(spApi.isOnRegSuccessPage()) {
			self.isOnPage();
			console.log('\n');
			
			self.userLogin();
			self.getLang();
			self.getCurrency();
			self.checkLogs();
			self.getCartCount();
		}
		
		else
			console.log("%cTrue donen isOnPage() sorgusu yok", 'color:red');
        console.log('\n\n');
    }


    self.run();

})({});
