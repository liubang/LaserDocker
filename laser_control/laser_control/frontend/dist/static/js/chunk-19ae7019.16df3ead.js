(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ae7019"],{6724:function(e,t,a){"use strict";a("8d41");var n="@@wavesContext";function i(e,t){function a(a){var n=Object.assign({},t.value),i=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),r=s.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(l.width,l.height)+"px",s.appendChild(r)),i.type){case"center":r.style.top=l.height/2-r.offsetHeight/2+"px",r.style.left=l.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-l.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-l.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=i.color,r.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=a:e[n]={removeHandle:a},a}var s={bind:function(e,t){e.addEventListener("click",i(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",i(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},l=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l},"7ea2":function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"d",function(){return l}),a.d(t,"c",function(){return r});var n=a("b775");function i(e){return Object(n["a"])({url:"/cluster/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/cluster/store",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/cluster/update",method:"post",data:e})}function r(){return Object(n["a"])({url:"/cluster/synchronize",method:"post"})}},"8d41":function(e,t,a){},de15:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return l});var n=a("b775");function i(e){return Object(n["a"])({url:"/dc/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/dc/store",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/dc/update",method:"post",data:e})}},e8b3:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")]),e._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(t){e.tableKey=e.tableKey+1}},model:{value:e.showDesc,callback:function(t){e.showDesc=t},expression:"showDesc"}},[e._v("\n      描述\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,attrs:{data:e.dcList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"集群"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ClusterName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数据中心名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"分片总数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ShardNumber))])]}}])}),e._v(" "),e.showDesc?a("el-table-column",{attrs:{label:"描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.Desc))])]}}],null,!1,2723231799)}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v("\n          修改\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-class"},[a("el-pagination",{attrs:{background:!0,"current-page":e.queryParams.Page,"page-size":e.queryParams.Limit,layout:"total, prev, pager, next, jumper",total:e.listTotal},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"所属集群",prop:"ClusterName"}},[a("el-select",{staticClass:"el-select",attrs:{loading:e.listClusterLoading,placeholder:"请选择",disabled:"update"==e.dialogStatus},on:{"visible-change":e.fetchClusterData,change:function(t){return e.getClusterIdByName(e.temp.ClusterName)}},model:{value:e.temp.ClusterName,callback:function(t){e.$set(e.temp,"ClusterName",t)},expression:"temp.ClusterName"}},e._l(e.clusterList,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"数据中心名",prop:"Name"}},[a("el-input",{attrs:{disabled:"update"==e.dialogStatus},model:{value:e.temp.Name,callback:function(t){e.$set(e.temp,"Name",t)},expression:"temp.Name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"分片总数",prop:"ShardNumber"}},[a("el-input",{attrs:{type:"number",min:"1",oninput:"value=value.replace(/[^\\d]/g,'')",disabled:"update"==e.dialogStatus},model:{value:e.temp.ShardNumber,callback:function(t){e.$set(e.temp,"ShardNumber",e._n(t))},expression:"temp.ShardNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"Desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.temp.Desc,callback:function(t){e.$set(e.temp,"Desc",t)},expression:"temp.Desc"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createDc():e.updateDc()}}},[e._v("\n        提交\n      ")])],1)],1)],1)},i=[],s=a("6724"),l=a("de15"),r=a("7ea2"),o={directives:{waves:s["waves"]},data:function(){return{listLoading:!1,listClusterLoading:!1,dcList:void 0,listTotal:void 0,tableKey:0,showDesc:!0,temp:this.newDcInfo(),queryParams:{Page:1,Limit:20},dialogFormVisible:!1,textMap:{create:"创建数据中心",update:"修改数据中心"},dialogStatus:"create",consulSynchronizing:!1,rules:{ClusterName:[{required:!0,message:"集群名称是必填项"}],Name:[{type:"string",required:!0,message:"数据中心名是必填项"},{validator:function(e,t,a){return/^[a-zA-Z0-9-_]+$/.test(t)?a():a(new Error("名字不能为除了a-zA-Z0-9-_字符以外的其他字符"))},trigger:"blur"}],ShardNumber:[{type:"integer",required:!0,message:"数据中心分区总数是必填项"}]}}},created:function(){this.fetchDcList()},methods:{fetchDcList:function(){var e=this;this.listLoading=!0,Object(l["b"])(this.queryParams).then(function(t){e.dcList=t.Data.Items,e.listTotal=t.Data.Total,e.listLoading=!1})},handleCreate:function(){var e=this;this.temp=this.newDcInfo(),this.dialogFormVisible=!0,this.dialogStatus="create",this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},handleUpdate:function(e){var t=this;this.temp.Id=e.Id,this.temp.Name=e.Name,this.temp.ShardNumber=e.ShardNumber,this.temp.ClusterId=e.ClusterId,this.temp.ClusterName=e.ClusterName,this.temp.Desc=e.Desc,this.dialogFormVisible=!0,this.dialogStatus="update",this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},fetchClusterData:function(e){var t=this;e&&(this.listClusterLoading=!0,Object(r["b"])().then(function(e){t.clusterList=e.Data.Items}).finally(function(){return t.listClusterLoading=!1}))},createDc:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&(Object(l["a"])(e.temp).then(function(t){e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),e.fetchDcList()}),e.dialogFormVisible=!1)})},updateDc:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&(Object(l["c"])(e.temp).then(function(t){e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),e.fetchDcList()}),e.dialogFormVisible=!1)})},handleCurrentChange:function(e){this.queryParams.Page=e,this.fetchDcList()},getClusterIdByName:function(e){for(var t=0;t<this.clusterList.length;++t)if(this.clusterList[t].Name==e){this.temp.ClusterId=this.clusterList[t].Id;break}},newDcInfo:function(){return{Id:0,ClusterId:void 0,ClusterName:"",Name:"",ShardNumber:void 0,Desc:""}}}},c=o,u=a("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);t["default"]=d.exports}}]);