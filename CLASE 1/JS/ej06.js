function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }
  
  
  doubleAfter2Seconds(10).then((r) => {
    console.log(r);
  });
  
 (async()=>{
      let sum =  
            await doubleAfter2Seconds(10)
            + await doubleAfter2Seconds(20)
            +  await doubleAfter2Seconds(30);
            console.log(sum);
 })()
  //Resolver sum
