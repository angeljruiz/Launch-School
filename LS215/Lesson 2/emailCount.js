var data = require('./email_data_v2.js');
var emailCount = data.split('##||##').length;
var dates = data.split('#/#').filter( item => item.split(' ')[0].trim() == 'Date:').map( item => {
  return new Date(item.split(' ')[1]);
});

dates = dates.sort( (a, b) => a - b).map( date => {
  let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'};
  return new Intl.DateTimeFormat('en-US', options).format(date).replace(/,/g, '');
});

dates = [dates[0], dates[dates.length - 1]];

console.log('Count of Email: ' + emailCount);
console.log('Date Range: ' + dates.join(' - '));
