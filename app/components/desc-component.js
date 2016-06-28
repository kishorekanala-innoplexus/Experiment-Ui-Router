angular.module('comp')
	.component('detailDesc',{
		templateUrl:'partials/desc.html',
		controller:['$http','$stateParams','cartService','$scope', function($http,$stateParams,cartService,$scope){
			var self = this;
			    
			
			self.id=$stateParams.id;
			self.setImage = function setImage(imageUrl) {
				self.mainImageUrl = imageUrl;
			};
			$http.get("phones/"+self.id+".json").then(function(response){
				self.phonedetail = response.data;
				self.setImage(self.phonedetail.images[0]);
			})
			
		}]
	})
	//'+self.id+'