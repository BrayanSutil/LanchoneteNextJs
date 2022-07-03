export const GTMPageView = (url) => {

  const pageEvent = {
    event: 'pageview',
    page: url,
  };
  // const consorcioEvent = {
  //   event: 'sucessoConsorcio',
  //   page: url,
  // };
  // const seguroEvent = {
  //   event: 'sucessoSeguro',
  //   page: url,
  // };

  // if(url.includes('/resultado-simulacao-consorcio')){
  //   window && window.dataLayer && window.dataLayer.push(consorcioEvent);
  //   return consorcioEvent;
  // }else if(url.includes('/resultado-simulacao-seguro')){
  //   window && window.dataLayer && window.dataLayer.push(seguroEvent);
  //   return seguroEvent;
  // }else{
  //   window && window.dataLayer && window.dataLayer.push(pageEvent);
  //   return pageEvent;
  // }
};