(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-640c90c3"],{6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function l(e,t){function a(a){var n=Object.assign({},t.value),l=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),i=l.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),r=i.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",i.appendChild(r)),l.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=l.color,r.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var i={bind:function(e,t){e.addEventListener("click",l(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",l(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},o=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o},"712b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rulesDB,model:e.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"Laser 数据库",prop:"DatabaseName"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{loading:e.listDBLoading,placeholder:"请选择"},on:{"visible-change":e.fetchDatabase,change:function(t){return e.InitInputDatabaseByName(e.temp.DatabaseName)}},model:{value:e.temp.DatabaseName,callback:function(t){e.$set(e.temp,"DatabaseName",t)},expression:"temp.DatabaseName"}},e._l(e.databaseList,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Laser 数据表",prop:"DataTableName"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{loading:e.listDTLoading,placeholder:"请选择"},on:{"visible-change":e.fetchDataTable,change:function(t){return e.InitInputDataTableByName(e.temp.DataTableName)}},model:{value:e.temp.DataTableName,callback:function(t){e.$set(e.temp,"DataTableName",t)},expression:"temp.DataTableName"}},e._l(e.dataTableList,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1)],1)],1),e._v(" "),a("el-form",{ref:"dataFormKey",staticStyle:{width:"420px","margin-left":"50px"},attrs:{rules:e.rulesKey,model:e.inputInfo,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"数据 key 名",prop:"keyName[0]"}},[a("el-input",{attrs:{placeholder:"data key name",type:"text"},model:{value:e.inputInfo.keyName[0],callback:function(t){e.$set(e.inputInfo.keyName,0,t)},expression:"inputInfo.keyName[0]"}})],1)],1),a("br"),a("br"),a("br"),e._v("\n  是否对整集群 check：\n  "),a("el-checkbox",{staticClass:"filter-item",model:{value:e.inputInfo.Checkall,callback:function(t){e.$set(e.inputInfo,"Checkall",t)},expression:"inputInfo.Checkall"}}),a("br"),a("br"),a("br"),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{width:"100px","margin-left":"500px"},attrs:{type:"primary"},on:{click:e.listData}},[e._v("\n    sumbit\n  ")]),a("br"),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.keycheck,attrs:{data:e.IdInfo,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ShardId"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ShardId))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"PartitionId"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.PartitionId))])]}}])})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.keycheck,attrs:{data:e.ValueInfo,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"120",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Role"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Role))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Address"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Ip)+":"+e._s(t.row.Port))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Dc"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Dc))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"check status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"value info"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Value))])]}}])})],1)],1)},l=[],i=a("ad8f"),o=a("c48b"),r=a("b775");function s(e){return Object(r["a"])({url:"/keycheck/list",method:"post",data:e})}var u=a("6724"),c={directives:{waves:u["waves"]},data:function(){return{IdInfo:{PartitionId:[],ShardId:[]},ValueInfo:{Role:[],Ip:[],Port:[],Status:[],Value:[]},ValueNum:void 0,listLoading:!1,inputInfo:{dbName:"",tbName:"",keyName:[],Checkall:!1},fetchDTName:{Page:void 0,Limit:void 0,DatabaseId:void 0},temp:{},listDBLoading:!0,listDTLoading:!0,databaseList:null,dataTableList:null,rulesDB:{DatabaseName:[{required:!0,message:"数据库名称是必填项"}],DataTableName:[{required:!0,message:"数据表名称是必填项"}]},rulesKey:{keyName:[{required:!0,message:"数据 key 名称是必填项"}]}}},methods:{resetTemp:function(){this.temp={DatabaseId:void 0,DataTableId:void 0,DatabaseName:"",DataTableName:""}},fetchDatabase:function(){var e=this;this.listDBLoading=!0,Object(o["c"])().then(function(t){e.databaseList=t.Data.Items,e.listDBLoading=!1,e.temp.DataTableName="",e.inputInfo.keyName[0]=""})},fetchDataTable:function(){var e=this;this.listDTLoading=!0,Object(i["d"])(this.fetchDTName).then(function(t){e.dataTableList=t.Data.Items,e.listDTLoading=!1})},getDatabaseIdByName:function(e){for(var t=0;t<this.databaseList.length;++t)if(e==this.databaseList[t].Name){this.fetchDTName.DatabaseId=this.databaseList[t].Id;break}},InitInputDatabaseByName:function(e){this.inputInfo.dbName=e,this.getDatabaseIdByName(e)},InitInputDataTableByName:function(e){this.inputInfo.tbName=e},listData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&(e.listLoading=!0,s(e.inputInfo).then(function(t){e.IdInfo=t.Data.IdInfo,e.ValueInfo=t.Data.Items,e.listLoading=!1}))})}}},d=c,f=a("2877"),m=Object(f["a"])(d,n,l,!1,null,null,null);t["default"]=m.exports},"8d41":function(e,t,a){},ad8f:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"e",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"g",function(){return r}),a.d(t,"b",function(){return s}),a.d(t,"f",function(){return u}),a.d(t,"c",function(){return c});var n=a("b775");function l(e){return Object(n["a"])({url:"/table/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/table/list_detail",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/table/store",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/table/update",method:"post",data:e})}function s(e){return Object(n["a"])({url:"/table/delete",method:"post",data:e})}function u(){return Object(n["a"])({url:"table/synchronize",method:"post"})}function c(){return Object(n["a"])({url:"/table/list_commands",method:"get"})}},c48b:function(e,t,a){"use strict";a.d(t,"c",function(){return l}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return r});var n=a("b775");function l(e){return Object(n["a"])({url:"/database/list",method:"get",params:e})}function i(e){return Object(n["a"])({url:"/database/store",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/database/update",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/database/delete",method:"post",data:e})}}}]);