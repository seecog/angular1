var events = require('events');

var x = new events.EventEmitter();

var emp = {
	id : 1,
	name : 'Mohan',
	dept : 'CSE',
	salary : 100000
};
x.on('accounts',function(ev){
	
	console.log('The data is ')
	console.log(ev)
});
x.on('employee',function(emp){
	emp.hra = 1300;
	emp.ta = 4000;
	emp.da = 2000;
	//x.emit('accounts',employee);
	
});
x.emit('employee',emp);