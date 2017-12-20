/**
 * Created by ChenPan on 2017/5/18.
 */

var appName = '{{cnName}}';
var copyName = '{{company}}';
var copyYear = '{{companyStartYear}} - '+getYear();

function getYear(){
  var date=new Date;
  var year=date.getFullYear();
  return year.toString();
}

module.exports ={appName,copyName,copyYear}
