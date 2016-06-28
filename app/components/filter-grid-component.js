angular.module('comp')
	.component('filterGrid',{
		templateUrl:'partials/filter.html',
		controller: ['$http','cartService','$scope','$stateParams','$state','$location', function($http,cartService,$scope,$stateParams,$state,$location){
			var self= this;
			self.all="All";
			self.$onInit = function(){
				$http.get('phones/phones.json').then(function(response){
				self.phones=response.data;
				self.phoneList= self.phones;
			})
			}
			this.comp= function(company,id){
				console.log(company);
				self.phoneList=[];
				$state.go('state',{
					company: company,
					id: id
				},{
					notify:false
				})
				if(company === 'All')
				{
					self.phoneList = self.phones;
				}

				for (var i = 0; i<self.phones.length; i++) {
					if(company === self.phones[i].company){
						self.phoneList.push(self.phones[i]);
					}
				}
				
			}
		}]
	});