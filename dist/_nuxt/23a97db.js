(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{426:function(t,e,o){var content=o(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("5872c6a4",content,!0,{sourceMap:!1})},481:function(t,e,o){"use strict";o(426)},482:function(t,e,o){var n=o(40)((function(i){return i[1]}));n.push([t.i,".success-btn[data-v-eaa5dc2a]{background-color:#4caf50!important;color:#fff!important}.v-list-item-title[data-v-eaa5dc2a]{transition:-webkit-text-decoration .3s ease;transition:text-decoration .3s ease;transition:text-decoration .3s ease,-webkit-text-decoration .3s ease}",""]),n.locals={},t.exports=n},498:function(t,e,o){"use strict";o.r(e);var n=o(502),l=o(504),c=o(495),d=o(503),r=o(494),f=o(496),v=o(416),m=o(423),h=o(397),_=o(425),T=o(390),x=o(424),w=o(493),k=o(499),C=(o(23),o(7),o(259),o(17),o(97),{name:"IndexPage",data:function(){return{todos:[],newTodo:"",rules:{required:function(t){return!!t||"This field is required"}},currentEditIndex:null,filter:"all"}},computed:{filteredTodos:function(){return"all"===this.filter?this.todos:"active"===this.filter?this.todos.filter((function(t){return!t.completed})):"completed"===this.filter?this.todos.filter((function(t){return t.completed})):this.todos},activeTodosCount:function(){return this.todos.filter((function(t){return!t.completed})).length}},created:function(){this.loadTodos()},watch:{todos:{handler:function(){this.saveTodos()},deep:!0}},methods:{addTodo:function(){""!==this.newTodo.trim()&&(null!==this.currentEditIndex?(this.todos[this.currentEditIndex].text=this.newTodo,this.currentEditIndex=null):this.todos.push({id:Date.now(),text:this.newTodo,completed:!1}),this.saveTodos(),this.newTodo="")},editTodo:function(t){this.newTodo=this.todos[t].text,this.currentEditIndex=t},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!t.completed})),this.saveTodos()},deleteTodo:function(t){this.todos.splice(t,1),this.saveTodos()},saveTodos:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},loadTodos:function(){var t=localStorage.getItem("todos");t&&(this.todos=JSON.parse(t))}}}),y=(o(481),o(86)),component=Object(y.a)(C,(function(){var t=this,e=t._self._c;return e(w.a,{attrs:{justify:"center",align:"center"}},[e(r.a,{attrs:{cols:"12",sm:"8",md:"6"}},[e(c.a,[e(w.a,{attrs:{justify:"center",align:"center"}},[e(r.a,[e("h2",{staticClass:"text-center",staticStyle:{color:"#4caf50"}},[t._v("Todo App!")])])],1),t._v(" "),e(w.a,{staticClass:"mx-2"},[e(r.a,{attrs:{cols:"9"}},[e(k.a,{attrs:{label:"What needs to be done?",rules:[t.rules.required],outlined:"",dense:""},model:{value:t.newTodo,callback:function(e){t.newTodo=e},expression:"newTodo"}})],1),t._v(" "),e(r.a,{attrs:{cols:"3",align:"center",justify:"center"}},[e(n.a,{attrs:{color:"success",block:""},on:{click:t.addTodo}},[t._v("\n            "+t._s(null!==t.currentEditIndex?"Edit Todo":"Add Todo")+"\n          ")])],1)],1),t._v(" "),e(l.a,{staticClass:"my-2",attrs:{color:"success"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[e(w.a,{staticClass:"mx-2"},[e(r.a,[e(n.a,{class:{"success-btn":"all"===t.filter},attrs:{value:"all",outlined:""}},[t._v("\n              All\n            ")])],1),t._v(" "),e(r.a,[e(n.a,{class:{"success-btn":"active"===t.filter},attrs:{value:"active",outlined:""}},[t._v("\n              Active\n            ")])],1),t._v(" "),e(r.a,[e(n.a,{class:{"success-btn":"completed"===t.filter},attrs:{value:"completed",outlined:""}},[t._v("\n              Completed\n            ")])],1)],1)],1),t._v(" "),e(f.a,{staticClass:"my-4 mx-2"}),t._v(" "),e(m.a,[t.filteredTodos.length>0?e(x.a,[t._l(t.filteredTodos,(function(o,l){return e(h.a,{key:o.id},[e(T.a,[e(T.b,{style:{textDecoration:o.completed?"line-through":"none"}},[t._v("\n                "+t._s(o.text)+"\n              ")])],1),t._v(" "),e(_.a,[e(d.a,{attrs:{label:"Completed",color:"success"},model:{value:o.completed,callback:function(e){t.$set(o,"completed",e)},expression:"todo.completed"}}),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:function(e){return t.editTodo(l)}}},[e(v.a,[t._v("mdi-pencil")])],1),t._v(" "),e(n.a,{attrs:{icon:""},on:{click:function(e){return t.deleteTodo(l)}}},[e(v.a,[t._v("mdi-delete")])],1)],1)],1)})),t._v(" "),e(w.a,{staticClass:"mx-2"},[e(r.a,{attrs:{cols:"7",md:"7",sm:"7"}},[e("p",[t._v("Items left: "+t._s(t.activeTodosCount))])]),t._v(" "),e(r.a,{attrs:{cols:"5",md:"5",sm:"5"}},[e(n.a,{attrs:{text:"",color:"grey"},on:{click:t.clearCompleted}},[e(v.a,[t._v("mdi-close")]),t._v("\n                Clear Completed\n              ")],1)],1)],1)],2):e(h.a,[e(T.a,[t._v("No todos to display!")])],1)],1)],1)],1)],1)}),[],!1,null,"eaa5dc2a",null);e.default=component.exports}}]);