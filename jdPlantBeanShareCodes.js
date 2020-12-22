/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PLANT_BEAN_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',//账号一的好友shareCode,不同好友中间用@符号隔开
    'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
	  'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
	    'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
		  'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
		    'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
			  'qj27hlitp6mgcyqbob6wwx7tj43h7wlwy7o5jii@olmijoxgmjutz6qcgpctgxwqfc5ba5fly5jlhba@afjmnwak3un3yht2nki7sshoe4@e7lhibzb3zek3d6p3d5ogub42tx2rqi723ifufy@4npkonnsy7xi3p6pjfxg6ct5gll42gmvnz7zgoy@nkvdrkoit5o65u6cqxfqokj5jowdql73wx7b6ua@ds3ya4fnmkg56gqcbgnblg7poe3h7wlwy7o5jii@olmijoxgmjuty6zl265upe4brnjwnhhqifiu4na@4npkonnsy7xi3acmk7zsxub73hzw24f3t7zmssy',
]
// 判断github action里面是否有东东萌宠互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
