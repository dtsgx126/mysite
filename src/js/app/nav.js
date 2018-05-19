function AppleIco(node) {
		this.node=document.querySelector(node)
		this.childs=this.node.children
		this.init()
	}
	AppleIco.prototype.init = function() {
		self=this
		window.onload=function() {
			self.widthArr=[]
			for (var i = 0; i < self.childs.length; i++) {
				self.widthArr.push(self.childs[i].offsetWidth)
				self.childs[i].width=self.childs[i].offsetWidth/2
			}
			self.bind()
		}
		
	};
	AppleIco.prototype.bind=function() {
		self=this
		this.node.onmousemove=function(e) {
			// var e=e || window.e
			for (var i = 0; i < self.childs.length; i++) {
				var a=e.clientX-self.childs[i].offsetLeft-self.node.offsetLeft-self.childs[i].offsetWidth/2
				var b=e.clientY-self.childs[i].offsetTop-self.node.offsetTop-self.childs[i].offsetHeight/2
				var iScale=1-Math.sqrt(a*a+b*b)/300
				if (iScale<0.5) {iScale=0.5}
				self.childs[i].width=self.widthArr[i]*iScale
			}
		}
		this.node.onmouseleave=function() {
			for (var i = 0; i < self.childs.length; i++) {
				self.childs[i].width=self.widthArr[i]*0.5
			}
			
		}
	}
module.exports=AppleIco