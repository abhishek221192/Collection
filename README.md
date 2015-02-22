It can be used in both nodejs and browser.

var sets=new Collection.SortedSet();   
  
	sets.add('z');
	sets.add('c');
	sets.add('a');
	sets.add('a');
	sets.add('b');
	sets.add('k');
	 
	console.log("Contains k "+sets.contains("k"));
	 
	for(var c in sets.toArray())
	    console.log(sets.get(c));
	    
	
	var list=new Collection.SortedList();
	list.compare=function(a,b)
	{
	    if(a.name<b.name)
		  return 1;
		else if(a.name>b.name)
          return -1;
        else
	    	  
	    return 0;
	}	
	list.add({'name':'z'});
    list.add({'name':'c'});
    list.add({'name':'a'});
    list.add({'name':'a'});
    list.add({'name':'b'});
    list.add({'name':'k'});
	console.log("Contains k "+list.contains({'name':'k'}));
	for(var c in list.toArray())
	    console.log(list.get(c).name);
		
	
	
	
	var list=new Collection.ArrayList();
	list.compare=function(a,b)
	{
	    if(a.name<b.name)
		  return 1;
		else if(a.name>b.name)
          return -1;
        else
	    	  
	    return 0;
	}	
	list.add({'name':'z'});
    list.add({'name':'c'});
    list.add({'name':'p'});
    list.add({'name':'a'});
    list.add({'name':'b'});
    list.add({'name':'k'});
	console.log("IndexOf p "+list.indexOf({'name':'p'}));
	console.log("Contains p "+list.contains({'name':'p'}));
	for(var c in list.toArray())
	    console.log(list.get(c).name);
	
	
	var queue=new Collection.Queue();
        queue.add(4);
	queue.add(5);
	queue.add(6);
		
		//console.log(queue.toArray());
		console.log("Poll "+queue.poll());
		//console.log(queue.toArray());
		console.log("Peek "+queue.peek());
		//console.log(queue.toArray());
		console.log("Peek "+queue.peek());
		console.log(queue.toArray());
		console.log("Poll "+queue.poll());
		console.log(queue.toArray());
		console.log("Peek "+queue.peek());
		console.log(queue.toArray());
	

    var list = new Collection.LinkedList();
    list.compare=function(a,b)
	{
	    if(a.name<b.name)
		  return 1;
		else if(a.name>b.name)
          return -1;
        else if(a.name==b.name)
	    	  
	    return 0;
	}
	list.add({'name':'z'});
    list.add({'name':'c'});
    list.add({'name':'a'});
    list.add({'name':'l'});
    list.add({'name':'b'});
    list.add({'name':'k'});
    console.log(list.indexOf({'name':'l'}));		
	console.log(list.toArray());
    list.removeFirstOccurrence({'name':'l'});
	console.log(list.toArray());
	console.log(list.get(2));
	
	var list = new Collection.ArrayList();
    list.compare=function(a,b)
	{
	    if(a.name<b.name)
		  return 1;
		else if(a.name>b.name)
          return -1;
        else if(a.name==b.name)
	    	  
	    return 0;
	}
	list.add({'name':'z'});
    list.add({'name':'c'});
    list.add({'name':'a'});
    list.add({'name':'l'});
    list.add({'name':'b'});
    list.add({'name':'k'});
    console.log(list.indexOf({'name':'k'}));
	console.log(list.toArray());
	console.log(list.get(2));


    var tree=new Collection.TreeSet();
	
	tree.compare=function(a,b)
	{
	    if(a.name<b.name)
		  return 1;
		else if(a.name>b.name)
          return -1;
        else		  
	    return 0;
	}
	
	 tree.add({'name':'z'});
	 tree.add({'name':'c'});
	 tree.add({'name':'a'});
	 tree.add({'name':'a'});
	 tree.add({'name':'b'});
	 tree.add({'name':'k'});
	 
	 console.log(tree.toArray());
	 
	 tree.remove({'name':'k'});
	 
	 var iterator=tree.iterator();
	 
	 while(iterator.hasNext())
	 {
	    console.log(iterator.next().name);
     }
	 
	 
	    var map=new Collection.HashMap();
		
		var t={id:'a',name:'test'};
		var t1={id:'b',name:'test1'};
		var t2={id:'c',name:'test2'};
		
		map.put(t,'Abhishek');
		map.put(t2,'Singh');
		map.put(t1,'kumar');
		
		map.compare=function(a,b)
	   {
	    if(a.id<b.id)
		  return 1;
		else if(a.id>b.id)
          return -1;
        else if(a.id==b.id)		  
	    return 0;
	   }
	   
	   console.log(map.keySet());
		
		var iterator=map.entrySet();
		
	   while(iterator.hasNext())
	 {
	    var entry=iterator.next();
	    console.log(entry.getKey().id+"  ==  "+entry.getValue());
     }
	
	
