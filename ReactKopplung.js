function ReactKopplung(){
  this._parent = null;
  this.setParent = function(obj){
    this._parent = obj;
    return this;
  }
  this.parent = function(obj){
    return this._parent;
  }
  this._rootNode = null;
  this.setRoot = function(el){
    this._node = (el == '<>') ? React.Fragment: el;
    this._rootNode = this;
    return this;
  }
  this.rootNode = function(obj){
    return this._rootNode;
  }
  this.copyRoot = function(obj){
    this._rootNode = obj;
    return this;
  }
  this._node = '';
  this.setNode = function(el){
    this._node = el;
    return this;
  }
  this._props = {};
  this.setAllProps = function(obj){
    this._props = obj;
    return this;
  }
  this.setProp = function(key, val){
    this._props[key] = val;
    return this;
  }
  this.removeProp = function(key){
    delete this._props[key];
    return this;
  }
  this._children = [];
  this.child = function(el){
    const childObj = new ReactKopplung();
    childObj.setNode(el).copyRoot(this._rootNode).setParent(this);
    this._children.push(childObj);
    return childObj;
  }
  this.mapChildren = function(func){
    const data = this._data;
    for (let i = 0; i < data.length; i++){
      func(data[i], i, this, data);
    }
    return this;
  }
  this._data = null;
  this.data = function(val){
    this._data = val;
    return this;
  }
  this._text = '';
  this.setText = function(val){
    this._text = val;
    return this;
  }
  this.render = function(){
    const finalChildren = this._children.map((child, index) =>{
      // Call the render function recursively
      return child.render();
    })
    finalChildren.unshift(this._text);
    return React.createElement(this._node, this._props, finalChildren);
  }
}
