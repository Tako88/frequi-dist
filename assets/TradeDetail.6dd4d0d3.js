import{d as h,_ as g,r as m,o as s,c as u,a as d,t,j as n,g as i,Z as y,P as T,y as q,q as D,x as I,s as V,b as l,w as o,f as r,S as w,U as B,p as F,e as O}from"./index.9b2928fc.js";import{_ as L}from"./InfoBox.3729939a.js";import{T as N,D as R}from"./TradeProfit.d67a2345.js";const Z=h({name:"ValuePair",components:{InfoBox:L},props:{description:{type:String,required:!0},help:{type:String,default:"",required:!1},classLabel:{type:String,default:"col-4 fw-bold mb-0"},classValue:{type:String,default:"col-8"}}}),j={class:"d-flex"};function M(e,P,k,v,b,S){const a=m("InfoBox");return s(),u("div",j,[d("div",{class:y(["d-flex justify-content-between me-2",e.classLabel])},[d("label",null,t(e.description),1),e.help?(s(),n(a,{key:0,hint:e.help},null,8,["hint"])):i("",!0)],2),d("div",{class:y(e.classValue)},[T(e.$slots,"default")],2)])}var z=g(Z,[["render",M]]);const E=h({name:"TradeDetail",components:{ValuePair:z,TradeProfit:N,DateTimeTZ:R},props:{trade:{required:!0,type:Object},stakeCurrency:{required:!0,type:String}},setup(){return{timestampms:q,formatPercent:D,formatPrice:I,formatPriceCurrency:V}}}),f=e=>(F("data-v-5888b6c1"),e=e(),O(),e),A={class:"container text-start"},G={class:"row"},U={class:"col-lg-5"},H=f(()=>d("h5",{class:"detail-header"},"General",-1)),J=f(()=>d("summary",null,"Details",-1)),K={key:0},Q={class:"mt-2 mt-lg-0 col-lg-7"},W=f(()=>d("h5",{class:"detail-header"},"Stoploss",-1)),X={key:3},Y=f(()=>d("h5",{class:"detail-header"},"Futures/Margin",-1)),x={key:4},ee={class:"ms-1"},te={key:1,title:"remaining"},re={title:"Filled"};function ae(e,P,k,v,b,S){const a=m("ValuePair"),$=m("trade-profit"),C=m("DateTimeTZ");return s(),u("div",A,[d("div",G,[d("div",U,[H,l(a,{description:"TradeId"},{default:o(()=>[r(t(e.trade.trade_id),1)]),_:1}),l(a,{description:"Pair"},{default:o(()=>[r(t(e.trade.pair),1)]),_:1}),l(a,{description:"Open date"},{default:o(()=>[r(t(e.timestampms(e.trade.open_timestamp)),1)]),_:1}),e.trade.enter_tag?(s(),n(a,{key:0,description:"Entry tag"},{default:o(()=>[r(t(e.trade.enter_tag),1)]),_:1})):i("",!0),l(a,{description:"Stake"},{default:o(()=>[r(t(e.formatPriceCurrency(e.trade.stake_amount,e.stakeCurrency))+" "+t(e.trade.leverage&&e.trade.leverage!==1?`(${e.trade.leverage}x)`:""),1)]),_:1}),l(a,{description:"Amount"},{default:o(()=>[r(t(e.trade.amount),1)]),_:1}),l(a,{description:"Open Rate"},{default:o(()=>[r(t(e.formatPrice(e.trade.open_rate)),1)]),_:1}),!e.trade.is_open&&e.trade.close_rate?(s(),n(a,{key:1,description:"Close Rate"},{default:o(()=>[r(t(e.formatPrice(e.trade.close_rate)),1)]),_:1})):i("",!0),e.trade.close_timestamp?(s(),n(a,{key:2,description:"Close date"},{default:o(()=>[r(t(e.timestampms(e.trade.close_timestamp)),1)]),_:1})):i("",!0),e.trade.profit_ratio&&e.trade.profit_abs?(s(),n(a,{key:3,description:`${e.trade.is_open?"Current Profit":"Close Profit"}`},{default:o(()=>[l($,{class:"ms-2",trade:e.trade},null,8,["trade"])]),_:1},8,["description"])):i("",!0),d("details",null,[J,e.trade.min_rate?(s(),n(a,{key:0,description:"Min Rate"},{default:o(()=>[r(t(e.formatPrice(e.trade.min_rate)),1)]),_:1})):i("",!0),e.trade.max_rate?(s(),n(a,{key:1,description:"Max Rate"},{default:o(()=>[r(t(e.formatPrice(e.trade.max_rate)),1)]),_:1})):i("",!0),l(a,{description:"Open-Fees"},{default:o(()=>[r(t(e.trade.fee_open_cost)+" "+t(e.trade.quote_currency)+" ",1),e.trade.quote_currency!==e.trade.fee_open_currency?(s(),u("span",K," (in "+t(e.trade.fee_open_currency)+") ",1)):i("",!0),r(" ("+t(e.formatPercent(e.trade.fee_open))+") ",1)]),_:1}),e.trade.fee_close_cost&&e.trade.fee_close?(s(),n(a,{key:2,description:"Fees close"},{default:o(()=>[r(t(e.trade.fee_close_cost)+" "+t(e.trade.fee_close_currency)+" ("+t(e.formatPercent(e.trade.fee_close))+") ",1)]),_:1})):i("",!0)])]),d("div",Q,[W,l(a,{description:"Stoploss"},{default:o(()=>[r(t(e.formatPercent(e.trade.stop_loss_pct/100))+" | "+t(e.formatPrice(e.trade.stop_loss_abs)),1)]),_:1}),e.trade.initial_stop_loss_pct&&e.trade.initial_stop_loss_abs?(s(),n(a,{key:0,description:"Initial Stoploss"},{default:o(()=>[r(t(e.formatPercent(e.trade.initial_stop_loss_pct/100))+" | "+t(e.formatPrice(e.trade.initial_stop_loss_abs)),1)]),_:1})):i("",!0),e.trade.is_open&&e.trade.stoploss_current_dist_ratio&&e.trade.stoploss_current_dist?(s(),n(a,{key:1,description:"Current stoploss dist"},{default:o(()=>[r(t(e.formatPercent(e.trade.stoploss_current_dist_ratio))+" | "+t(e.formatPrice(e.trade.stoploss_current_dist)),1)]),_:1})):i("",!0),e.trade.stoploss_last_update_timestamp?(s(),n(a,{key:2,description:"Stoploss last updated"},{default:o(()=>[r(t(e.timestampms(e.trade.stoploss_last_update_timestamp)),1)]),_:1})):i("",!0),e.trade.trading_mode!==void 0&&e.trade.trading_mode!=="spot"?(s(),u("div",X,[Y,l(a,{description:"Direction"},{default:o(()=>[r(t(e.trade.is_short?"short":"long")+" - "+t(e.trade.leverage)+"x ",1)]),_:1}),e.trade.funding_fees!==void 0?(s(),n(a,{key:0,description:"Funding fees"},{default:o(()=>[r(t(e.formatPrice(e.trade.funding_fees)),1)]),_:1})):i("",!0),e.trade.interest_rate!==void 0?(s(),n(a,{key:1,description:"Interest rate"},{default:o(()=>[r(t(e.formatPrice(e.trade.interest_rate)),1)]),_:1})):i("",!0),e.trade.liquidation_price!==void 0?(s(),n(a,{key:2,description:"Liquidation Price"},{default:o(()=>[r(t(e.formatPrice(e.trade.liquidation_price)),1)]),_:1})):i("",!0)])):i("",!0),e.trade.orders?(s(),u("details",x,[d("summary",null,"Orders "+t(e.trade.orders.length>1?`[${e.trade.orders.length}]`:""),1),(s(!0),u(w,null,B(e.trade.orders,(p,_)=>{var c;return s(),u("div",{key:_},[d("span",null,[r(" (#"+t(_+1)+") ",1),p.order_timestamp?(s(),n(C,{key:0,date:p.order_timestamp,"show-timezone":""},null,8,["date"])):i("",!0),d("b",ee,t(p.ft_order_side),1),r(" for "),d("b",null,t(e.formatPrice(p.safe_price)),1),r(" | "),p.remaining&&p.remaining!==0?(s(),u("span",te,t(e.formatPrice(p.remaining,8))+" / ",1)):i("",!0),d("span",re,t(e.formatPrice((c=p.filled)!=null?c:0,8)),1)])])}),128))])):i("",!0)])])])}var de=g(E,[["render",ae],["__scopeId","data-v-5888b6c1"]]);export{de as T};
//# sourceMappingURL=TradeDetail.6dd4d0d3.js.map
