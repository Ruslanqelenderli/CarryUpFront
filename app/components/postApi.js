export const getData = async () => {
  try {
    const res = await fetch("https://api/Manage/Login", {
        method:"POST",
        body:JSON.stringify({
            "firstTab": "string",
            "password": "string",
            "rememberMe": true
          }),
        cache: "force-cache",
      });
      const data = res.json();
      return data;
  } catch (error) {
    console.log('getData error: ', error);
  }
  };
  