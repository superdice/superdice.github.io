(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3st9":function(t,s,e){t.exports=e.p+"static/img/eos.3ffc3f0.png"},Xz0S:function(t,s,e){"use strict";var a=e("mEI4");e.n(a).a},eBTj:function(t,s,e){"use strict";e.r(s);var a,o=e("07fN"),n=e.n(o),i=e("Aeqt"),l=((a={data:function(){return{isShowRule:!1,stakeAmount:0,withdrawAmount:0,totalAmount:"0 SAND",payoutEosPool:"0 EOS",payoutSandPool:"0 SAND",payoutEbtcPool:"0 EBTC",payoutEethPool:"0 EETH",payoutEusdPool:"0 EUSD",eosTenThousand:"0",sandTenThousand:"0",ebtcTenThousand:"0",eethTenThousand:"0",eusdTenThousand:"0",eosEstimate:"0",sandEstimate:"0",ebtcEstimate:"0",eethEstimate:"0",eusdEstimate:"0",eosAssets:"0 EOS",sandAssets:"0 SAND",ebtcAssets:"0 EBTC",eethAssets:"0 EETH",eusdAssets:"0 EUSD",tokenAmount:"0",withdrawTokenAmount:"0 SAND",withdrawState:"0",stakeLoading:null,supplyObj:null,timeTarget:null,countdownTime:null,countdownTimer:null,freezeEOSObj:null,freezeSandObj:null,freezeEbtcObj:null,freezeEethObj:null,freezeEusdObj:null,tokenAmountTimer:null,withdrawTimer:null,claimTimer:null,whichTab:"pool"}},mounted:function(){var t=this;this.request();var s=(new Date).toString().replace(/^\D*/,"").split(":"),e=60-parseFloat(s[1]),a=60-s[2].substring(2,0);this.countdownTime=parseInt(60*e)+parseInt(a),this.countdownTimer=setInterval(function(){t.countdownTime--},1e3);var o=this;document.addEventListener("visibilitychange",function(){if(document.hidden)clearInterval(o.countdownTimer);else{var t=(new Date).toString().replace(/^\D*/,"").split(":"),s=60-parseFloat(t[1]),e=60-t[2].substring(2,0);o.countdownTime=parseInt(60*s)+parseInt(e),o.countdownTimer=setInterval(function(){o.countdownTime--},1e3)}})},destroyed:function(){clearInterval(this.countdownTimer)},methods:{ruleClick:function(){this.isShowRule=!this.isShowRule},selectTab:function(t){this.whichTab=t},maxSupply:function(){return this.supplyObj.max_supply.replace(" SAND","")/2+" SAND"},deleteCoinName:function(t,s){var e=t.split(" ");return parseFloat(e[0])},claimClick:function(){var t=this;(parseFloat(this.eosAssets.replace(" EOS"))>0||parseFloat(this.sandAssets.replace(" SAND"))>0)&&this.scatter.eos(this.network,n.a,{}).transaction({actions:[{account:i.a.betsandFunds,name:"withdrawall",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{owner:this.account.name}}]}).then(function(){t.claimTimer=setInterval(function(){t.getUserAssets()},1e3),t.request(),t.$message({showClose:!0,message:t.$t("payout.claim_success"),type:"success",duration:1500})}).catch(function(s){t.$notify.error(s.message||JSON.parse(s).error.details[0].message)})},getSandTotal:function(){var t=this;n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10}).getTableRows({json:!0,code:i.a.betsandToken,table:"totalstakes",scope:"SAND"}).then(function(s){s.rows.length&&s.rows[0]&&s.rows[0].balance&&(t.totalAmount=s.rows[0].balance)}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getSandTotal()})},getFreeze:function(){var t=this,s=n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10});Promise.all([s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playerdivds",scope:"EOS",limit:1e3}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playerdivds",scope:"SAND",limit:1e3}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playerdivds",scope:"EBTC",limit:1e3}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playerdivds",scope:"EETH",limit:1e3}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playerdivds",scope:"EUSD",limit:1e3})]).then(function(s){var e=s[0],a=s[1],o=s[2],n=s[3],i=s[4];if(e.rows.length)for(var l=0;l<e.rows.length;l++)e.rows[l].player==t.account.name&&(t.freezeEOSObj=e.rows[l]);if(a.rows.length)for(var r=0;r<a.rows.length;r++)a.rows[r].player==t.account.name&&(t.freezeSandObj=a.rows[r]);if(o.rows.length)for(var c=0;c<o.rows.length;c++)o.rows[c].player==t.account.name&&(t.freezeEbtcObj=o.rows[c]);if(n.rows.length)for(var u=0;u<n.rows.length;u++)n.rows[u].player==t.account.name&&(t.freezeEethObj=n.rows[u]);if(i.rows.length)for(var d=0;d<i.rows.length;d++)i.rows[d].player==t.account.name&&(t.freezeEusdObj=i.rows[d])}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getFreeze()})},getPayoutPool:function(){var t=this,s=n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10});Promise.all([s.getTableRows({json:!0,code:i.a.betsandFunds,table:"bonusacts",scope:"EOS"}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"bonusacts",scope:"SAND"}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"bonusacts",scope:"EBTC"}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"bonusacts",scope:"EETH"}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"bonusacts",scope:"EUSD"})]).then(function(s){for(var e=s[0],a=s[1],o=s[2],n=s[3],i=s[4],l=0;l<e.rows.length;l++)1==e.rows[l].is_dividend&&(t.payoutEosPool=e.rows[l].balance);for(var r=0;r<a.rows.length;r++)1==a.rows[r].is_dividend&&(t.payoutSandPool=a.rows[r].balance);for(var c=0;c<o.rows.length;c++)1==o.rows[c].is_dividend&&(t.payoutEbtcPool=o.rows[c].balance);for(var u=0;u<n.rows.length;u++)1==n.rows[u].is_dividend&&(t.payoutEethPool=n.rows[u].balance);for(var d=0;d<i.rows.length;d++)1==i.rows[d].is_dividend&&(t.payoutEusdPool=i.rows[d].balance)}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getPayoutPool()})},getUserAssets:function(){var t=this;if(this.account.name){var s=n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10});Promise.all([s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playeraccts",scope:"EOS",lower_bound:this.account.name,limit:1}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playeraccts",scope:"SAND",lower_bound:this.account.name,limit:1}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playeraccts",scope:"EBTC",lower_bound:this.account.name,limit:1}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playeraccts",scope:"EETH",lower_bound:this.account.name,limit:1}),s.getTableRows({json:!0,code:i.a.betsandFunds,table:"playeraccts",scope:"EUSD",lower_bound:this.account.name,limit:1})]).then(function(s){for(var e=s[0],a=s[1],o=s[2],n=s[3],i=s[4],l=0;l<e.rows.length;l++)e.rows[l].player==t.account.name&&(t.eosAssets=e.rows[l].bonus);for(var r=0;r<a.rows.length;r++)a.rows[r].player==t.account.name&&(t.sandAssets=a.rows[r].bonus);for(var c=0;c<o.rows.length;c++)o.rows[c].player==t.account.name&&(t.ebtcAssets=o.rows[c].bonus);for(var u=0;u<n.rows.length;u++)n.rows[u].player==t.account.name&&(t.eethAssets=n.rows[u].bonus);for(var d=0;d<i.rows.length;d++)i.rows[d].player==t.account.name&&(t.eusdAssets=i.rows[d].bonus)}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getUserAssets()})}},getTokenAmount:function(){var t=this;this.account.name&&n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10}).getTableRows({json:!0,code:i.a.betsandToken,table:"accounts",scope:this.account.name}).then(function(s){if(s.rows.length&&s.rows[0]&&s.rows[0].balance)for(var e=0;e<s.rows.length;e++){var a=s.rows[e].balance;"SAND"==a.split(" ")[1]&&(t.tokenAmount=a)}}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getTokenAmount()})},getWithdrawTokenAmount:function(){var t=this;this.account.name&&n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10}).getTableRows({json:!0,code:i.a.betsandToken,table:"stakes",scope:this.account.name}).then(function(s){s.rows.length&&(t.withdrawTokenAmount=s.rows[0].balance)}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getWithdrawTokenAmount()})},getState:function(){var t=this;this.account.name&&n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10}).getTableRows({json:!0,code:i.a.betsandToken,table:"intransits",scope:"SAND",limit:1e3}).then(function(s){if(s.rows.length){for(var e=0,a=0;a<s.rows.length;a++)s.rows[a].owner==t.account.name&&(1==s.rows[a].type||2==s.rows[a].type&&(e+=parseFloat(s.rows[a].quantity.replace(" SAND",""))));t.withdrawState=e}}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getState()})},stakeClick:function(){var t=this;this.stakeAmount>0&&this.stakeAmount<this.tokenAmount&&this.account.name&&this.scatter.eos(this.network,n.a,{}).transaction({actions:[{account:i.a.betsandToken,name:"stake",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{owner:this.account.name,type:1,quantity:Number(this.stakeAmount).toFixed(4)+" SAND",memo:""}}]}).then(function(){t.stakeAmount=0,t.tokenAmountTimer=setInterval(function(){t.getTokenAmount(),t.getWithdrawTokenAmount()},1e3),t.request(),t.$message({showClose:!0,message:t.$t("payout.stake_success"),type:"success",duration:1500})}).catch(function(s){t.$notify.error(s.message||JSON.parse(s).error.details[0].message)})},withdrawClick:function(){var t=this;this.withdrawAmount>0&&this.withdrawAmount<this.withdrawTokenAmount&&this.account.name&&this.scatter.eos(this.network,n.a,{}).transaction({actions:[{account:i.a.betsandToken,name:"stake",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{owner:this.account.name,type:2,quantity:Number(this.withdrawAmount).toFixed(4)+" SAND",memo:""}}]}).then(function(){t.withdrawTimer=setInterval(function(){t.getWithdrawTokenAmount()},1e3),t.request(),t.$message({showClose:!0,message:t.$t("payout.withdraw_success"),type:"success",duration:1500})}).catch(function(s){t.$notify.error(s.message||JSON.parse(s).error.details[0].message)})},getSupply:function(){var t=this;n()({httpEndpoint:this.network.protocol+"://"+this.network.host+":"+this.network.port,chainId:this.network.chainId,expireInSeconds:10}).getTableRows({json:!0,code:i.a.betsandToken,table:"stat",scope:"SAND"}).then(function(s){s.rows.length&&s.rows[0]&&(t.supplyObj=s.rows[0])}).catch(function(s){"all-break"==t.$changeNode(t)?t.$message({showClose:!0,message:t.$t("common.serve_err"),type:"warning",duration:1500}):t.getSupply()})},request:function(){this.getSandTotal(),this.getSupply(),this.getPayoutPool(),this.getUserAssets(),this.getTokenAmount(),this.getWithdrawTokenAmount(),this.getState(),this.getFreeze()},updateParams:function(){this.totalAmount&&this.payoutSandPool&&(this.sandTenThousand=this.$multiply(this.$divide(this.payoutSandPool.replace(" SAND",""),this.totalAmount.replace(" SAND","")),1e4)),this.totalAmount&&this.payoutEosPool&&(this.eosTenThousand=this.$multiply(this.$divide(this.payoutEosPool.replace(" EOS",""),this.totalAmount.replace(" SAND","")),1e4)),this.totalAmount&&this.payoutEbtcPool&&(this.ebtcTenThousand=this.$multiply(this.$divide(this.payoutEbtcPool.replace(" EBTC",""),this.totalAmount.replace(" SAND","")),1e4)),this.totalAmount&&this.payoutEethPool&&(this.eethTenThousand=this.$multiply(this.$divide(this.payoutEethPool.replace(" EETH",""),this.totalAmount.replace(" SAND","")),1e4)),this.totalAmount&&this.payoutEusdPool&&(this.eusdTenThousand=this.$multiply(this.$divide(this.payoutEusdPool.replace(" EUSD",""),this.totalAmount.replace(" SAND","")),1e4)),this.totalAmount&&this.payoutEosPool&&this.withdrawTokenAmount&&parseFloat(this.totalAmount.replace(" SAND",""))>0&&(this.eosEstimate=this.$multiply(this.payoutEosPool.replace(" EOS",""),this.$divide(this.withdrawTokenAmount.replace(" SAND",""),this.totalAmount.replace(" SAND","")))),this.totalAmount&&this.payoutSandPool&&this.withdrawTokenAmount&&parseFloat(this.totalAmount.replace(" SAND",""))>0&&(this.sandEstimate=this.$multiply(this.payoutSandPool.replace(" SAND",""),this.$divide(this.withdrawTokenAmount.replace(" SAND",""),this.totalAmount.replace(" SAND","")))),this.totalAmount&&this.payoutEbtcPool&&this.withdrawTokenAmount&&parseFloat(this.totalAmount.replace(" SAND",""))>0&&(this.ebtcEstimate=this.$multiply(this.payoutEbtcPool.replace(" EBTC",""),this.$divide(this.withdrawTokenAmount.replace(" SAND",""),this.totalAmount.replace(" SAND","")))),this.totalAmount&&this.payoutEethPool&&this.withdrawTokenAmount&&parseFloat(this.totalAmount.replace(" SAND",""))>0&&(this.eethEstimate=this.$multiply(this.payoutEethPool.replace(" EETH",""),this.$divide(this.withdrawTokenAmount.replace(" SAND",""),this.totalAmount.replace(" SAND","")))),this.totalAmount&&this.payoutEusdPool&&this.withdrawTokenAmount&&parseFloat(this.totalAmount.replace(" SAND",""))>0&&(this.eusdEstimate=this.$multiply(this.payoutEusdPool.replace(" EUSD",""),this.$divide(this.withdrawTokenAmount.replace(" SAND",""),this.totalAmount.replace(" SAND",""))))}},computed:{network:function(){return this.$store.state.network},scatter:function(){return this.$store.state.scatter},account:function(){return this.$store.state.account},circulating:function(){return this.supplyObj&&this.supplyObj.supply&&this.supplyObj.supply.replace(" SAND","")>0&&this.totalAmount&&this.totalAmount.replace(" SAND","")>0?parseFloat(100*this.$divide(this.totalAmount.replace(" SAND",""),this.supplyObj.supply.replace(" SAND",""))).toFixed(2):0},progress:function(){return this.supplyObj&&this.supplyObj.supply&&this.supplyObj.supply.replace(" SAND","")>0?parseFloat(100*this.$divide(this.supplyObj.supply.replace(" SAND",""),this.supplyObj.max_supply.replace(" SAND","")/2)).toFixed(2):0},t_pool_payout:function(){return this.$t("payout.pool_payout")},countdownPayout:function(){return this.$t("payout.payout_next")},t_total_staked:function(){return this.$t("payout.total_staked")},t_payout_pool:function(){return this.$t("payout.payout_pool")},t_payout_estimated:function(){return this.$t("payout.payout_estimated")},t_paout_10_k:function(){return this.$t("payout.paout_10_k")},t_my_balance:function(){return this.$t("payout.my_balance")},t_claim:function(){return this.$t("payout.claim")},t_stake_sand:function(){return this.$t("payout.stake_sand")},t_available:function(){return this.$t("payout.available")},t_unstake_amount:function(){return this.$t("payout.unstake_amount")},t_stake:function(){return this.$t("payout.stake")},t_available_unstake:function(){return this.$t("payout.available_unstake")},t_stake_title:function(){return this.$t("payout.stake_title")},t_stake_amount:function(){return this.$t("payout.stake_amount")},t_stake_state:function(){return this.$t("payout.stake_state")},t_staking:function(){return this.$t("payout.staking")},t_unstake:function(){return this.$t("payout.unstake")},t_unstake_state:function(){return this.$t("payout.unstake_state")},t_unstaking:function(){return this.$t("payout.unstaking")},t_unstake_title:function(){return this.$t("payout.unstake_title")},t_payouting:function(){return this.$t("payout.payouting")},t_payout_next:function(){return this.$t("payout.payout_next")},language:function(){return this.$store.state.language},t_freeze_prompt:function(){return this.$t("payout.freeze_prompt")},t_payout_number:function(){return this.$t("payout.payout_number")}},watch:{account:function(){this.request()},payoutEosPool:function(){this.updateParams()},payoutSandPool:function(){this.updateParams()},payoutEbtcPool:function(){this.updateParams()},payoutEethPool:function(){this.updateParams()},payoutEusdPool:function(){this.updateParams()},totalAmount:function(){this.updateParams()},withdrawTokenAmount:function(t,s){this.updateParams(),clearInterval(this.withdrawTimer)},eosAssets:function(){clearInterval(this.claimTimer)},sandAssets:function(){clearInterval(this.claimTimer)},ebtcAssets:function(){clearInterval(this.claimTimer)},eethAssets:function(){clearInterval(this.claimTimer)},eusdAssets:function(){clearInterval(this.claimTimer)},tokenAmount:function(){clearInterval(this.tokenAmountTimer)}}}).destroyed=function(){clearInterval(this.claimTimer),clearInterval(this.assetsTimer),clearInterval(this.withdrawTimer)},a),r=(e("Xz0S"),e("KHd+")),c=Object(r.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"payout"},[a("header",{staticClass:"orders-tab"},[a("ul",[a("li",{class:"pool"==t.whichTab?"is-select":"",on:{click:function(s){t.selectTab("pool")}}},[t._v(t._s(t.t_payout_pool))]),t._v(" "),a("li",{class:"stake"==t.whichTab?"is-select":"",on:{click:function(s){t.selectTab("stake")}}},[t._v(t._s(t.t_stake))]),t._v(" "),a("li",{class:"balance"==t.whichTab?"is-select":"",on:{click:function(s){t.selectTab("balance")}}},[t._v(t._s(t.t_my_balance))])])]),t._v(" "),"pool"==t.whichTab?a("div",{staticClass:"margin-class"},[a("div",{staticClass:"pool"},[a("p",[t._v(t._s(t.t_pool_payout)+"\n        "),a("i",{staticClass:"rule-svg",on:{click:t.ruleClick}},[a("svg",{attrs:{viewBox:"64 64 896 896",fill:"currentColor",width:"12px",height:"12px","data-icon":"question-circle","aria-hidden":"true"}},[a("path",{attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}})])])]),t._v(" "),a("div",{staticClass:"eos-pool"},[a("div",{staticClass:"eos-title"},[a("img",{attrs:{src:e("3st9")}}),t._v(" "),a("span",[t._v(t._s(t._f("parseFloatAmount")(t.payoutEosPool)))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v(t._s(t.t_payout_estimated))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eosEstimate))+" "),a("span",[t._v("EOS")])])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v(t._s(t.t_paout_10_k))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eosTenThousand))+" "),a("span",[t._v("EOS")])])])]),t._v(" "),a("div",{staticClass:"sand-pool"},[a("div",{staticClass:"sand-title"},[a("img",{attrs:{src:e("fjOf")}}),t._v(" "),a("span",[t._v(t._s(t._f("parseFloatAmount")(t.payoutSandPool)))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v(t._s(t.t_payout_estimated))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.sandEstimate))+" "),a("span",[t._v("SAND")])])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v(t._s(t.t_paout_10_k))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.sandTenThousand))+" "),a("span",[t._v("SAND")])])])]),t._v(" "),a("div",{staticClass:"sand-pool"},[a("div",{staticClass:"sand-title"},[a("img",{attrs:{src:e("OS0W")}}),t._v(" "),a("span",[t._v(t._s(t._f("parseFloatAmount")(t.payoutEbtcPool)))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v(t._s(t.t_payout_estimated))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.ebtcEstimate))+" "),a("span",[t._v("EBTC")])])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v(t._s(t.t_paout_10_k))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.ebtcTenThousand))+" "),a("span",[t._v("EBTC")])])])]),t._v(" "),a("div",{staticClass:"sand-pool"},[a("div",{staticClass:"sand-title"},[a("img",{attrs:{src:e("X6g9")}}),t._v(" "),a("span",[t._v(t._s(t._f("parseFloatAmount")(t.payoutEethPool)))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v(t._s(t.t_payout_estimated))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eethEstimate))+" "),a("span",[t._v("EETH")])])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v(t._s(t.t_paout_10_k))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eethTenThousand))+" "),a("span",[t._v("EETH")])])])]),t._v(" "),a("div",{staticClass:"sand-pool"},[a("div",{staticClass:"sand-title"},[a("img",{attrs:{src:e("glNw")}}),t._v(" "),a("span",[t._v(t._s(t._f("parseFloatAmount")(t.payoutEusdPool)))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v(t._s(t.t_payout_estimated))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eusdEstimate))+" "),a("span",[t._v("EUSD")])])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v(t._s(t.t_paout_10_k))]),t._v(" "),a("p",[t._v(t._s(t._f("toFixed4")(t.eusdTenThousand))+" "),a("span",[t._v("EUSD")])])])])])]):t._e(),t._v(" "),"stake"==t.whichTab?a("div",{staticClass:"margin-class"},[a("div",{staticClass:"total-staked"},[a("div",{staticClass:"total-title"},[a("p",[t._v(t._s(t.t_total_staked))]),t._v(" "),a("p",[t._v(t._s(t.countdownPayout)),a("span",{staticClass:"countdown"},[t._v(t._s(t._f("countdownHour")(t.countdownTime)))])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[a("img",{staticClass:"total-img",attrs:{src:e("fjOf")}}),t._v(" "),a("p",{staticClass:"total-sand"},[t._v(t._s(t.totalAmount))]),t._v(" "),t.supplyObj&&t.supplyObj.supply?a("p",{staticClass:"total-desc"},[t._v("("+t._s(t.circulating)+"% of circulating "+t._s(t.supplyObj.supply)+")")]):a("p",{staticClass:"total-desc"},[t._v("(0% of circulating 0 SAND)")]),t._v(" "),t.supplyObj&&t.supplyObj.supply?a("p",{staticClass:"total-desc"},[t._v("("+t._s(t.progress)+"% of mining "+t._s(t.maxSupply())+")")]):t._e()])])]),t._v(" "),a("div",{staticClass:"stake-sand"},[a("p",{staticClass:"stake-sand-title"},[t._v(t._s(t.t_stake_sand))]),t._v(" "),a("div",{staticClass:"stake-sand-content"},[a("div",{staticClass:"stake-title"},[t.tokenAmount?a("p",[t._v(t._s(t.t_available)+" "),a("span",[t._v(t._s(t._f("deleteToken")(t.tokenAmount)))]),t._v(" SAND")]):a("p",[t._v(t._s(t.t_available)+" "),a("span",[t._v("0")]),t._v(" SAND")])]),t._v(" "),a("div",{staticClass:"stake-sand-div"},[a("img",{attrs:{src:e("fjOf")}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeAmount,expression:"stakeAmount"}],staticClass:"stake-input",attrs:{type:"text"},domProps:{value:t.stakeAmount},on:{input:function(s){s.target.composing||(t.stakeAmount=s.target.value)}}}),t._v(" "),a("el-button",{staticClass:"operation-button",attrs:{loading:!1},on:{click:t.stakeClick}},[t._v("\n            "+t._s(t.t_stake)+"\n          ")])],1)])]),t._v(" "),a("div",{staticClass:"unstake-sand"},[a("p",{staticClass:"unstake-sand-title"},[t._v(t._s(t.t_available_unstake))]),t._v(" "),a("div",{staticClass:"unstake-sand-content"},[a("div",{staticClass:"unstake-title"},[t.withdrawTokenAmount?a("p",[t._v(t._s(t.t_available_unstake)+" "),a("span",[t._v(t._s(t._f("deleteToken")(t.withdrawTokenAmount)))]),t._v(" SAND")]):a("p",[t._v(t._s(t.t_available_unstake)+" "),a("span",[t._v("0")]),t._v(" SAND")])]),t._v(" "),a("div",{staticClass:"unstake-sand-div"},[a("img",{attrs:{src:e("fjOf")}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.withdrawAmount,expression:"withdrawAmount"}],staticClass:"stake-input",attrs:{type:"text",placeholder:""},domProps:{value:t.withdrawAmount},on:{input:function(s){s.target.composing||(t.withdrawAmount=s.target.value)}}}),t._v(" "),a("el-button",{staticClass:"operation-button",attrs:{loading:!1},on:{click:t.withdrawClick}},[t._v("\n            "+t._s(t.t_unstake)+"\n          ")])],1)])]),t._v(" "),a("div",{staticClass:"unstaked-state-div"},[a("div",{staticClass:"state-title"},[a("p",[t._v(t._s(t.t_unstake_title))])]),t._v(" "),a("div",{staticClass:"state-div"},[a("div",{staticClass:"unstaked-amount"},[a("p",[t._v(t._s(t.t_unstake_amount))]),t._v(" "),t.withdrawState?a("p",[t._v(t._s(t.withdrawState))]):a("p",[t._v("0")])]),t._v(" "),a("div",{staticClass:"unstaked-state"},[a("p",[t._v(t._s(t.t_unstake_state))]),t._v(" "),t.withdrawState?a("p",[t._v(t._s(t.t_unstaking))]):a("p",[t._v("-")])])])])]):t._e(),t._v(" "),"balance"==t.whichTab?a("div",{staticClass:"margin-class"},[a("div",{staticClass:"sand-pool"},[a("div",{staticClass:"sand-title"},[a("span",[t._v(t._s(t.t_freeze_prompt))])]),t._v(" "),a("div",{staticClass:"calculate"},[a("p",[t._v("EOS "+t._s(t.t_payout_number))]),t._v(" "),t.freezeEOSObj&&t.freezeEOSObj.dividends?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.freezeEOSObj.dividends)))+" "),a("span",[t._v("EOS")])]):a("p",[t._v("0 EOS")])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v("SAND "+t._s(t.t_payout_number))]),t._v(" "),t.freezeSandObj&&t.freezeSandObj.dividends?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.freezeSandObj.dividends)))+" "),a("span",[t._v("SAND")])]):a("p",[t._v("0 SAND")])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v("EBTC "+t._s(t.t_payout_number))]),t._v(" "),t.freezeEbtcObj&&t.freezeEbtcObj.dividends?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.freezeEbtcObj.dividends)))+" "),a("span",[t._v("EBTC")])]):a("p",[t._v("0 EBTC")])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v("EETH "+t._s(t.t_payout_number))]),t._v(" "),t.freezeEethObj&&t.freezeEethObj.dividends?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.freezeEethObj.dividends)))+" "),a("span",[t._v("EETH")])]):a("p",[t._v("0 EETH")])]),t._v(" "),a("div",{staticClass:"calculate-unit"},[a("p",[t._v("EUSD "+t._s(t.t_payout_number))]),t._v(" "),t.freezeEusdObj&&t.freezeEusdObj.dividends?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.freezeEusdObj.dividends)))+" "),a("span",[t._v("EUSD")])]):a("p",[t._v("0 EUSD")])])]),t._v(" "),a("div",{staticClass:"dividend"},[a("div",{staticClass:"dividend-title"},[a("p",[t._v(t._s(t.t_my_balance))])]),t._v(" "),a("div",{staticClass:"balance"},[a("div",{staticClass:"balance-content"},[a("div",{staticClass:"eos-balance"},[a("div",{staticClass:"balance-div"},[a("img",{attrs:{src:e("3st9")}}),t._v(" "),t.deleteCoinName(t.eosAssets)>0?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteEos")(t.eosAssets)))+" "),a("span",[t._v("EOS")])]):a("p",[t._v("0 "),a("span",[t._v("EOS")])])])]),t._v(" "),a("div",{staticClass:"sand-balance"},[a("div",{staticClass:"balance-div"},[a("img",{attrs:{src:e("fjOf")}}),t._v(" "),t.deleteCoinName(t.sandAssets)>0?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.sandAssets)))+" "),a("span",[t._v("SAND")])]):a("p",[t._v("0 "),a("span",[t._v("SAND")])])])]),t._v(" "),a("div",{staticClass:"sand-balance"},[a("div",{staticClass:"balance-div"},[a("img",{attrs:{src:e("OS0W")}}),t._v(" "),t.deleteCoinName(t.ebtcAssets)>0?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.ebtcAssets)))+" "),a("span",[t._v("EBTC")])]):a("p",[t._v("0 "),a("span",[t._v("EBTC")])])])]),t._v(" "),a("div",{staticClass:"sand-balance"},[a("div",{staticClass:"balance-div"},[a("img",{attrs:{src:e("X6g9")}}),t._v(" "),t.deleteCoinName(t.eethAssets)>0?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.eethAssets)))+" "),a("span",[t._v("EETH")])]):a("p",[t._v("0 "),a("span",[t._v("EETH")])])])]),t._v(" "),a("div",{staticClass:"sand-balance"},[a("div",{staticClass:"balance-div"},[a("img",{attrs:{src:e("glNw")}}),t._v(" "),t.deleteCoinName(t.eusdAssets)>0?a("p",[t._v(t._s(t._f("toFixed4")(t._f("deleteToken")(t.eusdAssets)))+" "),a("span",[t._v("EUSD")])]):a("p",[t._v("0 "),a("span",[t._v("EUSD")])])])])]),t._v(" "),a("el-button",{staticClass:"claim-button",attrs:{loading:!1},on:{click:function(s){t.claimClick()}}},[t._v("\n          "+t._s(t.t_claim)+"\n        ")])],1)])]):t._e(),t._v(" "),a("el-dialog",{attrs:{visible:t.isShowRule,width:"80%",top:"30vh"},on:{"update:visible":function(s){t.isShowRule=s}}},["cn"==t.language?a("p",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[t._v("BetSand分紅池說明")]):a("p",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[t._v("\n      BetSand Payout Pool Rules\n    ")]),t._v(" "),"cn"==t.language?a("div",{staticClass:"rule-div"},[a("ul",[a("li",[t._v("1、分紅池金額為BetSand 利潤的50%；")]),t._v(" "),a("li",[t._v("2、分紅機製為按小時分紅，當期抵押當期分紅；")]),t._v(" "),a("li",[t._v("3、如遇虧損，單款遊戲的後期分紅將優先用於補足虧損，再進行分紅。其他無虧損遊戲不受影響。")])])]):a("div",{staticClass:"rule-div"},[a("ul",[a("li",[t._v("1、We give out 50% of our profits to the payout pool.")]),t._v(" "),a("li",[t._v("2、The dividends are paid out per hour .The dividends start paying from exactly the hour u pledge.")]),t._v(" "),a("li",[t._v("3、If the profits of one game is negative in a payout round, then the next payout will be used to cover the former losses first. But there is no effect on the other games.")])])])])],1)},[],!1,null,"774cc5a2",null);c.options.__file="payout.vue";s.default=c.exports},mEI4:function(t,s){}}]);
//# sourceMappingURL=9.e6f36481ff61004e2aa7.js.map