/*
避免命名冲突(getters,actions,mutations)
*/

//以c开头的命名规则为customer模块
const c_actions = {
	changeActive: "customer/addcustomer/changeActive",
	validateBaseInfo: "customer/addcustomer/validateBaseInfo"
}
const c_getters = {
	addContactIcon: "customer/addcustomer/addContactIcon",
	basicName: "customer/addcustomer/basicName"
}
const c_mutations = {
	addContactIconShow: "customer/addcustomer/addContactIconShow",
	validateBaseInfo: "customer/addcustomer/validateBaseInfo"
}
export const customer = {
	c_actions,
	c_getters,
	c_mutations
}