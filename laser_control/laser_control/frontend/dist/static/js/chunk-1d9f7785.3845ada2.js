(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d9f7785"],{"2f21":function(e,t,a){"use strict";var i=a("79e5");e.exports=function(e,t){return!!e&&i(function(){t?e.call(null,function(){},1):e.call(null)})}},"55dd":function(e,t,a){"use strict";var i=a("5ca1"),n=a("d8e8"),l=a("4bf8"),o=a("79e5"),s=[].sort,r=[1,2,3];i(i.P+i.F*(o(function(){r.sort(void 0)})||!o(function(){r.sort(null)})||!a("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(l(this)):s.call(l(this),n(e))}})},"5df3":function(e,t,a){"use strict";var i=a("02f4")(!0);a("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=i(t,a),this._i+=e.length,{value:e,done:!1})})},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),n.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=n.color,s.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o},"81f5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[0==e.asTemplate?a("div",{staticClass:"title-basic-info"},[a("h3",[e._v("基本信息")]),e._v(" "),a("el-divider")],1):e._e(),e._v(" "),0==e.asTemplate?a("div",{staticClass:"basic-info"},[a("el-form",{ref:e.formRefs[0],staticStyle:{"margin-left":"80px"},attrs:{model:e.tableConfigForm,"label-position":"left","label-width":"80px",size:"mini",rules:e.rules}},[a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"配置名称",prop:"Name"}},[a("el-input",{attrs:{placeholder:"请输入配置名称"},model:{value:e.tableConfigForm.Name,callback:function(t){e.$set(e.tableConfigForm,"Name",t)},expression:"tableConfigForm.Name"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"描述",prop:"Desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.tableConfigForm.Desc,callback:function(t){e.$set(e.tableConfigForm,"Desc",t)},expression:"tableConfigForm.Desc"}})],1)],1)],1)],1)],1):e._e(),e._v(" "),a("div",{staticClass:"title-db-options"},[a("h3",[e._v("DbOptions")]),e._v(" "),a("el-divider")],1),e._v(" "),a("div",{staticClass:"db-options"},[a("el-form",{ref:e.formRefs[1],staticStyle:{"margin-left":"80px"},attrs:{model:e.tableConfigForm,"label-position":"left","label-width":"80px",size:"mini"}},[e._l(e.tableConfigForm.dbOptionsItems,function(t,i){return a("el-row",{key:i,attrs:{gutter:5}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"配置项"+(i+1),prop:"dbOptionsItems."+i+".Name",rules:e.rules.dbOptionsItemsName}},[e.isNameSelected?a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","allow-create":"",placeholer:"请选择配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}},e._l(e.cachedDefaultConfigForm.dbOptionsItems,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1):a("el-input",{attrs:{placeholder:"请输入配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"","label-width":"0px",prop:"dbOptionsItems."+i+".Value",rules:e.rules.dbOptionsItemsValue}},[a("el-input",{attrs:{placeholder:"请输入配置项值"},model:{value:t.Value,callback:function(a){e.$set(t,"Value",a)},expression:"item.Value"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),e.removeConfigFormItem(e.optionsType.DBOPTIONS,t)}}},[e._v("删除\n          ")])],1)],1)}),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.addConfigFormItem(e.optionsType.DBOPTIONS)}}},[e._v("新增配置项")])],1)],2)],1),e._v(" "),a("div",{staticClass:"title-table-options"},[a("h3",[e._v("TableOptions")]),e._v(" "),a("el-divider")],1),e._v(" "),a("div",{staticClass:"table-options"},[a("el-form",{ref:e.formRefs[2],staticStyle:{"margin-left":"80px"},attrs:{model:e.tableConfigForm,"label-position":"left","label-width":"80px",size:"mini",rules:e.rules}},[e._l(e.tableConfigForm.tableOptionsItems,function(t,i){return a("el-row",{key:i,attrs:{gutter:5}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"配置项"+(i+1),prop:"tableOptionsItems."+i+".Name",rules:e.rules.tableOptionsItemsName}},[e.isNameSelected?a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","allow-create":"",placeholer:"请选择配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}},e._l(e.cachedDefaultConfigForm.tableOptionsItems,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1):a("el-input",{attrs:{placeholder:"请输入配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"","label-width":"0px",prop:"tableOptionsItems."+i+".Value",rules:e.rules.tableOptionsItemsValue}},[a("el-input",{attrs:{placeholder:"请输入配置项值"},model:{value:t.Value,callback:function(a){e.$set(t,"Value",a)},expression:"item.Value"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),e.removeConfigFormItem(e.optionsType.TABLEOPTIONS,t)}}},[e._v("删除\n          ")])],1)],1)}),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.addConfigFormItem(e.optionsType.TABLEOPTIONS)}}},[e._v("新增配置项")])],1)],2)],1),e._v(" "),a("div",{staticClass:"title-cf-options"},[a("h3",[e._v("CfOptions")]),e._v(" "),a("el-divider")],1),e._v(" "),a("div",{staticClass:"cf-options"},[a("el-form",{ref:e.formRefs[3],staticStyle:{"margin-left":"80px"},attrs:{model:e.tableConfigForm,"label-position":"left","label-width":"80px",size:"mini",rules:e.rules}},[e._l(e.tableConfigForm.cfOptionsItems,function(t,i){return a("el-row",{key:i,attrs:{gutter:5}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"配置项"+(i+1),prop:"cfOptionsItems."+i+".Name",rules:e.rules.cfOptionsItemsName}},[e.isNameSelected?a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"","allow-create":"",placeholer:"请选择配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}},e._l(e.cachedDefaultConfigForm.cfOptionsItems,function(e){return a("el-option",{key:e.Id,attrs:{label:e.Name,value:e.Name}})}),1):a("el-input",{attrs:{placeholder:"请输入配置项名称"},model:{value:t.Name,callback:function(a){e.$set(t,"Name",a)},expression:"item.Name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"","label-width":"0px",prop:"cfOptionsItems."+i+".Value",rules:e.rules.cfOptionsItemsValue}},[a("el-input",{attrs:{placeholder:"请输入配置项值"},model:{value:t.Value,callback:function(a){e.$set(t,"Value",a)},expression:"item.Value"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.preventDefault(),e.removeConfigFormItem(e.optionsType.CFOPTIONS,t)}}},[e._v("删除\n          ")])],1)],1)}),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){return e.addConfigFormItem(e.optionsType.CFOPTIONS)}}},[e._v("新增配置项")])],1)],2)],1),e._v(" "),a("div",{staticClass:"save-table-config",staticStyle:{"text-align":"center"}},[a("br"),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveTableConfig()}}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:function(t){return e.discardChanges()}}},[e._v("丢弃更改")])],1)])},n=[],l=(a("96cf"),a("55dd"),a("5df3"),a("ac6a"),a("a266")),o=a("6724"),s=(a("61f7"),{name:"TableConfigTemplate",directives:{waves:o["waves"]},props:{isNameSelected:Boolean,configName:{type:String,default:"default"},asTemplate:{type:Boolean,default:!0}},data:function(){return{CONFIG_TEMPLATE_NAME:"default",optionsType:{DBOPTIONS:1,TABLEOPTIONS:2,CFOPTIONS:3},genNextId:this.nextId(),tableConfigForm:this.newTableConfigForm(),cachedTableConfig:null,cachedDefaultConfigForm:this.newTableConfigForm(),formRefs:["formBasicInfo","formDbOptions","formTableOptions","formCfOptions"],formCheckResults:[],queryParams:{Page:1,Limit:1,Name:"default"},rules:{Name:[{required:!0,message:"配置名称不能为空"}],dbOptionsItemsName:[{required:!0,message:"配置项名称不能为空",trigger:"blur"},{validator:function(e,t,a){return a()},trigger:"blur"}],dbOptionsItemsValue:[{required:!0,message:"配置项值不能为空",trigger:"blur"}],tableOptionsItemsName:[{required:!0,message:"配置项名称不能为空",trigger:"blur"}],tableOptionsItemsValue:[{required:!0,message:"配置项值不能为空",trigger:"blur"}],cfOptionsItemsName:[{required:!0,message:"配置项名称不能为空",trigger:"blur"}],cfOptionsItemsValue:[{required:!0,message:"配置项值不能为空",trigger:"blur"}]}}},created:function(){0==this.asTemplate&&(this.queryParams.Name="default",this.fetchTableConfig(!1,!0)),this.queryParams.Name=this.configName,this.fetchTableConfig(!0)},watch:{configName:function(e,t){if(""==e)return this.tableConfigForm=this.newTableConfigForm(),this.cachedTableConfig=null,void this.fillFormWithDefaultTableConfigOnCreate();this.queryParams.Name=e,this.fetchTableConfig(!0)}},methods:{fetchTableConfig:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(""!=this.queryParams.Name){var i=null;t&&(i=this.fullScreenLoading("加载中..."));var n=JSON.parse(JSON.stringify(this.queryParams));Object(l["d"])(n).then(function(t){t.Data.Items.length>=1&&(0==a?(e.cachedTableConfig=t.Data.Items[0],e.tableConfigForm=e.fillFormWithTableConfig(e.cachedTableConfig)):(e.cachedDefaultConfigForm=e.fillFormWithTableConfig(t.Data.Items[0]),e.fillFormWithDefaultTableConfigOnCreate()))}).finally(function(){null!=i&&i.close()})}},saveTableConfig:function(){var e=this;this.formCheckResults=[],this.formRefs.forEach(function(t){e.checkForm(t)}),Promise.all(this.formCheckResults).then(function(){var t,a=e.fullScreenLoading("正在保存.."),i=e.fillTableConfigWithForm(e.tableConfigForm),n=e.isTableConfigChanged(i);n&&(i.Version+=1),t=void 0==i.Id?l["a"]:l["e"],t(i).then(function(t){e.$notify({title:"Success",message:"Save Successfully",type:"success",duration:2e3}),e.fetchTableConfig(!1),0==e.asTemplate&&e.$parent.$parent.postSaved()}).finally(function(){a.close()})}).catch(function(e){console.log(e)})},discardChanges:function(){void 0==this.cachedTableConfig?this.tableConfigForm=this.newTableConfigForm():this.tableConfigForm=this.fillFormWithTableConfig(this.cachedTableConfig)},checkForm:function(e){var t=this,a=new Promise(function(a,i){var n=t.$refs[e];void 0!=n?n.validate(function(e){e?a():i()}):a()});t.formCheckResults.push(a)},fullScreenLoading:function(e){var t=this.$loading({lock:!0,text:e,spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});return t},getTableConfigItemsByType:function(e,t){var a=null;switch(t){case this.optionsType.DBOPTIONS:a=e.dbOptionsItems;break;case this.optionsType.TABLEOPTIONS:a=e.tableOptionsItems;break;case this.optionsType.CFOPTIONS:a=e.cfOptionsItems;break;default:break}return a},addConfigFormItem:function(e){var t=this.getTableConfigItemsByType(this.tableConfigForm,e);null!=t&&t.push({Name:"",Value:"",Key:this.genNextId.next().value})},removeConfigFormItem:function(e,t){var a=this.getTableConfigItemsByType(this.tableConfigForm,e);if(null!=a){var i=a.indexOf(t);-1!=i&&a.splice(i,1)}},newTableConfigForm:function(){return{Id:void 0,Name:this.configName,Version:0,IsDefault:0,dbOptionsItems:[],tableOptionsItems:[],cfOptionsItems:[]}},fillFormWithDefaultTableConfigOnCreate:function(){""===this.configName&&(this.tableConfigForm=JSON.parse(JSON.stringify(this.cachedDefaultConfigForm)),this.tableConfigForm.Id=void 0,this.tableConfigForm.Name="",this.tableConfigForm.Version=0,this.tableConfigForm.IsDefault=0)},fillFormWithTableConfig:function(e){var t=this.newTableConfigForm();if(null!=e){t.Id=e.Id,t.Name=e.Name,t.Version=e.Version,t.IsDefault=e.IsDefault,t.Desc=e.Desc;var a=e.ConfigItems;if(null==a)return;for(var i=0;i<a.length;i++){var n=this.getTableConfigItemsByType(t,a[i].Type);n.push({Name:a[i].Name,Value:a[i].Value,Key:this.genNextId.next().value})}}return t},fillTableConfigWithForm:function(e){var t={};for(var a in t.Id=e.Id,t.Name=e.Name,t.Version=e.Version,1==this.asTemplate?t.IsDefault=1:t.IsDefault=0,t.Desc=e.Desc,t.ConfigItems=new Array,this.optionsType){var i=this.getTableConfigItemsByType(e,this.optionsType[a]);if(null!=i)for(var n=0;n<i.length;n++)t.ConfigItems.push({Name:i[n].Name,Value:i[n].Value,Type:this.optionsType[a]})}return t},isTableConfigChanged:function(e){if(!this.cachedTableConfig)return!0;var t=JSON.parse(JSON.stringify(this.cachedTableConfig)),a=JSON.parse(JSON.stringify(e));if(t.Name!==e.Name||t.ConfigItems.length!==a.ConfigItems.length)return!0;var i=function(e,t){return e.Name<t.Name?-1:e.Name>t.Name?1:0};t.ConfigItems.sort(i),a.ConfigItems.sort(i);for(var n=0;n<t.ConfigItems.length;++n){var l=t.ConfigItems[n];if(l.Name!==a.ConfigItems[n].Name||l.Value!==a.ConfigItems[n].Value||l.Type!==a.ConfigItems[n].Type)return!0}return!1},nextId:regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=0;case 1:return t++,e.next=5,t;case 5:e.next=1;break;case 7:case"end":return e.stop()}},e)})}}),r=s,f=a("2877"),c=Object(f["a"])(r,i,n,!1,null,null,null);t["default"]=c.exports},"8d41":function(e,t,a){},a266:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"b",function(){return r});var i=a("b775");function n(e){return Object(i["a"])({url:"/table_config/list",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/table_config/list_detail",method:"get",params:e})}function o(e){return Object(i["a"])({url:"/table_config/store",method:"post",data:e})}function s(e){return Object(i["a"])({url:"/table_config/update",method:"post",data:e})}function r(e){return Object(i["a"])({url:"/table_config/delete",method:"post",data:e})}}}]);