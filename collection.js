
(function (exports) {
  "use strict";

function Queue() {
    this.queue  = new Array();
    this.offset = 0;
}

Queue.prototype = {
    constructor: Queue,
    add:function(item){
       this.queue.push(item);
    },
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	element:function(){
      return (this.queue.length > 0 ? this.queue[this.offset] : null);
    },
    offer:function(item){
       this.add(item);
    },
 	peek:function(){
       return this.element();
    },
	poll:function(){
	   if (this.queue.length == 0) return null;
	   var item = this.queue[this.offset];
	   if (++ this.offset * 2 >= this.queue.length){
          this.queue  = this.queue.slice(this.offset);
          this.offset = 0;
       }
	   return item;
    },
	remove:function(){
	    var item=this.poll();
		if(item==null)
		  return false;
		return true;
	},
	size:function(){
      return (this.queue.length - this.offset);
    },
	isEmpty:function(){
       return (this.queue.length == 0);
    },
	
	toArray:function(){
	    return this.queue;
	},

    toString: function(){
        return this.toArray().toString();
    }
	
};

function SortedSet() {
    this.data = new Array();
}
SortedSet.prototype = {
    constructor: SortedSet,
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	add:function(element) 
	{
	   if(this.data.indexOf(element)==-1)
	    this.data.splice(this.sort(element, this.data) + 1, 0, element);
	},
	
    get : function(index) {
        return this.data[index];
    },
	
    remove : function(index) {
        this.data.splice(index,1);
    },
	
	indexOf:function(key){
	   for(var i=0;i<this.size();i++)
		{
		   if(this.compare(this.get(i),key)==0)
		     return i;
		}
	    return -1;
	},
    contains : function(key) {
        return this.indexOf(key)!=-1;
    },
	
	
    isEmpty : function() {
        return this.data.length == 0;
    },
	
	each:function(iteratorFunction, thisObj) {
        for (var value in this._values) {
            iteratorFunction.call(thisObj, this._values[value]);
        }
    },
	
	sort:function(element, array, start, end) {
       start = start || 0;
       end = end || array.length;
       var pivot = parseInt(start + (end - start) / 2, 10);
	   if (array.length==0) return pivot;
       if (this.compare(array[pivot],element)==0) return pivot;
       if (end - start <= 1)
          return this.compare(array[pivot],element)<0 ? pivot - 1 : pivot;
       if (this.compare(array[pivot],element)>0) {
          return this.sort(element, array, pivot, end);
       } else {
          return this.sort(element, array, start, pivot);
      }
    },

    size : function(){
        return this.data.length;
    },
	
	toArray:function(){
	    return this.data;
	},

    toString: function(){
        return this.toArray().toString();
    }
};

function SortedList() {
    this.data = new Array();
}

SortedList.prototype = {
    constructor: SortedList,
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	add:function(element) 
	{
	    this.data.splice(this.sort(element, this.data) + 1, 0, element);
	},
	
    get : function(index) {
        return this.data[index];
    },
	
    remove : function(index) {
        this.data.splice(index,1);
    },
	
	indexOf:function(key){
	   for(var i=0;i<this.size();i++)
		{
		   if(this.compare(this.get(i),key)==0)
		     return i;
		}
	    return -1;
	},
    contains : function(key) {
        return this.indexOf(key)!=-1;
    },
	
	
    isEmpty : function() {
        return this.data.length == 0;
    },
	
	each:function(iteratorFunction, thisObj) {
        for (var value in this._values) {
            iteratorFunction.call(thisObj, this._values[value]);
        }
    },
	
	sort:function(element, array, start, end) {
       start = start || 0;
       end = end || array.length;
       var pivot = parseInt(start + (end - start) / 2, 10);
	   if (array.length==0) return pivot;
       if (this.compare(array[pivot],element)==0) return pivot;
       if (end - start <= 1)
          return this.compare(array[pivot],element)<0 ? pivot - 1 : pivot;
       if (this.compare(array[pivot],element)>0) {
          return this.sort(element, array, pivot, end);
       } else {
          return this.sort(element, array, start, pivot);
      }
    },

    size : function(){
        return this.data.length;
    },
	
	toArray:function(){
	    return this.data;
	},

    toString: function(){
        return this.toArray().toString();
    }
};
	
function ArrayList() {
    this.data = new Array();
}

ArrayList.prototype = {
    constructor: ArrayList,
	add : function(value) {
       this.data.push(value);
    },
    
    addAll : function(list) {
        for(var i=0;i<list.size();i++)
           this.add(list.get(i));
    },
	
    get : function(index) {
        return this.data[index];
    },
	
    remove : function(index) {
        this.data.splice(index,1)
    },
	
	sort : function()
	{
	   this.data.sort(this.compare());
	},
	
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	indexOf:function(key){
	   for(var i=0;i<this.size();i++)
		{
		   if(this.compare(this.get(i),key)==0)
		     return i;
		}
	    return -1;
	},
    contains : function(key) {
        return this.indexOf(key)!=-1;
    },
	
    isEmpty : function() {
        return this.data.length == 0;
    },

    size : function(){
        return this.data.length;
    },
	
	toArray:function(){
	    return this.data;
	},

    toString: function(){
        return this.toArray().toString();
    }
};

function LinkedList() {
    this._length = 0;
    this._head = null;
    this._tail = null;
  }

  LinkedList.prototype = {

    add: function (value){
        var node = {
                value: value,
                next: null,
                prev: null
            };
        if (this._length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }   
        this._length++;

    },
	
	addByIndex: function(index,element){
	    console.log('test');
	},
	
	addAll: function(list){
	   
	},
	addAllByIndex:function(index, list){
	},
	addLast:function(e)	{
        this.add(e);	
	},
	clear:function(){
        this._head = null;
        this._tail = null;
	},
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	contains:function(value){
	    var contain = false;
        var current = this.first;
		while(current!=null)
	      {
            if(this.compare(current.value,value)==0)
			 contain =true;
			current = current.next;
          }
        return contain;
	},	
	descendingIterator:function(){
	},	
	element:function(){
	   return this.head.value;
	},	
	get:function(index){
	    //console.log(index);
	    if (index >= 0 && index < this._length) {
         var node = this._head;
         while (index--) {
          node = node.next;
         }
         return node.value;
       }
	   return null;
	},
	getFirst:function(){	   
	   return this.head.value;
	},	
	getLast:function(){
	   return this.tail.value;
	},
	indexOf:function(value){
	    var i=-1;
        var current = this._head;
		//console.log(current);
		while(current!=null)
	      {
			i++;
            if(this.compare(current.value,value)==0)
			{
			  return i;
			 }
			current = current.next;
          }
        return -1;
	},	
	lastIndexOf:function(value){
	    var i=-1;
        var current = this._tail;
		while(current!=null)
	      {
			i++;
            if(this.compare(current.value,value)==0){
			 return this._length-i-1;
			}
			current = current.prev;
          }
        return -1;
	},	
	listIterator:function(index){
	},
	offer:function(e){
	   this.add(e);
	},
	offerFirst:function(value){
	   var node = {
                value: value,
                next: null,
                prev: null
       };
	   node.next=this.first;
	   this._head=node;
	},
	offerLast:function(e){
	   this.add(e);
	},
	peek:function(){ 
	   return this._head.value;
	},
	peekFirst:function(){ 
	   return this._head.value;
	},
	peekLast:function(){ 
	   return this.last.value;
	},
	poll:function(){	
	   var value = this._head;
	   if(this._head!=null)
         this._head = this._head.next;	   
       return value;
	},
	pollFirst:function(){
	    this.poll();
	},
	pollLast:function(){
	    this.removeByIndex(this.length-1);
	},
	
	
	remove:function(o){
	  if(isNaN(o))
	    this._removeByElement(o);
	  else
	    this._removeByIndex(o);
	},
	removeFirst:function(){
	    if(this.poll()!=null)
		   return true;
		return false;
	},
	removeFirstOccurrence:function(o){	   
	   var index=this.indexOf(o);
	   if(index!=-1){
	     this._removeByIndex(index);
		 return true;
		}
		return false;
	},
	removeLast:function(){
	   this._removeByIndex(this.size()-1);
	},
	removeLastOccurrence:function(o){
	   var index=this.lastIndexOf(o);
	   if(index!=-1){
	     this._removeByIndex(index);
		 return true;
		}
		return false;
	},
	set:function(index,element){
	    if(index<this.size())
		{
           var i = 0;
           var current = this._head;
	       if(index === 0){
             this._head.value = element;
           }
		   else{
             while(i++ < index){
			   current = current.next;
             }
		     current.value = element;
           }
		}
		else
		  console.log('Wrong Index');
	},
	size:function()
	{
	   return this._length;
	},
	
    toArray:function(){
	   
        var result = [];
        this.traverse(function(node){
            result.push(node.value);
        });
        return result;
	},

    toString: function(){
        return this.toArray().toString();
    },
	
	_removeByIndex: function(index){
        if (index > -1 && index < this._length){

            var current = this._head,
                i = 0;
            if (index === 0){
                this._head = current.next;
                if (!this._head){
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            } else if (index === this._length -1){
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
			
                while(i++ < index){
                    current = current.next;
                }
				
                current.prev.next = current.next;
            }
			
            this._length--;
			
            return current.value;            

        } else {
            return null;
        }

     },
	
	_removeByElement:function(value){	   
       var current = this._head, previous,test;
	   var index=0;
	   var valuePosition=new Array();
	   
	   while(current.next != null)
       {
	      if(this.compare(current.value,value)==0)
		     {
			   valuePosition.push(index);
			 }
			current = current.next;
			index=index+1;
       }
	   for(var i=0;i<valuePosition.length;i++)
	     this.removeByIndex(valuePosition[i]-i);
	      
        //return current.value;
	   
	},
	
	 traverse: function(process){
	
        function read(node){
            if (node){ 
                process.call(this, node);
                if (node.next !== null){
                    read(node.next);
                }      
            }
        }
        read(this._head);
    },
	
  };

function TreeSet() {
    this._root = null;
}

TreeSet.prototype = {
    constructor: TreeSet,
    add: function(value){
        var node = {
                value: value,
                left: null,
                right: null
            },
            current;
        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;
            while(true){
			    //console.log(this.compare);
                if (this.compare(value,current.value)>0){
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (this.compare(value,current.value)<0){
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }       
				} else {
                    break;
                }
            }
        }
    },
   addAll: function( c){
   },
   ceiling:function(value)
	{	   
	   var current = this.toArray();
	   var result=current[0];
	   for(var i=0;i<current.length;i++)
	   {
	      var compareVal=this.compare(value,current[i])
	      if(compareVal==-1||compareVal==0)
		   result=current[i];
	   }
	   return result;
	},
	clear:function()
	{	   
	   this._root = null;
	},
	contains: function(value){
        var found       = false,
            current     = this._root
			
        while(!found && current){
		
            if (this.compare(value,current.value)>0){
                current = current.left;
				
            } else if (this.compare(value,current.value)<0){
                current = current.right;
				
            } else {
                found = true;
            }
        }
		
        return found;
    },
	compare:function(a,b)
	{
	    if(a<b)
		  return 1;
		else if(a>b)
          return -1;
        else		  
	    return 0;
	},
	descendingIterator:function()
	{
	},
	descendingSet:function()
	{
	},
    first:function(){
	   var current=this._root;
	   var value=null;
	   while(current!=null)
	   {
	     value=current.value;
	     current=current.left;
	   }
	     return value;
	},
	floor:function(value)
	{	   
	   var current = this.toArray();
	   var result=current[current.length-1];
	   for(var i=current.length-1;i>=0;i--)
	   {
	      var compareVal=this.compare(value,current[i])
	      if(compareVal==-1||compareVal==0)
		   result=current[i];
	   }
	   return result;
	},
	higher:function(value)
	{	   
	   var current = this.toArray();
	   var result=current[current.length-1];
	   for(var i=current.length-1;i>=0;i--)
	   {
	      var compareVal=this.compare(value,current[i])
	      if(compareVal==1)
		   result=current[i];
	   }
	   return result;
	},
	isEmpty:function(){
	   return this.root==null
	},
	
    iterator:function(){
	     var that={},i=0;
		 var data=this.toArray();
		 
	     that.next=function()
		 {
		   var value=data[i];
		   i=i+1;
		   return value;
		 }
		 
		 that.hasNext=function()
		 {
		    if(i<data.length)
			   return true;
			return false;
		 }
		 
		 return that;
	 },
    last:function(){
	   var current=this._root;
	   var value=null;
	   while(current!=null)
	   {
	     value=current.value;
	     current=current.right;
	   }
	     return value;
	},
	lower:function(value)
	{	   
	   var current = this.toArray();
	   var result=current[current.length-1];
	   for(var i=current.length-1;i>=0;i--)
	   {
	      var compareVal=this.compare(value,current[i])
	      if(compareVal==-1)
		   result=current[i];
	   }
	   return result;
	},
	remove: function(value){
       var found = false,
       parent = null,
       current = this._root,childCount,replacement,replacementParent;
	   while(!found && current){
	    if (this.compare(value,current.value)>0){
           parent = current;
           current = current.left;
		} else if (this.compare(value,current.value)<0){
		   parent = current;
           current = current.right;
		} else {
          found = true;
        }
       }
	   if (found){
	      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);
		  if (current === this._root){
              switch(childCount){
			    case 0:
                   this._root = null;
				break;
				case 1:
                    this._root = (current.right === null ? current.left : current.right);
                 break;
				 case 2:
                    replacement = this._root.left;
                    while (replacement.right !== null){
                          replacementParent = replacement;
                          replacement = replacement.right;
                        }
                    if (replacementParent !== null){
                          replacementParent.right = replacement.left;
						  replacement.right = this._root.right;
						  replacement.left = this._root.left;
						}
					else {
					      replacement.right = this._root.right;
                        }
						this._root = replacement;
              }
		  } else {
               switch (childCount){
			      case 0:
				     if (this.compare(current.value,parent.value)>0){
					    parent.left = null;
					  } else {
                        parent.right = null;
                      }
                  break;
				  case 1:
				     if (this.compare(current.value,parent.value)>0){
                        parent.left = (current.left === null ? current.right : current.left);
                     } else {
                        parent.right = (current.left === null ? current.right : current.left);
                     }
                  break;
                  case 2:
				     replacement = current.left;
                     replacementParent = current;
					 while(replacement.right !== null){
                         replacementParent = replacement;
                         replacement = replacement.right;
                     }
                     replacementParent.right = replacement.left;
                     replacement.right = current.right;
                     replacement.left = current.left;
					 if (this.compare(current.value,parent.value)>0){
                         parent.left = replacement;
                     } else {
                         parent.right = replacement;
                     }
			   }
           }
        }
    },
    pollFirst:function()
	{
	  //Retrieves and removes the first (lowest) element, or returns null if this set is empty.
	},
	pollLast:function()
	{
	  //Retrieves and removes the last (highest) element, or returns null if this set is empty.
	},
	size: function(){
        var length = 0;

        this.traverse(function(node){
            length++;
        });

        return length;
    },

    toArray: function(){
        var result = [];

        this.traverse(function(node){
            result.push(node.value);
        });

        return result;
    },

    toString: function(){
        return this.toArray().toString();
    },
	
	traverse: function(process){
	
        function inOrder(node){
            if (node){
			
                if (node.left !== null){
                    inOrder(node.left);
                }            
				
                process.call(this, node);
				
                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }
		
        inOrder(this._root);
    }
};

function HashMap() {
   this.keys = new Array();
   this.data = new Object();
}
HashMap.prototype = {
    constructor: HashMap,
    clear:function(){
	    this.keys = new Array();
        this.data = new Object();
	},
	containsKey:function(key) {
	    return this.keys.indexOf(key)==-1;
    },
	containsValue:function(value){
	   var keys=this.keySet();
	   for(var i=0;i<keys.length;i++){
	       if(this.get(keys[i])==value)
		     return true;
	   }
	   return false;
	},
	entrySet:function(){
	   var Entry = function(e){ 
         var that = {};
		 
		 that.key=null;
		 that.value=null;
		 
		 that.init= function(key,value){
		    that.key=key;
		    that.value=value;
         }
		 that.setValue = function(value){
		    //that.key=key;
			//that.value=value;
         }
		 that.getKey = function(){
		    return that.key;
         }
		 that.getValue = function(){
		    return that.value;
         }
		 return that;
	   }
	   
	   var keys=this.keySet();
	   var data=this.data;
	   var these={},i=0;
	   
	   these.next=function()
		 {
		   var entry=new Entry();
		    var keyValue=keys[i];
		    var key=JSON.stringify(keyValue);
		    key=hash(key);
		    entry.init(keys[i],data[key]);
		    i=i+1;
		   return entry;
		 }
		 
		 these.hasNext=function()
		 {
		    if(i<keys.length)
			   return true;
			return false;
		 }
		 
		 return these;
	   
	},
	get:function(key) {
        key=JSON.stringify(key);
		key=hash(key);
        return this.data[key];
    },
	isEmpty:function() {
           return this.keys.length == 0;
    },
	keySet:function() {
        return this.keys;
    },
	put:function(key, value) {
		if(this.keys.indexOf(key)==-1){
            this.keys.push(key);
        }
        key=JSON.stringify(key);
		key=hash(key);        
        this.data[key] = value;
		
		
    },
	putAll:function(map){
	    var iterator=map.entrySet();
		while(iterator.hasNext())
	    {
	      var entry=iterator.next();
		  this.put(entry.getKey(),entry.getValue());
        }
	},
	remove:function(key) {
        this.keys.remove(key);
		key=JSON.stringify(key);
	    key=hash(key);            
        this.data[key] = null;
    },
	
	compare : function(sort)
	{
	   if(sort==undefined)
	   this.keys.sort();
	   else
	   this.keys.sort(sort);
	},
	size:function(){
        return this.keys.length;
    },
	values:function(){
	},
};



function hash(str) {
        var xl;
        var rotateLeft = function(lValue, iShiftBits) {
          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        };
        var addUnsigned = function(lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = lX & 2147483648;
          lY8 = lY & 2147483648;
          lX4 = lX & 1073741824;
          lY4 = lY & 1073741824;
          lResult = (lX & 1073741823) + (lY & 1073741823);
          if (lX4 & lY4) {
            return lResult ^ 2147483648 ^ lX8 ^ lY8;
          }
          if (lX4 | lY4) {
            if (lResult & 1073741824) {
              return lResult ^ 3221225472 ^ lX8 ^ lY8;
            } else {
              return lResult ^ 1073741824 ^ lX8 ^ lY8;
            }
          } else {
            return lResult ^ lX8 ^ lY8;
          }
        };
        var _F = function(x, y, z) {
          return x & y | ~x & z;
        };
        var _G = function(x, y, z) {
          return x & z | y & ~z;
        };
        var _H = function(x, y, z) {
          return x ^ y ^ z;
        };
        var _I = function(x, y, z) {
          return y ^ (x | ~z);
        };
        var _FF = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _GG = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _HH = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var _II = function(a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };
        var convertToWordArray = function(str) {
          var lWordCount;
          var lMessageLength = str.length;
          var lNumberOfWords_temp1 = lMessageLength + 8;
          var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
          var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
          var lWordArray = new Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;
          while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | str.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        };
        var wordToHex = function(lValue) {
          var wordToHexValue = "", wordToHexValue_temp = "", lByte, lCount;
          for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            wordToHexValue_temp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
          }
          return wordToHexValue;
        };
        var x = [], k, AA, BB, CC, DD, a, b, c, d, S11 = 7, S12 = 12, S13 = 17, S14 = 22, S21 = 5, S22 = 9, S23 = 14, S24 = 20, S31 = 4, S32 = 11, S33 = 16, S34 = 23, S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        x = convertToWordArray(str);
        a = 1732584193;
        b = 4023233417;
        c = 2562383102;
        d = 271733878;
        xl = x.length;
        for (k = 0; k < xl; k += 16) {
          AA = a;
          BB = b;
          CC = c;
          DD = d;
          a = _FF(a, b, c, d, x[k + 0], S11, 3614090360);
          d = _FF(d, a, b, c, x[k + 1], S12, 3905402710);
          c = _FF(c, d, a, b, x[k + 2], S13, 606105819);
          b = _FF(b, c, d, a, x[k + 3], S14, 3250441966);
          a = _FF(a, b, c, d, x[k + 4], S11, 4118548399);
          d = _FF(d, a, b, c, x[k + 5], S12, 1200080426);
          c = _FF(c, d, a, b, x[k + 6], S13, 2821735955);
          b = _FF(b, c, d, a, x[k + 7], S14, 4249261313);
          a = _FF(a, b, c, d, x[k + 8], S11, 1770035416);
          d = _FF(d, a, b, c, x[k + 9], S12, 2336552879);
          c = _FF(c, d, a, b, x[k + 10], S13, 4294925233);
          b = _FF(b, c, d, a, x[k + 11], S14, 2304563134);
          a = _FF(a, b, c, d, x[k + 12], S11, 1804603682);
          d = _FF(d, a, b, c, x[k + 13], S12, 4254626195);
          c = _FF(c, d, a, b, x[k + 14], S13, 2792965006);
          b = _FF(b, c, d, a, x[k + 15], S14, 1236535329);
          a = _GG(a, b, c, d, x[k + 1], S21, 4129170786);
          d = _GG(d, a, b, c, x[k + 6], S22, 3225465664);
          c = _GG(c, d, a, b, x[k + 11], S23, 643717713);
          b = _GG(b, c, d, a, x[k + 0], S24, 3921069994);
          a = _GG(a, b, c, d, x[k + 5], S21, 3593408605);
          d = _GG(d, a, b, c, x[k + 10], S22, 38016083);
          c = _GG(c, d, a, b, x[k + 15], S23, 3634488961);
          b = _GG(b, c, d, a, x[k + 4], S24, 3889429448);
          a = _GG(a, b, c, d, x[k + 9], S21, 568446438);
          d = _GG(d, a, b, c, x[k + 14], S22, 3275163606);
          c = _GG(c, d, a, b, x[k + 3], S23, 4107603335);
          b = _GG(b, c, d, a, x[k + 8], S24, 1163531501);
          a = _GG(a, b, c, d, x[k + 13], S21, 2850285829);
          d = _GG(d, a, b, c, x[k + 2], S22, 4243563512);
          c = _GG(c, d, a, b, x[k + 7], S23, 1735328473);
          b = _GG(b, c, d, a, x[k + 12], S24, 2368359562);
          a = _HH(a, b, c, d, x[k + 5], S31, 4294588738);
          d = _HH(d, a, b, c, x[k + 8], S32, 2272392833);
          c = _HH(c, d, a, b, x[k + 11], S33, 1839030562);
          b = _HH(b, c, d, a, x[k + 14], S34, 4259657740);
          a = _HH(a, b, c, d, x[k + 1], S31, 2763975236);
          d = _HH(d, a, b, c, x[k + 4], S32, 1272893353);
          c = _HH(c, d, a, b, x[k + 7], S33, 4139469664);
          b = _HH(b, c, d, a, x[k + 10], S34, 3200236656);
          a = _HH(a, b, c, d, x[k + 13], S31, 681279174);
          d = _HH(d, a, b, c, x[k + 0], S32, 3936430074);
          c = _HH(c, d, a, b, x[k + 3], S33, 3572445317);
          b = _HH(b, c, d, a, x[k + 6], S34, 76029189);
          a = _HH(a, b, c, d, x[k + 9], S31, 3654602809);
          d = _HH(d, a, b, c, x[k + 12], S32, 3873151461);
          c = _HH(c, d, a, b, x[k + 15], S33, 530742520);
          b = _HH(b, c, d, a, x[k + 2], S34, 3299628645);
          a = _II(a, b, c, d, x[k + 0], S41, 4096336452);
          d = _II(d, a, b, c, x[k + 7], S42, 1126891415);
          c = _II(c, d, a, b, x[k + 14], S43, 2878612391);
          b = _II(b, c, d, a, x[k + 5], S44, 4237533241);
          a = _II(a, b, c, d, x[k + 12], S41, 1700485571);
          d = _II(d, a, b, c, x[k + 3], S42, 2399980690);
          c = _II(c, d, a, b, x[k + 10], S43, 4293915773);
          b = _II(b, c, d, a, x[k + 1], S44, 2240044497);
          a = _II(a, b, c, d, x[k + 8], S41, 1873313359);
          d = _II(d, a, b, c, x[k + 15], S42, 4264355552);
          c = _II(c, d, a, b, x[k + 6], S43, 2734768916);
          b = _II(b, c, d, a, x[k + 13], S44, 1309151649);
          a = _II(a, b, c, d, x[k + 4], S41, 4149444226);
          d = _II(d, a, b, c, x[k + 11], S42, 3174756917);
          c = _II(c, d, a, b, x[k + 2], S43, 718787259);
          b = _II(b, c, d, a, x[k + 9], S44, 3951481745);
          a = addUnsigned(a, AA);
          b = addUnsigned(b, BB);
          c = addUnsigned(c, CC);
          d = addUnsigned(d, DD);
        }
        var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
        return temp.toLowerCase();
 }

   exports.Queue = Queue;
   exports.SortedSet = SortedSet;
   exports.SortedList = SortedList;
   exports.ArrayList = ArrayList;
   exports.LinkedList = LinkedList;
   exports.TreeSet = TreeSet;
   exports.HashMap = HashMap;
   
   
})(typeof exports === 'undefined' ? this['Collection'] = {} : exports);
