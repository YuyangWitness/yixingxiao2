/*
避免命名冲突(getters,actions,mutations)
*/

//以c开头的命名规则为customer模块
const c_actions = {
	changeActive: "customer/addcustomer/changeActive"
}
const c_getters = {
	addContactIcon: "customer/addcustomer/addContactIcon"
}
const c_mutations = {
	changeActive: "customer/addcustomer/changeActive"
}
export const customer = {
	c_actions,
	c_getters,
	c_mutations
}