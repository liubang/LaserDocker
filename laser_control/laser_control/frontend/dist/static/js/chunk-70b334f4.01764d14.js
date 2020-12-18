(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70b334f4"],{"211c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("\n      添加\n    ")]),t._v(" "),a("el-checkbox",{staticClass:"filter-item",staticStyle:{"margin-left":"15px"},on:{change:function(e){t.databaseKey=t.databaseKey+1}},model:{value:t.showDesc,callback:function(e){t.showDesc=e},expression:"showDesc"}},[t._v("\n      描述\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.databaseKey,attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"95",type:"index"}}),t._v(" "),a("el-table-column",{attrs:{label:"Laser 数据库"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.Name))])]}}])}),t._v(" "),t.showDesc?a("el-table-column",{attrs:{label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.Desc))])]}}],null,!1,2723231799)}):t._e(),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"150","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleUpdate(i)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.deleteDatabase(i)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-class"},[a("el-pagination",{attrs:{background:!0,"current-page":t.listQuery.Page,"page-size":t.listQuery.Limit,layout:"total, prev, pager, next, jumper",total:t.listTotal},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"Laser 数据库",prop:"Name"}},[a("el-input",{attrs:{disabled:"update"===t.dialogStatus},model:{value:t.temp.Name,callback:function(e){t.$set(t.temp,"Name",e)},expression:"temp.Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"Desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.temp.Desc,callback:function(e){t.$set(t.temp,"Desc",e)},expression:"temp.Desc"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("\n        取消\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        提交\n      ")])],1)],1)],1)},n=[],s=a("c48b"),l=a("6724"),o={directives:{waves:l["waves"]},data:function(){return{list:null,databaseDelete:{DatabaseId:void 0},listTotal:void 0,listLoading:!0,databaseKey:0,showDesc:!0,listQuery:{Page:1,Limit:20},dialogFormVisible:!1,textMap:{create:"创建数据库",update:"修改数据库"},dialogStatus:"create",temp:{},rules:{Name:[{required:!0,message:"数据库名称是必填项"}]}}},created:function(){this.fetchData(),this.resetTemp()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(s["c"])(this.listQuery).then(function(e){t.list=e.Data.Items,t.listTotal=e.Data.Total,t.listLoading=!1})},handleFilter:function(){this.listQuery.Page=1,this.fetchData()},resetTemp:function(){this.temp={Id:void 0,Desc:"",Name:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogFormVisible=!0,this.dialogStatus="create",this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},createData:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(Object(s["a"])(t.temp).then(function(e){t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3}),t.fetchData()}),t.dialogFormVisible=!1)})},handleUpdate:function(t){var e=this;this.temp=t,this.dialogFormVisible=!0,this.dialogStatus="update",this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},deleteDatabase:function(t){var e=this;this.databaseDelete.DatabaseId=t.Id,this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s["b"])(e.databaseDelete).then(function(t){e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),e.fetchData()})})},updateData:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&(Object(s["d"])(t.temp).then(function(e){t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}),t.fetchData()}),t.dialogFormVisible=!1)})},handleCurrentChange:function(t){this.listQuery.Page=t,this.fetchData()}}},r=o,c=a("2877"),u=Object(c["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},6724:function(t,e,a){"use strict";a("8d41");var i="@@wavesContext";function n(t,e){function a(a){var i=Object.assign({},e.value),n=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=n.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",s.appendChild(o)),n.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return t[i]?t[i].removeHandle=a:t[i]={removeHandle:a},a}var s={bind:function(t,e){t.addEventListener("click",n(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[i].removeHandle,!1),t.addEventListener("click",n(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[i].removeHandle,!1),t[i]=null,delete t[i]}},l=function(t){t.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(l)),s.install=l},"8d41":function(t,e,a){},c48b:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"a",function(){return s}),a.d(e,"d",function(){return l}),a.d(e,"b",function(){return o});var i=a("b775");function n(t){return Object(i["a"])({url:"/database/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/database/store",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/database/update",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/database/delete",method:"post",data:t})}}}]);