var smartphone = new Object();
smartphone.brand="Apple";
smartphone.price=9000;
smartphone.model="iphone 15";
console.log(smartphone);
smartphone.is5G=true;
smartphone.price="50,000";
delete smartphone.is5G;
console.log("brand" in smartphone);
console.log(smartphone);

