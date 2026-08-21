const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('moneyFormat', function (content) {
  return content.toFixed(2)
})

addFilter('randomDatePast', function (date, number) {
  let tempDate = new Date(date);
  const rndInt = Math.floor(Math.random() * 6) + 0
  tempDate.setDate(tempDate.getDate() - rndInt)
  return tempDate.toISOString().split('T')[0]
})

addFilter('randomDateFuture', function (date, number) {
  let tempDate = new Date(date);
  const rndInt = Math.floor(Math.random() * 12) + 2
  tempDate.setDate(tempDate.getDate() + rndInt)
  return tempDate.toISOString().split('T')[0]
})


addFilter('formatNino', function (nino) {
  return nino.replace(/.{2}(?!$)/g, "$& ");
})
