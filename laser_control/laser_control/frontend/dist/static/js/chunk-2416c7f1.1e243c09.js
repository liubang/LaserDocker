(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2416c7f1"],{3520:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",disabled:0!=t.listTotal},on:{click:t.handleCreate}},[t._v("\n      添加\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-upload",loading:t.consulSynchronizing},on:{click:t.synchronizeClusterInfoToConsul}},[t._v("\n      同步\n    ")]),t._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(e){t.tableKey=t.tableKey+1}},model:{value:t.showDesc,callback:function(e){t.showDesc=e},expression:"showDesc"}},[t._v("\n      描述\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,attrs:{data:t.clusterList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"集群名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.Name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"别名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.Alias))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分片总数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.ShardTotal))])]}}])}),t._v(" "),t.showDesc?a("el-table-column",{attrs:{label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.Desc))])]}}],null,!1,2723231799)}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"80","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v("\n          修改\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-class"},[a("el-pagination",{attrs:{background:!0,"current-page":t.queryParams.Page,"page-size":t.queryParams.Limit,layout:"total, prev, pager, next, jumper",total:t.listTotal},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"集群名",prop:"Name"}},[a("el-input",{attrs:{disabled:"update"==t.dialogStatus},model:{value:t.temp.Name,callback:function(e){t.$set(t.temp,"Name",e)},expression:"temp.Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"别名",prop:"Alias"}},[a("el-input",{model:{value:t.temp.Alias,callback:function(e){t.$set(t.temp,"Alias",e)},expression:"temp.Alias"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"分片总数",prop:"ShardTotal"}},[a("el-input",{attrs:{type:"number",min:"1",oninput:"value=value.replace(/[^\\d]/g,'')",disabled:"update"==t.dialogStatus},model:{value:t.temp.ShardTotal,callback:function(e){t.$set(t.temp,"ShardTotal",t._n(e))},expression:"temp.ShardTotal"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"Desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.temp.Desc,callback:function(e){t.$set(t.temp,"Desc",e)},expression:"temp.Desc"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        取消\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createCluster():t.updateCluster()}}},[t._v("\n        提交\n      ")])],1)],1)],1)},i=[],l=a("6724"),s=a("7ea2"),o={directives:{waves:l["waves"]},data:function(){return{listLoading:!1,clusterList:void 0,listTotal:void 0,tableKey:0,showDesc:!0,temp:this.newClusterInfo(),queryParams:{Page:1,Limit:20},dialogFormVisible:!1,textMap:{create:"创建集群",update:"修改集群"},dialogStatus:"create",consulSynchronizing:!1,rules:{Name:[{required:!0,message:"集群名是必填项"}],Alias:[{required:!0,message:"可读别名是必填项"}],ShardTotal:[{required:!0,message:"分区总数是必填项"}]}}},created:function(){this.fetchClusterList()},methods:{fetchClusterList:function(){var t=this;this.listLoading=!0,Object(s["b"])(this.queryParams).then(function(e){t.clusterList=e.Data.Items,t.listTotal=e.Data.Total,t.listLoading=!1})},handleCreate:function(){var t=this;this.temp=this.newClusterInfo(),this.dialogFormVisible=!0,this.dialogStatus="create",this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},handleUpdate:function(t){var e=this;this.temp.Id=t.Id,this.temp.Name=t.Name,this.temp.Alias=t.Alias,this.temp.ShardTotal=t.ShardTotal,this.temp.Desc=t.Desc,this.dialogFormVisible=!0,this.dialogStatus="update",this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createCluster:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(Object(s["a"])(t.temp).then(function(e){t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),t.fetchClusterList()}),t.dialogFormVisible=!1)})},updateCluster:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(Object(s["d"])(t.temp).then(function(e){t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),t.fetchClusterList()}),t.dialogFormVisible=!1)})},synchronizeClusterInfoToConsul:function(){var t=this;this.$confirm("确认要同步集群信息？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.consulSynchronizing=!0,Object(s["c"])().then(function(e){t.$notify({title:"Success",message:"Synchronize Successfully",type:"success",duration:2e3})}).finally(function(){t.consulSynchronizing=!1})}).catch(function(){})},handleCurrentChange:function(t){this.queryParams.Page=t,this.fetchClusterList()},newClusterInfo:function(){return{Id:0,Name:"",Alias:"",ShardTotal:void 0,Desc:""}}}},r=o,c=a("2877"),u=Object(c["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports},6724:function(t,e,a){"use strict";a("8d41");var n="@@wavesContext";function i(t,e){function a(a){var n=Object.assign({},e.value),i=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=i.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var s=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",l.appendChild(o)),i.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=i.color,o.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=a:t[n]={removeHandle:a},a}var l={bind:function(t,e){t.addEventListener("click",i(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",i(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},s=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s},"7ea2":function(t,e,a){"use strict";a.d(e,"b",function(){return i}),a.d(e,"a",function(){return l}),a.d(e,"d",function(){return s}),a.d(e,"c",function(){return o});var n=a("b775");function i(t){return Object(n["a"])({url:"/cluster/list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/cluster/store",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/cluster/update",method:"post",data:t})}function o(){return Object(n["a"])({url:"/cluster/synchronize",method:"post"})}},"8d41":function(t,e,a){}}]);