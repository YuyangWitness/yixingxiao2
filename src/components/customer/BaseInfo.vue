<template>
	<div id="baseinfo">
		<form class="mui-input-group form1" id="BasicForm">
			<div class="mui-input-row">
				<label>客户名称</label>
				<input type="text" id="customerName" name="customerName" required maxlength="30">
			</div>
			<div class="mui-input-row" id="customerRoad">
				<label>				
				 <a class="mui-navigate-right">客户渠道</a>
				</label>

			</div>
			<div class="mui-input-row" id="industryCategory">
				<label><a class="mui-navigate-right">行业类别</a></label>
			</div>
			<div class="mui-input-row" id="companyNature">
				<label><a class="mui-navigate-right">企业性质</a></label>
			</div>
			<div class="mui-input-row">
				<label class="label1">年销售额</label>
				<input class="input1" type="number" id="Revenue" name="Revenue" maxlength="20" number="true">
				<label class="label2">万元</label>
			</div>
			<div class="mui-input-row">
				<label class="label1">工资总额</label>
				<input class="input1" type="number" id="Total" name="Total" maxlength="20" number="true">
				<label class="label2">万元</label>
			</div>
			<div class="mui-input-row">
				<label class="label1">企业人数</label>
				<input class="input1" type="number" id="NumberPeople" name="NumberPeople" maxlength="20" number="true">
				<label class="label2">人</label>
			</div>
			<div class="address">
				<label>公司地址</label>
				<div class="addressDiv">
					<div class="mui-input-row">
						<input style="text-align: left;" type="text" placeholder="请选择省市" id="Address" name="Address">
					</div>
					<div class="mui-input-row">
						<input style="text-align: left;" type="text" placeholder="请输入地址" id="deatilAddress" name="deatilAddress" maxlength="3">
					</div>
				</div>
			</div>
			<div class="mui-input-row">
				<label style="width: 40%;">企业福利计划</label>
				<div class="mui-switch" id="myswitch">
					<div class="mui-switch-handle"></div>
				</div>
			</div>
			<div class="mui-input-row" id="Plan" style="display: none;">
				<label style="width: 100%;"><a style="color: #1E90FF;" class="mui-icon mui-icon-plus"></a>福利计划</label>
			</div>

			<div class="mui-input-row" id="proxyAddress">
				<label><a class="mui-navigate-right">代理网点</a></label>
			</div>
			<input type="submit" id="tijiao" style="display: none;" />
		</form>
	</div>
</template>

<style type="text/css">
#baseinfo{
	margin-top: 34px;
}
</style>