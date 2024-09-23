function q2ContarFrequenciaPalavra(text) {
    const words = text.toLowerCase().split(/\s+/);

    const frequency = words.reduce((verify, words) => {
        verify[words] = (verify[words] || 0) + 1;
        return verify;

    }, {});


    return frequency;
  }
  
  console.log(q2ContarFrequenciaPalavra("Hello world hello"));