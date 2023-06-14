// a.========================================
const helloWorld = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  };
  

// b.========================================
const messages = async () => {
    try {
      const msg = await helloWorld();
      console.log(msg);
    } catch (error) {
      console.error(error);
    }
  };


// c.========================================
messages();